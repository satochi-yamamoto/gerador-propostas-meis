
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import ProposalGenerator from '@/components/ProposalGenerator';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = memo(() => {
  return (
    <>
      <Helmet>
        <title>Gerador de Propostas MEI - Crie Propostas Profissionais</title>
        <meta name="description" content="Gerador gratuito de propostas comerciais para MEI. Crie propostas profissionais em minutos com design personalizado e download em PDF." />
      </Helmet>
      
      <div className="min-h-screen">
        <ProposalGenerator />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
});

App.displayName = 'App';

export default App;
