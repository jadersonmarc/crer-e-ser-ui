import React, { useEffect, useState } from 'react';
import BaseLayout from '../../components/layouts/baseLayout';
import Image from 'next/image';
import useArticle from '@/components/hooks/useArticle';

const ArticlePage: React.FC = () => {
  const article = useArticle();

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <BaseLayout>
      <div className="container mx-auto text-sm max-w-prose py-8">
        <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-center text-3xl text-slate-600 font-bold mb-8">{article.attributes.title}</h1>
        <Image
          src={article.attributes.image_url}
          alt="Imagem"
          width={500}
          height={100}
          className='rounded-md mb-8'
        />               
        <div className='px-4 text-center'>
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