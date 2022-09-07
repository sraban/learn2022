import React, { lazy, Suspense } from 'react';

const LazyMsgBox = lazy(() => import('./MsgBox'));

const MsgBox = props => (
  <Suspense fallback={null}>
    <LazyMsgBox {...props} />
  </Suspense>
);

export default MsgBox;
