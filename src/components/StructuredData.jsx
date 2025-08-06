import React, { memo } from 'react';

// Schema.org structured data component for better SEO
const StructuredData = memo(() => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gerador de Propostas MEI",
    "url": "https://gerador-propostas-meis.vercel.app",
    "logo": "https://gerador-propostas-meis.vercel.app/vite.svg",
    "description": "Plataforma gratuita para criação de propostas comerciais profissionais para MEI",
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://github.com/satochi-yamamoto/gerador-propostas-meis/issues"
    },
    "sameAs": [
      "https://github.com/satochi-yamamoto/gerador-propostas-meis"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gerador de Propostas MEI",
    "url": "https://gerador-propostas-meis.vercel.app",
    "description": "Ferramenta online gratuita para criação de propostas comerciais para microempreendedores individuais",
    "inLanguage": "pt-BR",
    "copyrightYear": "2025",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gerador-propostas-meis.vercel.app/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gerador-propostas-meis.vercel.app"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o Gerador de Propostas MEI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É uma ferramenta web gratuita que permite criar propostas comerciais profissionais específicas para microempreendedores individuais (MEI), com personalização de cores, upload de logo e geração de PDF."
        }
      },
      {
        "@type": "Question",
        "name": "Quantas propostas posso gerar gratuitamente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você pode gerar até 3 propostas gratuitamente por mês. O limite é renovado mensalmente."
        }
      },
      {
        "@type": "Question",
        "name": "Os dados ficam salvos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todos os dados são armazenados localmente no seu navegador para sua privacidade e segurança. Nenhuma informação é enviada para nossos servidores."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
});

StructuredData.displayName = 'StructuredData';

export default StructuredData;
