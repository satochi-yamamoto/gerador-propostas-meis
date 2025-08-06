import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Gerador de Propostas MEI</title>
        <meta name="description" content="Política de Privacidade do Gerador de Propostas MEI. Conheça como tratamos seus dados pessoais." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gerador-propostas-meis.vercel.app/privacy-policy" />
      </Helmet>
      
      <div className="min-h-screen p-4 lg:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="gradient-text text-2xl">Política de Privacidade</CardTitle>
              <p className="text-gray-600">Última atualização: 06 de janeiro de 2025</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">1. Informações Gerais</h2>
                <p className="text-gray-700 leading-relaxed">
                  O Gerador de Propostas MEI é uma aplicação web gratuita que permite a criação de propostas comerciais 
                  profissionais para microempreendedores individuais. Esta política descreve como coletamos, usamos e 
                  protegemos suas informações.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">2. Dados Coletados</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-gray-800">2.1 Dados Armazenados Localmente</h3>
                    <p className="text-gray-700">
                      Todos os dados inseridos nos formulários (informações da empresa, cliente, itens da proposta) 
                      são armazenados exclusivamente no seu navegador (localStorage). Estes dados não são enviados 
                      para nossos servidores.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">2.2 Dados de Analytics</h3>
                    <p className="text-gray-700">
                      Utilizamos Vercel Analytics para coletar dados anônimos de uso, como páginas visitadas, 
                      tempo de permanência e informações básicas do dispositivo, para melhorar nossa aplicação.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">3. Uso das Informações</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gerar propostas comerciais conforme solicitado pelo usuário</li>
                  <li>Melhorar a experiência e funcionalidade da aplicação</li>
                  <li>Análise estatística anônima de uso da plataforma</li>
                  <li>Exibir anúncios relevantes através do Google AdSense</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">4. Cookies e Tecnologias Similares</h2>
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos cookies e tecnologias similares para analytics e publicidade. Os cookies do Google AdSense 
                  são usados para exibir anúncios personalizados. Você pode gerenciar suas preferências de cookies 
                  nas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">5. Compartilhamento de Dados</h2>
                <p className="text-gray-700 leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando 
                  necessário para fornecer nossos serviços (como analytics) ou quando exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">6. Segurança</h2>
                <p className="text-gray-700 leading-relaxed">
                  Como os dados são armazenados localmente em seu navegador, você tem controle total sobre suas 
                  informações. Recomendamos manter seu navegador atualizado e usar senhas seguras em seus dispositivos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">7. Seus Direitos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Você pode limpar seus dados a qualquer momento através das configurações do navegador. 
                  Para questões sobre esta política, entre em contato através do GitHub do projeto.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">8. Google AdSense</h2>
                <p className="text-gray-700 leading-relaxed">
                  Este site utiliza Google AdSense para exibir anúncios. O Google pode usar cookies para veicular 
                  anúncios baseados em visitas anteriores a este ou outros sites. Você pode optar por não receber 
                  anúncios personalizados visitando as Configurações de Anúncios do Google.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">9. Alterações nesta Política</h2>
                <p className="text-gray-700 leading-relaxed">
                  Esta política pode ser atualizada periodicamente. Alterações significativas serão comunicadas 
                  através de aviso na aplicação.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">10. Contato</h2>
                <p className="text-gray-700 leading-relaxed">
                  Para dúvidas sobre esta política, entre em contato através do repositório GitHub: 
                  <a href="https://github.com/satochi-yamamoto/gerador-propostas-meis" 
                     className="text-blue-600 hover:underline ml-1"
                     target="_blank" rel="noopener noreferrer">
                    github.com/satochi-yamamoto/gerador-propostas-meis
                  </a>
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
