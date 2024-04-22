import BaseLayout from "../baseLayout";
import Carousel from "@/components/organisms/home/carrocel";
import VideoCardList from "@/components/organisms/videoCardList";
import CardList from "@/components/organisms/CardList";

function HomeLayout({ videos, articles }) {

  
  return (
        <BaseLayout>
              <Carousel articles={articles} />
            <div className='text-center'>
              <h3 style={{ fontFamily: "Libre Baskerville" }} className='font-serif text-center mt-4 text-3xl'>Vivendo na maravilhosa graça de Deus!</h3>
              <p className='font-mono text-sm text-slate-600 text-center my-4'>Estamos abertos de domingo a segunda</p>
            </div>
           
            <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-center text-3xl my-8">Nossos Cultos</h1>
            <VideoCardList 
            videos={videos} 
            width='75%' 
            height='250px'
            cardWidth={window.innerWidth < 1024 ? '100%' : '30%'}
        />
            <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-center text-3xl my-8">Nossos Eventos</h1>
            <CardList 
            articles={articles} 
            width='85%' 
            height='300px'
            cardWidth={window.innerWidth < 1024 ? '100%' : '30%'}
        />
           
        </BaseLayout>
  );
};

export default HomeLayout;