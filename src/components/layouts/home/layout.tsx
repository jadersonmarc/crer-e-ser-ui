import BaseLayout from "../baseLayout";
import Carousel from "@/components/organisms/home/carrocel";
import Statistics from "@/components/organisms/statistics";
import VideoCardList from "@/components/organisms/videoCardList";
import CardList from "@/components/organisms/CardList"; 

const HomeLayout: React.FC = () => {

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
        <BaseLayout>
            <Carousel />
            <div className='text-center'>
              <h3 style={{ fontFamily: "Libre Baskerville" }} className='font-serif text-center mt-4 text-3xl'>Vivendo na maravilhosa graça de Deus!</h3>
              <p className='font-mono text-xs text-slate-600 text-center my-4'>Estamos abertos de domingo a segunda</p>
            </div>
            <Statistics />
            <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-center text-3xl my-8">Nossos Cultos</h1>
            <VideoCardList 
            videos={videoList} 
            width='85%' 
            height='300px'
            cardWidth='30%'
            />
              <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-center text-3xl my-8">Nossos Eventos</h1>
            <CardList 
                articles={videoList} 
                width='85%' 
                height='300px'
                cardWidth='30%'
            />
        </BaseLayout>
  );
};

export default HomeLayout;