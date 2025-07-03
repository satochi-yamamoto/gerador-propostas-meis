
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Share2, Palette, Upload, Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import ProposalPreview from '@/components/ProposalPreview';
import { generatePDF } from '@/lib/pdfGenerator';
import { USAGE_LIMIT } from '@/lib/utils';

const LOGO_MAX_SIZE = 2 * 1024 * 1024; // 2MB

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index] = {
      ...newItems[index],
      [field]: value
    };
    
    if (field === 'quantity' || field === 'unitPrice') {
      newItems[index].total = newItems[index].quantity * newItems[index].unitPrice;
    }
    
    setFormData(prev => ({
      ...prev,
      items: newItems
    }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, unitPrice: 0, total: 0 }]
    }));
  };

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }));
    }
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > LOGO_MAX_SIZE) {
        toast({
          title: "Arquivo muito grande",
          description: "O logo deve ter no máximo 2MB.",
          variant: "destructive"
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange('companyLogo', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      await generatePDF(formData);
      
      const newCount = usageCount + 1;
      setUsageCount(newCount);
      localStorage.setItem('proposalUsageCount', newCount.toString());
      
      toast({
        title: "PDF gerado com sucesso!",
        description: `Proposta baixada. Você tem ${USAGE_LIMIT - newCount} gerações restantes este mês.`
      });
    } catch (error) {
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
                  <Palette className="text-blue-600" size={20} />
                  Dados da Proposta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="empresa" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="empresa">Empresa</TabsTrigger>
                    <TabsTrigger value="cliente">Cliente</TabsTrigger>
                    <TabsTrigger value="itens">Itens</TabsTrigger>
                    <TabsTrigger value="config">Config</TabsTrigger>
                  </TabsList>

                  <TabsContent value="empresa" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">Nome da Empresa *</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          placeholder="Sua Empresa LTDA"
                        />
                      </div>
                      <div>
                        <Label htmlFor="companyDocument">CNPJ/CPF</Label>
                        <Input
                          id="companyDocument"
                          value={formData.companyDocument}
                          onChange={(e) => handleInputChange('companyDocument', e.target.value)}
                          placeholder="00.000.000/0001-00"
                        />
                      </div>
                      <div>
                        <Label htmlFor="companyPhone">Telefone</Label>
                        <Input
                          id="companyPhone"
                          value={formData.companyPhone}
                          onChange={(e) => handleInputChange('companyPhone', e.target.value)}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="companyEmail">E-mail</Label>
                        <Input
                          id="companyEmail"
                          type="email"
                          value={formData.companyEmail}
                          onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                          placeholder="contato@empresa.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="companyAddress">Endereço</Label>
                      <Input
                        id="companyAddress"
                        value={formData.companyAddress}
                        onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                        placeholder="Rua, número, bairro, cidade - UF"
                      />
                    </div>
                    <div>
                      <Label htmlFor="logo">Logo da Empresa</Label>
                      <div className="flex items-center gap-4">
                        <Input
                          id="logo"
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="flex-1"
                        />
                        <Button variant="outline" size="sm">
                          <Upload size={16} />
                        </Button>
                      </div>
                      {formData.companyLogo && (
                        <div className="mt-2">
                          <img
                            src={formData.companyLogo}
                            alt="Logo preview"
                            className="h-16 w-auto object-contain border rounded"
                          />
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="cliente" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="clientName">Nome do Cliente *</Label>
                        <Input
                          id="clientName"
                          value={formData.clientName}
                          onChange={(e) => handleInputChange('clientName', e.target.value)}
                          placeholder="Cliente LTDA"
                        />
                      </div>
                      <div>
                        <Label htmlFor="clientDocument">CNPJ/CPF</Label>
                        <Input
                          id="clientDocument"
                          value={formData.clientDocument}
                          onChange={(e) => handleInputChange('clientDocument', e.target.value)}
                          placeholder="00.000.000/0001-00"
                        />
                      </div>
                      <div>
                        <Label htmlFor="clientPhone">Telefone</Label>
                        <Input
                          id="clientPhone"
                          value={formData.clientPhone}
                          onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="clientEmail">E-mail</Label>
                        <Input
                          id="clientEmail"
                          type="email"
                          value={formData.clientEmail}
                          onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                          placeholder="cliente@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="clientAddress">Endereço</Label>
                      <Input
                        id="clientAddress"
                        value={formData.clientAddress}
                        onChange={(e) => handleInputChange('clientAddress', e.target.value)}
                        placeholder="Rua, número, bairro, cidade - UF"
                      />
                    </div>
                    <div>
                      <Label htmlFor="proposalDescription">Descrição da Proposta</Label>
                      <Textarea
                        id="proposalDescription"
                        value={formData.proposalDescription}
                        onChange={(e) => handleInputChange('proposalDescription', e.target.value)}
                        placeholder="Descreva brevemente o que está sendo proposto..."
                        rows={3}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="itens" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Serviços/Produtos</h3>
                      <Button onClick={addItem} size="sm" variant="outline">
                        <Plus size={16} className="mr-1" />
                        Adicionar
                      </Button>
                    </div>
                    
                    {formData.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 border rounded-lg space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">Item {index + 1}</span>
                          {formData.items.length > 1 && (
                            <Button
                              onClick={() => removeItem(index)}
                              size="sm"
                              variant="ghost"
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </Button>
                          )}
                        </div>
                        
                        <div>
                          <Label>Descrição *</Label>
                          <Textarea
                            value={item.description}
                            onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                            placeholder="Descreva o serviço ou produto..."
                            rows={2}
                          />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <Label>Quantidade</Label>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 1)}
                            />
                          </div>
                          <div>
                            <Label>Valor Unitário</Label>
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.unitPrice}
                              onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                              placeholder="0,00"
                            />
                          </div>
                          <div>
                            <Label>Total</Label>
                            <Input
                              value={`R$ ${item.total.toFixed(2)}`}
                              readOnly
                              className="bg-gray-50"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">Valor Total:</span>
                        <span className="font-bold text-xl text-blue-600">
                          R$ {totalValue.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="config" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="validityDays">Validade (dias)</Label>
                        <Input
                          id="validityDays"
                          type="number"
                          min="1"
                          value={formData.validityDays}
                          onChange={(e) => handleInputChange('validityDays', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="paymentTerms">Forma de Pagamento</Label>
                        <Input
                          id="paymentTerms"
                          value={formData.paymentTerms}
                          onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
                          placeholder="À vista, parcelado, etc."
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="primaryColor">Cor Primária</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="primaryColor"
                            type="color"
                            value={formData.primaryColor}
                            onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                            className="w-16 h-10"
                          />
                          <Input
                            value={formData.primaryColor}
                            onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                            placeholder="#3b82f6"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="secondaryColor">Cor Secundária</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="secondaryColor"
                            type="color"
                            value={formData.secondaryColor}
                            onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                            className="w-16 h-10"
                          />
                          <Input
                            value={formData.secondaryColor}
                            onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                            placeholder="#1e40af"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="observations">Observações</Label>
                      <Textarea
                        id="observations"
                        value={formData.observations}
                        onChange={(e) => handleInputChange('observations', e.target.value)}
                        placeholder="Informações adicionais, termos e condições..."
                        rows={4}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t">
                  <Button
                    onClick={handleGeneratePDF}
                    className="flex-1 pulse-glow"
                    disabled={usageCount >= USAGE_LIMIT}
                  >
                    <Download size={16} className="mr-2" />
                    Gerar PDF
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="flex-1"
                    disabled={usageCount >= USAGE_LIMIT}
                  >
                    <Share2 size={16} className="mr-2" />
                    Compartilhar
                  </Button>
                  <Button
                    onClick={() => setShowPreview(!showPreview)}
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                  >
                    {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                  <ProposalPreview data={formData} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProposalGenerator;
