import VideoCard from "@/components/molecules/videoCard";

type Video = {
  imageUrl: string;
  title: string;
  description: string;
  
};
  
type VideoCardListProps = {
  videos: Video[];
  direction?: string;
  width?: string;
  height?: string;
  cardWidth?: string;
};

export default function VideoCardList({ videos, direction = '', width = '', height = '', cardWidth = '' }: VideoCardListProps) {
  
  return (
    <div className={`flex ${direction} flex-wrap w-full h-full  rounded-lg items-center justify-center`}>
      {videos.map((video, index) => (
        <VideoCard 
        key={index} 
        { ...video }
        width={width} 
        height={height}
        cardWidth={cardWidth}
         />
        
      ))}
    </div>
  );
}
