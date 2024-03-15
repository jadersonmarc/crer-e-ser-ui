import React from 'react';
import Card from '@/components/molecules/card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardListProps } from '../../types/CardListTypes';

function Carousel (articles: CardListProps[]) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      };

  return (
  <div>
    <Slider {...settings} className='h-full overflow-hidden rounded-md flex flex-col'>
      {articles.articles.map((article: any, index: number) => (
        <Card 
          key={index}
          imageUrl={article.attributes.image_url}
          width='100%' 
          height='700px'
          
          href={`/news/${article.id}`}
        />
      ))}
    </Slider> 
  </div>
  );
};

export default Carousel;