import React, { Suspense } from 'react';
import useArticles  from '@/components/hooks/useArticles';
import useVideos  from '@/components/hooks/useVideos';

const LazyHomeLayout = React.lazy(() => import('@/components/layouts/home/layout'));

export default function Home() {
  const articles = useArticles();
  const videos = useVideos();
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    {articles && videos && (
      <LazyHomeLayout videos={videos} articles={articles} />
    )}
  </Suspense>
  );
}
