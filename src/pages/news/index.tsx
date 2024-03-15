import React, {useEffect, useState } from 'react';
import Layout from '@/components/layouts/news/layout';
import fetchWithToken from '../api/utils/fetchWithToken';

// Tipos adicionais
type ArticleContent = {
  type: string;
  children: { text: string }[];
};

type ArticleAttributes = {
  title: string;
  description: string;
  content: ArticleContent[];
  published: string | null;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  slug: string;
  image_url: string;
};

type ArticleData = {
  id: number;
  attributes: ArticleAttributes;
};

type ArticlesResponse = {
  data: ArticleData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};


export default function News() {
  const [articles, setArticle] = useState<ArticlesResponse | null>(null);

  useEffect(() => {
  const fetchArticle = async () => {
    try {
      const response = await fetchWithToken(`http://localhost:1337/api/articles`);
      const data: ArticleData = await response.json();     
       setArticle(data.data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

    fetchArticle();
  
}, []);


return (
  <>
    {articles && <Layout articles={articles} />}
  </>
);
}
