import Image from 'next/image';
import VideoThumbnail from '../atoms/videoThumbnail';

type VideoCardProps = {
    imageUrl: string;
    title: string;
    description: string;
};

function VideoCard({ imageUrl, title, description }: VideoCardProps) {
    return (
      <div className="mb-8" style={{ width: '80%' }}>
        <VideoThumbnail imageUrl={imageUrl} title={title} />
        <div>
          <p className="text-lg text-center font-semibold mb-1">{title}</p>
          <p className="text-sm text-center text-gray-600">{description}</p>
        </div>
      </div>
    );
}
  
export default VideoCard;