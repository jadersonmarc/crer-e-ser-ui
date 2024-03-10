import BaseLayout from "../baseLayout";
import Statistics from "@/components/organisms/statistics";
import Carousel from "@/components/organisms/home/carrocel";
import CardList from "@/components/organisms/CardList";

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
  
  return (
    <>
      <BaseLayout>
        <Carousel />
        <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center mt-8 text-3xl text-bold'>Nossos Eventos</h1>
        <p className="text-xs font-mono my-6 text-slate-600 mb-8 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias acusamus alias autem provident. Odit ab aliquam dolor eius.</p>
        <CardList 
            articles={videoList} 
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