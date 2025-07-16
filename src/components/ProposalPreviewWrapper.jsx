import React, { Suspense, lazy } from 'react';

// Lazy load the ProposalPreview component
const ProposalPreviewLazy = lazy(() => import('./ProposalPreview'));

const ProposalPreviewWrapper = ({ data, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Suspense fallback={
      <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        <p className="text-gray-500 mt-4">Carregando visualização...</p>
      </div>
    }>
      <ProposalPreviewLazy data={data} />
    </Suspense>
  );
};

export default ProposalPreviewWrapper;