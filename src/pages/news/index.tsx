import React, {useEffect, useState } from 'react';
import Layout from '@/components/layouts/news/layout';
import useArticles  from '@/components/hooks/useArticles';


export default function News() {
  const articles = useArticles();


return (
  <>
    {articles && <Layout articles={articles} />}
  </>
);
}
