import BaseLayout from "../baseLayout";
import Statistics from "@/components/organisms/statistics";
import Carousel from "@/components/organisms/home/carrocel";
import CardList from "@/components/organisms/CardList";


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


 function NewsLayout (articles:  ArticleData[]) {
  return (
    <>
      <BaseLayout>
        <Carousel />
        <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center mt-8 text-3xl text-bold'>Nossos Eventos</h1>
        <p className="text-xs font-mono my-6 text-slate-600 mb-8 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias acusamus alias autem provident. Odit ab aliquam dolor eius.</p>
        <CardList 
            articles={articles.articles} 
            width='85%' 
            height='300px'
            cardWidth='30%'
        />
         <Statistics />
      </BaseLayout>
    </>
  );
};

export default NewsLayout;