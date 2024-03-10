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
        <Statistics />
        <CardList 
            articles={videoList} 
            width='85%' 
            height='300px'
            cardWidth='30%'
        />
      </BaseLayout>
    </>
  );
};

export default VideoLayout;