import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoCard from "@/components/molecules/videoCard";
import { VideoData } from '../../types/VideosType';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

function SliderVideo (videos: VideoData[]) {
  
return (
    <>
        <Slider {...settings} className='h-full mt-8 overflow-hidden flex flex-col'>
          {videos.videos.map((data, index) => (
            <VideoCard 
            key={index} 
            imageUrl={data.attributes.thumbnail}
            width='100%' 
            height='700px'
            />
          ))}
        </Slider>
    </>
  );
};

export default SliderVideo;