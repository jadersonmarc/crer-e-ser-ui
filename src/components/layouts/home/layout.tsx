import BaseLayout from "../baseLayout";
import Carousel from "@/components/organisms/home/carrocel";
import Statistics from "@/components/organisms/home/statistics";
import VideoCardList from "@/components/organisms/home/videoCardList";

const HomeLayout: React.FC = () => {

  const adoration = require('../../../../public/ador.jpg');
  const victory = require('../../../../public/crer-abrc.jpg');
  const winnerWater = require('../../../../public/fast.jpg');
  const adorationImg = "Culto de adoração";
  const victoryImg = "Título da Imagem 1";
  const winnerWaterImg = "Título da Imagem 2";

  const videoList = [
    { imageUrl: adoration, title: adorationImg, description: winnerWaterImg },
    { imageUrl: victory, title: victoryImg, description: winnerWaterImg },
    { imageUrl: winnerWater, title: winnerWaterImg, description: winnerWaterImg }
  ];

  return (
        <BaseLayout>
            <Carousel />
            <Statistics />
            <VideoCardList videos={videoList}/>
        </BaseLayout>
  );
};

export default HomeLayout;