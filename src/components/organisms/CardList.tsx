import Card from "@/components/molecules/card";

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

type CardListProps = {
  articles: ArticleData[];
  direction?: string;
  width?: string;
  height?: string;
  cardWidth?: string;
};

export default function CardList({ articles, direction = '', width = '', height = '', cardWidth = '' }: CardListProps) {
  // console.log(articles);  
  return (
    <div className={`flex ${direction} flex-wrap w-full h-full  rounded-lg items-center justify-center`}>
      {articles.map((article, index) => (
        <Card 
        key={index} 
        imageUrl={article.attributes.image_url}
        title={article.attributes.title}
        description={article.attributes.description}
        width={width} 
        height={height}
        cardWidth={cardWidth}
         />
        
      ))}
    </div>
  );
}
