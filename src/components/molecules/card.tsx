import ImageCard from '../atoms/cardImage';
import VideoCardProps from '../../components/types/VideoCardProps';

function Card({ 
  imageUrl,
  title = '',
  description = '',
  height = '', 
  width = '100%',
  cardWidth = '' 

}: VideoCardProps) {
    return (
      <div style={{  width: cardWidth}} className='flex flex-col items-center justify-center rounded-md mb-8'>
        <div style={{ height: height, width: width}} className="mb-8  flex flex-col items-center justify-center" >
          <ImageCard
            imageUrl={imageUrl} 
            title={title}
            />
        </div>
        <div className={(title || description) ? 'h-40 w-70' : ''}>
          {(title || description) && (
            <>
              {title && <p style={{ fontFamily: "Libre Baskerville" }} className="text-lg h-20 mb-4 text-center font-semibold mb-1">{title}</p>}
              {description && <p className="text-sm font-mono text-slate-600 text-center">{description}</p>}
            </>
          )}
        </div>
      </div>

    );
}
  
export default Card;