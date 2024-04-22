import ImageCard from '../atoms/cardImage';
import VideoCardProps from '../../components/types/VideoCardProps';
import Link from 'next/link';

function Card({ 
  imageUrl,
  title = '',
  description = '',
  height = '', 
  width = '100%',
  cardWidth = '',
  href = ''

}: VideoCardProps) {
  const truncatedTitle = title.substring(0, 30) + '...';
    return (
      <div style={{  width: cardWidth}} className='flex flex-col items-center justify-center rounded-md mb-8'>
        <Link href={href} style={{ height: height, width: width}} className="mb-8  flex flex-col items-center justify-center" >
          <ImageCard
            imageUrl={imageUrl} 
            title={title}
            />
        </Link>
        <div className={(title || description) ? 'h-40 w-70' : ''}>
          {(title || description) && (
            <>
              {title && <p style={{ fontFamily: "Libre Baskerville" }} className="px-4 text-lg h-16  text-center font-semibold">{truncatedTitle}</p>}
              {description && <p className="text-sm font-mono text-slate-600 text-center px-5">{description}</p>}
            </>
          )}
        </div>
      </div>

    );
}
  
export default Card;