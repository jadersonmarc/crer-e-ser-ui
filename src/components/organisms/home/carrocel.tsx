import React from 'react';
import Card from '../../atoms/card';
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
        title: "Título da Imagem 1",
        description: "Culto de adoração",
        imageUrl: adoration
      },
      {
        title: "Título da Imagem 2",
        description: "Culto da vitória",
        imageUrl: victory
      },
      {
        title: "Título da Imagem 3",
        description: "Festa nas águas",
        imageUrl: winnerWater
      }
    ];

  return (
  <div>
    <Slider {...settings} className='h-full mt-8 overflow-hidden rounded-md flex flex-col'>
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} description={data.description} imageUrl={data.imageUrl} />
      ))}
    </Slider> 
    <div className='text-center'>
      <h3 style={{ fontFamily: "Libre Baskerville" }} className='font-serif text-center mt-4 text-3xl'>Vivendo na maravilhosa graça de Deus!</h3>
      <p className='font-mono text-xs text-slate-600 text-center my-4'>Estamos abertos de domingo a segunda</p>
    </div>
  </div>
  );
};

export default Carousel;