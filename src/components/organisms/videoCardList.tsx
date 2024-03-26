import VideoCard from "@/components/molecules/videoCard";
import { VideoCardListProps } from "@/components/types/VideoCardListTypes";
type Video = {
  imageUrl: string;
  title: string;
  description: string;
  
};
  


export default function VideoCardList({ videos, direction = '', width = '', height = '', cardWidth = '' }: VideoCardListProps) {
  console.log(videos)
  return (
    <div className={`flex ${direction} flex-wrap w-full h-full  rounded-lg items-center justify-center`}>
      {videos.slice(0, 6).map((video, index) => (
        <VideoCard 
        key={index} 
        imageUrl={video.attributes.thumbnail}
        title={video.attributes.title}
        description={video.attributes.description}
        width={width} 
        height={height}
        cardWidth={cardWidth}
        href={`/videos/${video.id}`}
         />
        
      ))}
    </div>
  );
}
