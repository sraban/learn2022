import React, { lazy, Suspense } from 'react';

const LazyTicket = lazy(() => import('./Ticket'));

const Ticket = props => (
  <Suspense fallback={null}>
    <LazyTicket {...props} />
  </Suspense>
);

export default Ticket;
