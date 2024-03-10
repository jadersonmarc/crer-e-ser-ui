import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoCard from "@/components/molecules/videoCard";

const adoration = require('../../../../public/ador.jpg');
const victory = require('../../../../public/crer-abrc.jpg');
const winnerWater = require('../../../../public/fast.jpg');

const  cardData = [
  {
    title: "",
    description: "",
    imageUrl: adoration,
    with: '100%',
    height: '700px'
  },
  {
    title: "",
    description: "",
    imageUrl: victory,
    with: '100%',
    height: '700px'
  },
  {
    title: "",
    description: "",
    imageUrl: winnerWater,
    with: '100%',
    height: '700px'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

const SliderVideo: React.FC = () => {
return (
    <>
        <Slider {...settings} className='h-full mt-8 overflow-hidden flex flex-col'>
          {cardData.map((data, index) => (
            <VideoCard 
            key={index} 
            { ...data} 
            />
          ))}
        </Slider>
    </>
  );
};

export default SliderVideo;