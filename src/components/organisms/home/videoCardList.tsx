import VideoCard from "@/components/molecules/videoCard";

type Video = {
  imageUrl: string;
  title: string;
  description: string;
  width: string;
};
  
type VideoCardListProps = {
  videos: Video[];
};

export default function VideoCardList({ videos }: VideoCardListProps) {
  return (
    <div className="flex flex-col bg-gray-100 p-4 w-full rounded-lg shadow-md items-center">
      {videos.map((video, index) => (
        <VideoCard key={index} imageUrl={video.imageUrl} title={video.title} description={video.description} width={video.width} />
      ))}
    </div>
  );
}
