import React from 'react';
import Card from '@/components/molecules/card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      };

    const adoration = require('../../../../public/ador.jpg');
    const victory = require('../../../../public/crer-abrc.jpg');
    const winnerWater = require('../../../../public/fast.jpg');

    const cardData = [
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

  return (
  <div>
    <Slider {...settings} className='h-full mt-8 overflow-hidden rounded-md flex flex-col'>
      {cardData.map((data, index) => (
        <Card 
          key={index}
          { ...data}
        />
      ))}
    </Slider> 
  </div>
  );
};

export default Carousel;