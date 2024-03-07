import BaseLayout from '../../components/layouts/baseLayout';
import VideoCard from "@/components/molecules/videoCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Statistics from '@/components/organisms/home/statistics';

export default function Videos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const adoration = require('../../../public/ador.jpg');
  const victory = require('../../../public/crer-abrc.jpg');
  const winnerWater = require('../../../public/fast.jpg');

  const cardData = [
    {
      title: "",
      description: "",
      imageUrl: adoration,
      with: '100%',
      height: '500px'
    },
    {
      title: "",
      description: "",
      imageUrl: victory,
      with: '100%',
      height: '500px'
    },
    {
      title: "",
      description: "",
      imageUrl: winnerWater,
      with: '100%',
      height: '500px'
    }
  ];

  return (
    <>
      <BaseLayout>
        <Slider {...settings} className='h-full mt-8 overflow-hidden flex flex-col'>
          {cardData.map((data, index) => (
            <VideoCard key={index} title={data.title} description={data.description} imageUrl={data.imageUrl} width={data.with} height={data.height}/>
          ))}
        </Slider>
        <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center text-3xl text-bold'>Nossos Cultos</h1>
        <Statistics />
      </BaseLayout>
    </>
  );
}
