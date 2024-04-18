import Card from "@/components/molecules/card";
import { CardListProps } from '../types/CardListTypes';

export default function CardList({ articles, direction = '', width = '', height = '', cardWidth = '' }: CardListProps) {
 console.log(articles)
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
        href={`/news/${article.id}`}
         />
        
      ))}
    </div>
  );
}
