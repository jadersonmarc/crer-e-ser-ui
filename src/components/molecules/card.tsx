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
        <div>
          <p className="text-lg text-center font-semibold mb-1">{title}</p>
          <p className="text-sm text-center text-gray-600">{description}</p>
        </div>
      </div>

    );
}
  
export default Card;