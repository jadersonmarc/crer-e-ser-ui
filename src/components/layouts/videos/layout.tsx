import BaseLayout from "../baseLayout";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Statistics from "@/components/organisms/statistics";
import VideoCardList from "@/components/organisms/videoCardList";
import VideoCard from "@/components/molecules/videoCard";

const VideoLayout: React.FC = () => {

  const adoration = require('../../../../public/ador.jpg');
  const victory = require('../../../../public/crer-abrc.jpg');
  const winnerWater = require('../../../../public/fast.jpg');
  const adorationImg = "Culto de adoração";
  const victoryImg = "Título da Imagem 1";
  const winnerWaterImg = "Título da Imagem 2";

  const videoList = [
    { 
      imageUrl: adoration,
      title: adorationImg,
      description: winnerWaterImg
    },
    { 
      imageUrl: victory,
      title: victoryImg,
      description: winnerWaterImg
    },
    { 
      imageUrl: winnerWater,
      title: winnerWaterImg,
      description: winnerWaterImg
    },
    { 
      imageUrl: adoration,
      title: adorationImg,
      description: winnerWaterImg
    },
    { imageUrl: victory,
      title: victoryImg,
      description: winnerWaterImg
    },
    { 
      imageUrl: winnerWater,
      title: winnerWaterImg,
      description: winnerWaterImg
    }
  ];

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
    <>
      <BaseLayout>
        <Slider {...settings} className='h-full mt-8 overflow-hidden flex flex-col'>
          {cardData.map((data, index) => (
            <VideoCard 
            key={index} 
            title={data.title} 
            description={data.description}
            imageUrl={data.imageUrl}
            width={data.with}
            height={data.height}
            cardWidth='100%'
            />
          ))}
        </Slider>
        <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center text-3xl text-bold'>Nossos Cultos</h1>
        <p className="text-xs font-mono my-6 text-slate-600 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias acusamus alias autem provident. Odit ab aliquam dolor eius.</p>
        <VideoCardList 
            videos={videoList} 
            width='85%' 
            height='300px'
            cardWidth='30%'
        />
        <Statistics />
      </BaseLayout>
    </>
  );
};

export default VideoLayout;