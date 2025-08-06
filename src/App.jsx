
import React, { memo } from 'react';
import AppRouter from '@/components/AppRouter';

const App = memo(() => {
  return <AppRouter />;
});

App.displayName = 'App';

export default App;
