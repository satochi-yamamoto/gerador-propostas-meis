import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Gerador de Propostas MEI</title>
        <meta name="description" content="Termos de Uso do Gerador de Propostas MEI. Conheça as condições para utilização da plataforma." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gerador-propostas-meis.vercel.app/terms-of-service" />
      </Helmet>
      
      <div className="min-h-screen p-4 lg:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="gradient-text text-2xl">Termos de Uso</CardTitle>
              <p className="text-gray-600">Última atualização: 06 de janeiro de 2025</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">1. Aceitação dos Termos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ao acessar e usar o Gerador de Propostas MEI, você concorda em cumprir estes termos de uso. 
                  Se você não concordar com qualquer parte destes termos, não deve usar nossa aplicação.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">2. Descrição do Serviço</h2>
                <p className="text-gray-700 leading-relaxed">
                  O Gerador de Propostas MEI é uma ferramenta web gratuita que permite criar propostas comerciais 
                  profissionais para microempreendedores individuais. O serviço inclui personalização de cores, 
                  upload de logotipo e geração de PDF.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">3. Uso Adequado</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-800">3.1 Uso Permitido</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Criar propostas comerciais legítimas para seu negócio MEI</li>
                    <li>Personalizar templates conforme suas necessidades</li>
                    <li>Baixar e compartilhar propostas geradas</li>
                  </ul>
                  
                  <h3 className="font-medium text-gray-800">3.2 Uso Proibido</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Criar conteúdo fraudulento, enganoso ou ilegal</li>
                    <li>Tentar quebrar ou contornar limitações do sistema</li>
                    <li>Usar a plataforma para spam ou atividades maliciosas</li>
                    <li>Copiar ou reproduzir o código-fonte sem autorização</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">4. Limitações do Serviço</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Limite de 3 propostas gratuitas por mês por usuário</li>
                  <li>Tamanho máximo de 2MB para upload de logotipos</li>
                  <li>Disponibilidade sujeita a manutenções programadas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">5. Propriedade Intelectual</h2>
                <p className="text-gray-700 leading-relaxed">
                  O código-fonte desta aplicação está disponível sob licença MIT. Você mantém todos os direitos 
                  sobre o conteúdo das propostas que criar. Os templates e design da interface são propriedade 
                  do projeto Gerador de Propostas MEI.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">6. Responsabilidades</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-800">6.1 Suas Responsabilidades</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Garantir a veracidade das informações inseridas</li>
                    <li>Revisar propostas antes de enviar aos clientes</li>
                    <li>Manter backup de dados importantes</li>
                    <li>Usar a ferramenta em conformidade com a lei</li>
                  </ul>
                  
                  <h3 className="font-medium text-gray-800">6.2 Nossas Responsabilidades</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Manter a aplicação funcionando adequadamente</li>
                    <li>Proteger a privacidade conforme nossa política</li>
                    <li>Fornecer suporte através do GitHub</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">7. Isenção de Responsabilidade</h2>
                <p className="text-gray-700 leading-relaxed">
                  O serviço é fornecido "como está" sem garantias de qualquer tipo. Não nos responsabilizamos 
                  por perdas de dados, danos comerciais ou outros prejuízos decorrentes do uso da aplicação. 
                  É sua responsabilidade revisar e validar todas as propostas antes do envio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">8. Publicidade</h2>
                <p className="text-gray-700 leading-relaxed">
                  Esta aplicação pode exibir anúncios através do Google AdSense para sustentar os custos 
                  de manutenção. Os anúncios são selecionados automaticamente pelo Google e não 
                  representam endosso de nossa parte.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">9. Modificações</h2>
                <p className="text-gray-700 leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações 
                  significativas serão comunicadas através de aviso na aplicação. O uso continuado 
                  após as alterações constituirá aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">10. Encerramento</h2>
                <p className="text-gray-700 leading-relaxed">
                  Podemos suspender ou encerrar o acesso ao serviço a qualquer momento, por qualquer 
                  motivo, incluindo violação destes termos. Você pode parar de usar o serviço a 
                  qualquer momento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">11. Lei Aplicável</h2>
                <p className="text-gray-700 leading-relaxed">
                  Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida 
                  nos tribunais brasileiros competentes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-blue-900">12. Contato</h2>
                <p className="text-gray-700 leading-relaxed">
                  Para questões sobre estes termos, entre em contato através do repositório GitHub: 
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

export default TermsOfService;
