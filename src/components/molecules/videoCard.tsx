
import VideoThumbnail from '../atoms/videoThumbnail';
import VideoCardProps from '../../components/types/VideoCardProps';
import Link from 'next/link';

function VideoCard({ 
  imageUrl,
  title = '',
  description = '',
  height = '', 
  width = '100%',
  cardWidth = '',
  href = ''
}: VideoCardProps) {
    return (
      <div style={{  width: cardWidth}} className='flex flex-col items-center justify-center mb-8'>
        <Link href={href} style={{ height: height, width: width}} className="mb-8  flex flex-col items-center justify-center" >
          <VideoThumbnail imageUrl={imageUrl} title={title} />
        </Link>
        <div className={(title || description) ? 'h-40 w-70' : ''}>
          {(title || description) && (
            <>
              {title && <p style={{ fontFamily: "Libre Baskerville" }} className="text-lg h-16 text-center font-semibold ">{title.length > 30 ? `${title.substring(0, 30)}...` : title}</p>}
              {description && <p className="text-sm font-mono text-slate-600 text-center px-8">{description}</p>}
            </>
          )}
        </div>
      </div>

    );
}
  
export default VideoCard;