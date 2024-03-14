import React, { useEffect, useState } from 'react';
import BaseLayout from '../../components/layouts/baseLayout';
import { useRouter } from 'next/router';
import  fetchWithToken  from '../api/utils/fetchWithToken';

type Paragraph = {
  type: string;
  children: { text: string }[];
};

type Article = {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: Paragraph[];
    published: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
  };
};

type ApiResponse = {
  data: Article;
  meta: Record<string, any>;
};

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState<Article | null>(null);

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

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <BaseLayout>
      <div className="container mx-auto text-sm max-w-prose py-8">
        <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-3xl text-slate-600 font-bold mb-8">{article.attributes.title}</h1>
        <div>
          {article.attributes.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-slate-600 font-mono">
              {paragraph.children.map((child, idx) => (
                
                <span key={idx}>{child.text}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ArticlePage;