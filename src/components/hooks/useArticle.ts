import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetchWithToken from '../../pages/api/utils/fetchWithToken';
import { ArticleData } from '../types/ArticlesType';

type ApiResponse = {
  data: ArticleData;
};

const useArticle = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetchWithToken(`http://localhost:1337/api/articles/${id}`);
        const data: ApiResponse = await response.json();
        setArticle(data.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  return article;
};

export default useArticle;