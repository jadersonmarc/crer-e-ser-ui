import Image from 'next/image';
import VideoThumbnail from '../atoms/videoThumbnail';

type VideoCardProps = {
    imageUrl: string;
    title?: string;
    description?: string;
    width?: string;
    height?: string;
};

function VideoCard({ imageUrl, title = '', description = '', height = '', width = '100%' }: VideoCardProps) {
    return (
      <div className="mb-8 w-full flex flex-col items-center justify-center" >
        <VideoThumbnail imageUrl={imageUrl} title={title} width={width} height={height}  />
        <div>
          <p className="text-lg text-center font-semibold mb-1">{title}</p>
          <p className="text-sm text-center text-gray-600">{description}</p>
        </div>
      </div>
    );
}
  
export default VideoCard;