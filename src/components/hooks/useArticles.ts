import { useState, useEffect } from 'react';
import fetchWithToken from '../../pages/api/utils/fetchWithToken';
import { ArticleData, ArticlesResponse } from '../types/ArticlesType';

const useArticles = () => {
  const [articles, setArticles] = useState<ArticleData[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetchWithToken('http://localhost:1337/api/articles');
        const data: ArticlesResponse = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();

    return () => {
      // Cleanup function
    };
  }, []);

  return articles;
};

export default useArticles;