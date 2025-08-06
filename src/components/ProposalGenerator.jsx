import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Share2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import ProposalPreviewWrapper from '@/components/ProposalPreviewWrapper';
import { USAGE_LIMIT } from '@/lib/utils';

// Lazy load form components
const CompanyForm = lazy(() => import('@/components/CompanyForm'));
const ClientForm = lazy(() => import('@/components/ClientForm'));
const ProposalDetailsForm = lazy(() => import('@/components/ProposalDetailsForm'));
const ItemsForm = lazy(() => import('@/components/ItemsForm'));
const CustomizationForm = lazy(() => import('@/components/CustomizationForm'));

const ProposalGenerator = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);
  const [usageCount, setUsageCount] = useState(0);
  const [formData, setFormData] = useState({
    // Dados da empresa
    companyName: '',
    companyDocument: '',
    companyPhone: '',
    companyEmail: '',
    companyAddress: '',
    companyLogo: null,
    
    // Dados do cliente
    clientName: '',
    clientDocument: '',
    clientPhone: '',
    clientEmail: '',
    clientAddress: '',
    
    // Proposta
    proposalTitle: 'Proposta Comercial',
    proposalDescription: '',
    validityDays: '30',
    paymentTerms: 'À vista',
    
    // Serviços/Produtos
    items: [
      { description: '', quantity: 1, unitPrice: 0, total: 0 }
    ],
    
    // Personalização
    primaryColor: '#3b82f6',
    secondaryColor: '#1e40af',
    
    // Observações
    observations: ''
  });

  useEffect(() => {
    const count = localStorage.getItem('proposalUsageCount') || '0';
    setUsageCount(parseInt(count));
  }, []);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleItemChange = useCallback((index, field, value) => {
    setFormData(prev => {
      const newItems = [...prev.items];
      newItems[index] = {
        ...newItems[index],
        [field]: value
      };
      
      if (field === 'quantity' || field === 'unitPrice') {
        newItems[index].total = newItems[index].quantity * newItems[index].unitPrice;
      }
      
      return {
        ...prev,
        items: newItems
      };
    });
  }, []);

  const addItem = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, unitPrice: 0, total: 0 }]
    }));
  }, []);

  const removeItem = useCallback((index) => {
    setFormData(prev => {
      if (prev.items.length > 1) {
        return {
          ...prev,
          items: prev.items.filter((_, i) => i !== index)
        };
      }
      return prev;
    });
  }, []);

  const checkUsageLimit = () => {
    if (usageCount >= USAGE_LIMIT) {
      toast({
        title: "Limite atingido",
        description: `Você já gerou ${USAGE_LIMIT} propostas este mês. Limite será renovado no próximo mês.`,
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleGeneratePDF = async () => {
    if (!checkUsageLimit()) return;
    
    if (!formData.companyName || !formData.clientName || formData.items.some(item => !item.description)) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha pelo menos o nome da empresa, cliente e descrição dos itens.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Dynamically import the PDF generation function
      const { generatePDFLazy } = await import('@/lib/pdfGeneratorLazy');
      const pdf = await generatePDFLazy(formData);
      
      // Save the PDF
      pdf.save(`proposta-${formData.clientName.replace(/\s+/g, '-').toLowerCase()}.pdf`);
      
      const newCount = usageCount + 1;
      setUsageCount(newCount);
      localStorage.setItem('proposalUsageCount', newCount.toString());
      
      toast({
        title: "PDF gerado com sucesso!",
        description: `Proposta baixada. Você tem ${USAGE_LIMIT - newCount} gerações restantes este mês.`
      });
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast({
        title: "Erro ao gerar PDF",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    }
  };

  const handleShare = () => {
    if (!checkUsageLimit()) return;
    
    const message = `Olá! Segue minha proposta comercial para ${formData.clientName}. 
    
Empresa: ${formData.companyName}
Valor total: R$ ${formData.items.reduce((sum, item) => sum + item.total, 0).toFixed(2)}
Validade: ${formData.validityDays} dias

Para mais detalhes, vamos conversar!`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Compartilhamento preparado!",
      description: "Mensagem criada para WhatsApp. Complete com o PDF anexado."
    });
  };

  const totalValue = formData.items.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white floating-animation">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl font-bold gradient-text">
              Gerador de Propostas MEI
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Crie propostas comerciais profissionais em minutos. Personalize, visualize e baixe em PDF.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ✨ Totalmente Gratuito
            </div>
            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              📱 Responsivo
            </div>
            <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {USAGE_LIMIT - usageCount} gerações restantes
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-blue-600" size={20} />
                  Dados da Proposta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="empresa" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="empresa">Empresa</TabsTrigger>
                    <TabsTrigger value="cliente">Cliente</TabsTrigger>
                    <TabsTrigger value="proposta">Proposta</TabsTrigger>
                    <TabsTrigger value="itens">Itens</TabsTrigger>
                    <TabsTrigger value="config">Config</TabsTrigger>
                  </TabsList>

                  <TabsContent value="empresa" className="space-y-4">
                    <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded"></div>}>
                      <CompanyForm 
                        formData={formData} 
                        onInputChange={handleInputChange} 
                        toast={toast} 
                      />
                    </Suspense>
                  </TabsContent>

                  <TabsContent value="cliente" className="space-y-4">
                    <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded"></div>}>
                      <ClientForm 
                        formData={formData} 
                        onInputChange={handleInputChange} 
                      />
                    </Suspense>
                  </TabsContent>

                  <TabsContent value="proposta" className="space-y-4">
                    <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded"></div>}>
                      <ProposalDetailsForm 
                        formData={formData} 
                        onInputChange={handleInputChange} 
                      />
                    </Suspense>
                  </TabsContent>

                  <TabsContent value="itens" className="space-y-4">
                    <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded"></div>}>
                      <ItemsForm 
                        formData={formData} 
                        onItemChange={handleItemChange}
                        onAddItem={addItem}
                        onRemoveItem={removeItem}
                      />
                    </Suspense>
                  </TabsContent>

                  <TabsContent value="config" className="space-y-4">
                    <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded"></div>}>
                      <CustomizationForm 
                        formData={formData} 
                        onInputChange={handleInputChange} 
                      />
                    </Suspense>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleGeneratePDF}
                className="flex-1 gradient-bg text-white hover:shadow-lg transition-all duration-300"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Gerar PDF
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="flex-1 hover:bg-green-50 border-green-300"
                size="lg"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Compartilhar
              </Button>
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="outline"
                className="lg:hidden"
                size="lg"
              >
                {showPreview ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </Button>
            </motion.div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`${showPreview ? 'block' : 'hidden lg:block'}`}
          >
            <Card className="glass-effect sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="text-purple-600" size={20} />
                  Visualização da Proposta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-[600px] overflow-y-auto">
                  <ProposalPreviewWrapper data={formData} isVisible={showPreview} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a 
              href="#privacy-policy" 
              className="hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = 'privacy-policy';
              }}
            >
              Política de Privacidade
            </a>
            <span>•</span>
            <a 
              href="#terms-of-service" 
              className="hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = 'terms-of-service';
              }}
            >
              Termos de Uso
            </a>
            <span>•</span>
            <a 
              href="https://github.com/satochi-yamamoto/gerador-propostas-meis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p>© 2025 Gerador de Propostas MEI - Ferramenta gratuita para microempreendedores</p>
          <p className="mt-2 text-xs text-gray-400">
            🔒 Todos os seus dados são armazenados apenas no seu navegador. Nenhuma informação é enviada para nossos servidores.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ProposalGenerator;