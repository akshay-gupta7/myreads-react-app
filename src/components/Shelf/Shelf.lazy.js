import React, { lazy, Suspense } from 'react';

const LazyShelf = lazy(() => import('./Shelf'));

const Shelf = props => (
  <Suspense fallback={null}>
    <LazyShelf {...props} />
  </Suspense>
);

export default Shelf;
