// AdSense Configuration
// Para implementar o Google AdSense, siga os passos abaixo:

/**
 * 1. CONFIGURAÇÃO INICIAL
 * 
 * a) Adicione o script do AdSense no index.html:
 * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-SEU_PUBLISHER_ID"
 *         crossorigin="anonymous"></script>
 * 
 * b) Substitua SEU_PUBLISHER_ID pelo seu ID real do AdSense
 */

/**
 * 2. COMPONENTE DE ANÚNCIO
 * 
 * Use este componente para exibir anúncios:
 */

import React, { useEffect } from 'react';

const AdSenseAd = ({ 
  adClient = "ca-pub-SEU_PUBLISHER_ID", 
  adSlot = "SEU_AD_SLOT_ID",
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: 'block' }
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    ></ins>
  );
};

/**
 * 3. POSICIONAMENTO RECOMENDADO
 * 
 * Para compliance com AdSense, posicione anúncios em:
 * - Header/topo da página (banner 728x90 ou responsivo)
 * - Sidebar (300x250 ou 300x600)
 * - Entre conteúdo (responsivo)
 * - Footer (728x90 ou responsivo)
 */

/**
 * 4. POLÍTICAS IMPORTANTES
 * 
 * Certifique-se de que o site atende às políticas do AdSense:
 * ✅ Política de Privacidade implementada
 * ✅ Termos de Uso implementados
 * ✅ Conteúdo original e valioso
 * ✅ Navegação clara e user-friendly
 * ✅ Design responsivo
 * ✅ Páginas com conteúdo suficiente
 */

/**
 * 5. IMPLEMENTAÇÃO NO PROJETO
 * 
 * Para implementar no Gerador de Propostas MEI:
 */

// Adicione no ProposalGenerator.jsx (exemplo):
const ProposalGeneratorWithAds = () => {
  return (
    <div>
      {/* Banner superior */}
      <AdSenseAd 
        adSlot="1234567890"
        style={{ display: 'block', marginBottom: '20px' }}
      />
      
      {/* Conteúdo principal */}
      <ProposalGenerator />
      
      {/* Banner inferior */}
      <AdSenseAd 
        adSlot="0987654321"
        style={{ display: 'block', marginTop: '20px' }}
      />
    </div>
  );
};

/**
 * 6. CONFIGURAÇÕES AVANÇADAS
 * 
 * Para anúncios automáticos (recomendado):
 * - Ative "Anúncios automáticos" no painel do AdSense
 * - Adicione apenas o script principal
 * - O Google posicionará anúncios automaticamente
 */

export default AdSenseAd;
