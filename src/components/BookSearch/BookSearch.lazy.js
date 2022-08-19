import React, { lazy, Suspense } from 'react';

const LazyBookSearch = lazy(() => import('./BookSearch'));

const BookSearch = props => (
  <Suspense fallback={null}>
    <LazyBookSearch {...props} />
  </Suspense>
);

export default BookSearch;
