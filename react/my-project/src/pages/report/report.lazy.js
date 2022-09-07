import React, { lazy, Suspense } from 'react';

const LazyReport = lazy(() => import('./Report'));

const Report = props => (
  <Suspense fallback={null}>
    <LazyReport {...props} />
  </Suspense>
);

export default Report;
