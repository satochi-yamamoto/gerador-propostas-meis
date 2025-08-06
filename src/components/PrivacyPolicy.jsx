import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Database, Eye } from 'lucide-react';

const PrivacyPolicy = () => {
  const handleBackHome = () => {
    window.location.hash = '';
  };

  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Gerador de Propostas MEI</title>
        <meta name="description" content="Política de Privacidade do Gerador de Propostas MEI. Seus dados são armazenados apenas localmente no seu navegador." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gerador-propostas-meis.vercel.app/#privacy-policy" />
      </Helmet>
      
      <div className="min-h-screen p-4 lg:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button 
              onClick={handleBackHome}
              variant="outline"
              className="mb-4"
            >
              ← Voltar ao Início
            </Button>
          </div>

          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="gradient-text text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-blue-600" />
                Política de Privacidade
              </CardTitle>
              <p className="text-gray-600">Última atualização: 06 de agosto de 2025</p>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Destaque Principal */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">🔒 PRIVACIDADE TOTAL GARANTIDA</h3>
                    <p className="text-green-700 leading-relaxed">
                      <strong>NENHUM dado pessoal ou empresarial é armazenado em nossos servidores.</strong> 
                      Todas as informações que você insere (dados da empresa, cliente, itens da proposta) 
                      ficam armazenadas exclusivamente no seu navegador, garantindo total privacidade e controle sobre seus dados.
                    </p>
                  </div>
                </div>
              </div>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  1. Como Seus Dados São Tratados
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-medium text-blue-800 mb-2">✅ O QUE FICA NO SEU NAVEGADOR</h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Nome e dados da sua empresa</li>
                      <li>• Informações dos clientes</li>
                      <li>• Itens e valores das propostas</li>
                      <li>• Logotipo empresarial</li>
                      <li>• Configurações de cores</li>
                      <li>• Contador de uso mensal</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-medium text-red-800 mb-2">❌ O QUE NÃO COLETAMOS</h3>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Dados pessoais ou empresariais</li>
                      <li>• Conteúdo das propostas</li>
                      <li>• Informações de clientes</li>
                      <li>• Documentos ou arquivos</li>
                      <li>• Dados bancários ou financeiros</li>
                      <li>• Informações sensíveis</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">2. Tecnologia LocalStorage</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">
                    Utilizamos a tecnologia <strong>LocalStorage</strong> do seu navegador para armazenar suas informações. 
                    Esta tecnologia mantém os dados <strong>exclusivamente no seu dispositivo</strong>, sem qualquer 
                    transmissão para servidores externos. É como um "arquivo local" que apenas você tem acesso.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  3. Dados de Analytics (Anônimos)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Coletamos apenas dados estatísticos anônimos através do Vercel Analytics para melhorar nossa aplicação:
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <ul className="text-yellow-800 space-y-2">
                    <li>• <strong>Páginas visitadas</strong> - Para entender quais recursos são mais utilizados</li>
                    <li>• <strong>Tempo de permanência</strong> - Para otimizar a experiência do usuário</li>
                    <li>• <strong>Tipo de dispositivo</strong> - Para melhorar a responsividade</li>
                    <li>• <strong>Performance da aplicação</strong> - Para garantir velocidade ideal</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Importante:</strong> Estes dados são completamente anônimos e não podem ser vinculados à sua identidade.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">4. Controle Total dos Seus Dados</h2>
                <div className="space-y-4">
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h3 className="font-medium text-blue-800 mb-2">🗑️ Como Limpar Seus Dados</h3>
                    <p className="text-gray-700 text-sm">
                      Você pode excluir todos os seus dados a qualquer momento através das configurações do navegador 
                      ou limpando o histórico de navegação. Os dados também são removidos automaticamente se você 
                      desinstalar ou redefinir o navegador.
                    </p>
                  </div>
                  
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h3 className="font-medium text-blue-800 mb-2">🔄 Portabilidade</h3>
                    <p className="text-gray-700 text-sm">
                      Como os dados ficam no seu navegador, você tem controle total para fazer backup, 
                      exportar ou transferir suas informações quando desejar.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">5. Cookies e Tecnologias Similares</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Utilizamos cookies apenas para:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>Funcionalidade básica</strong> - Manter suas preferências durante a sessão</li>
                  <li><strong>Analytics anônimos</strong> - Vercel Analytics para estatísticas gerais</li>
                  <li><strong>Performance</strong> - Cache de recursos para carregamento mais rápido</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  Não utilizamos cookies de rastreamento ou publicidade direcionada.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">6. Google AdSense</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Este site pode exibir anúncios através do Google AdSense. O Google pode usar cookies para:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Exibir anúncios baseados em visitas anteriores</li>
                  <li>Personalizar anúncios com base no seu interesse</li>
                  <li>Medir a efetividade dos anúncios</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
                  <p className="text-blue-700 text-sm">
                    <strong>Você pode optar por não receber anúncios personalizados</strong> visitando as 
                    <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" 
                       className="underline hover:text-blue-800"> Configurações de Anúncios do Google</a>.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">7. Segurança</h2>
                <p className="text-gray-700 leading-relaxed">
                  Como seus dados ficam apenas no seu navegador, a segurança depende das medidas de 
                  proteção do seu dispositivo. Recomendamos:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                  <li>Manter o navegador sempre atualizado</li>
                  <li>Usar senhas seguras em seus dispositivos</li>
                  <li>Não utilizar a aplicação em computadores públicos para dados sensíveis</li>
                  <li>Fazer backup regular dos dados importantes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">8. Conformidade com LGPD</h2>
                <p className="text-gray-700 leading-relaxed">
                  Esta aplicação está em total conformidade com a Lei Geral de Proteção de Dados (LGPD), pois:
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                  <ul className="text-green-700 space-y-1">
                    <li>✅ Não processamos dados pessoais em nossos servidores</li>
                    <li>✅ Você mantém controle total sobre seus dados</li>
                    <li>✅ Não há transferência internacional de dados</li>
                    <li>✅ Transparência total sobre o uso de dados</li>
                    <li>✅ Direito ao esquecimento garantido (você pode limpar os dados)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">9. Alterações nesta Política</h2>
                <p className="text-gray-700 leading-relaxed">
                  Eventuais alterações nesta política serão comunicadas através de aviso na aplicação. 
                  Mudanças significativas só entrarão em vigor após 30 dias da notificação.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">10. Contato</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">
                    Para dúvidas sobre esta política de privacidade, entre em contato através do repositório GitHub:
                  </p>
                  <a href="https://github.com/satochi-yamamoto/gerador-propostas-meis/issues" 
                     className="text-blue-600 hover:underline inline-block mt-2"
                     target="_blank" rel="noopener noreferrer">
                    📧 github.com/satochi-yamamoto/gerador-propostas-meis/issues
                  </a>
                </div>
              </section>

              {/* Resumo Final */}
              <div className="bg-blue-600 text-white rounded-lg p-6 mt-8">
                <h3 className="font-semibold text-lg mb-3">📋 Resumo da Nossa Política</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>✅ O que garantimos:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Privacidade total dos seus dados</li>
                      <li>• Armazenamento apenas local</li>
                      <li>• Controle total para você</li>
                      <li>• Transparência completa</li>
                    </ul>
                  </div>
                  <div>
                    <strong>❌ O que não fazemos:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Armazenar dados em servidores</li>
                      <li>• Vender informações</li>
                      <li>• Rastrear comportamento</li>
                      <li>• Acessar dados pessoais</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
