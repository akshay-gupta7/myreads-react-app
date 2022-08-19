import React, { lazy, Suspense } from 'react';

const LazyBook = lazy(() => import('./Book'));

const Book = props => (
  <Suspense fallback={null}>
    <LazyBook {...props} />
  </Suspense>
);

export default Book;
