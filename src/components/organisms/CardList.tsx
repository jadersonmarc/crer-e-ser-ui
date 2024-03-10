import Card from "@/components/molecules/card";

type Article = {
  imageUrl: string;
  title: string;
  description: string;
  
};
  
type CardListProps = {
  articles: Article[];
  direction?: string;
  width?: string;
  height?: string;
  cardWidth?: string;
};

export default function CardList({ articles, direction = '', width = '', height = '', cardWidth = '' }: CardListProps) {
  
  return (
    <div className={`flex ${direction} flex-wrap w-full h-full  rounded-lg items-center justify-center`}>
      {articles.map((article, index) => (
        <Card 
        key={index} 
        { ...article }
        width={width} 
        height={height}
        cardWidth={cardWidth}
         />
        
      ))}
    </div>
  );
}
