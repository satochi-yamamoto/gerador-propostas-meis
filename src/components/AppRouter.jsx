import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import ProposalGenerator from '@/components/ProposalGenerator';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsOfService from '@/components/TermsOfService';
import StructuredData from '@/components/StructuredData';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'terms-of-service':
        return <TermsOfService />;
      default:
        return <ProposalGenerator />;
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {currentPage === 'privacy-policy' 
            ? 'Política de Privacidade - Gerador de Propostas MEI'
            : currentPage === 'terms-of-service'
            ? 'Termos de Uso - Gerador de Propostas MEI'
            : 'Gerador de Propostas MEI - Crie Propostas Profissionais'
          }
        </title>
        <meta name="description" content={
          currentPage === 'privacy-policy'
            ? 'Política de Privacidade do Gerador de Propostas MEI. Seus dados são armazenados apenas localmente.'
            : currentPage === 'terms-of-service'
            ? 'Termos de Uso do Gerador de Propostas MEI. Condições para utilização da plataforma.'
            : 'Gerador gratuito de propostas comerciais para MEI. Crie propostas profissionais em minutos com design personalizado e download em PDF.'
        } />
        
        {currentPage === 'home' && (
          <>
            {/* SEO Meta Tags */}
            <meta name="keywords" content="MEI, proposta comercial, gerador de propostas, microempreendedor individual, PDF, orçamento, negócios" />
            <meta name="author" content="Gerador de Propostas MEI" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://gerador-propostas-meis.vercel.app/" />
            
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Gerador de Propostas MEI - Crie Propostas Profissionais" />
            <meta property="og:description" content="Gerador gratuito de propostas comerciais para MEI. Crie propostas profissionais em minutos com design personalizado e download em PDF." />
            <meta property="og:url" content="https://gerador-propostas-meis.vercel.app/" />
            <meta property="og:site_name" content="Gerador de Propostas MEI" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:image" content="https://gerador-propostas-meis.vercel.app/og-image.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Gerador de Propostas MEI - Interface da aplicação" />
            
            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Gerador de Propostas MEI - Crie Propostas Profissionais" />
            <meta name="twitter:description" content="Gerador gratuito de propostas comerciais para MEI. Crie propostas profissionais em minutos com design personalizado e download em PDF." />
            <meta name="twitter:image" content="https://gerador-propostas-meis.vercel.app/og-image.jpg" />
            <meta name="twitter:image:alt" content="Gerador de Propostas MEI - Interface da aplicação" />
            
            {/* Language and Geography */}
            <meta http-equiv="content-language" content="pt-BR" />
            <meta name="geo.region" content="BR" />
            <meta name="geo.country" content="Brazil" />
            
            {/* Additional SEO */}
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="theme-color" content="#3b82f6" />
            
            {/* Preconnect for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            
            {/* Structured Data for SEO */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "Gerador de Propostas MEI",
                "description": "Gerador gratuito de propostas comerciais para MEI. Crie propostas profissionais em minutos com design personalizado e download em PDF.",
                "url": "https://gerador-propostas-meis.vercel.app/",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Any",
                "permissions": "browser",
                "browserRequirements": "HTML5, JavaScript",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "BRL",
                  "category": "Free"
                },
                "author": {
                  "@type": "Organization",
                  "name": "Gerador de Propostas MEI",
                  "url": "https://github.com/satochi-yamamoto/gerador-propostas-meis"
                },
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Microempreendedores Individuais"
                },
                "featureList": [
                  "Criação de propostas comerciais",
                  "Personalização de design",
                  "Geração de PDF",
                  "Upload de logotipo",
                  "Compartilhamento WhatsApp",
                  "Interface responsiva"
                ],
                "screenshot": "https://gerador-propostas-meis.vercel.app/screenshot.jpg",
                "softwareVersion": "1.0",
                "datePublished": "2025-08-06",
                "dateModified": "2025-08-06",
                "inLanguage": "pt-BR"
              })}
            </script>
          </>
        )}
      </Helmet>
      
      <StructuredData />
      <div className="min-h-screen">
        {renderPage()}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
};

export default AppRouter;
