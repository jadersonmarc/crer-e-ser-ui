import BaseLayout from "../baseLayout";
import Carousel from "@/components/organisms/home/carrocel";
import Statistics from "@/components/organisms/statistics";
import VideoCardList from "@/components/organisms/videoCardList";

const HomeLayout: React.FC = () => {

  const adoration = require('../../../../public/ador.jpg');
  const victory = require('../../../../public/crer-abrc.jpg');
  const winnerWater = require('../../../../public/fast.jpg');
  const adorationImg = "Culto de adoração";
  const victoryImg = "Título da Imagem 1";
  const winnerWaterImg = "Título da Imagem 2";

  const videoList = [
    { imageUrl: adoration, title: adorationImg, description: winnerWaterImg, width: '80%'},
    { imageUrl: victory, title: victoryImg, description: winnerWaterImg, width: '80%'},
    { imageUrl: winnerWater, title: winnerWaterImg, description: winnerWaterImg, width: '80%' }
  ];

  return (
        <BaseLayout>
            <Carousel />
            <Statistics />
            <VideoCardList 
            videos={videoList} 
            direction="flex-col" 
            width='90%' 
            height="350px"
            cardWidth="70%"
             />
        </BaseLayout>
  );
};

export default HomeLayout;