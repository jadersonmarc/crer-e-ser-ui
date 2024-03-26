import BaseLayout from "../baseLayout";
import Statistics from "@/components/organisms/statistics";
import VideoCardList from "@/components/organisms/videoCardList";
import SliderVideo from "@/components/organisms/videos/sliderVideos";
import { VideoData } from '../../types/VideosType';

function VideoLayout (videos: VideoData) {
  
  return (
    <>
      <BaseLayout>
        <SliderVideo videos={videos.videos} />
        <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center text-3xl text-bold'>Nossos Cultos</h1>
        <p className="text-xs font-mono my-6 text-slate-600 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias acusamus alias autem provident. Odit ab aliquam dolor eius.</p>
        <VideoCardList 
            videos={videos.videos} 
            width='75%' 
            height='250px'
            cardWidth='30%'
        />
        <Statistics />
      </BaseLayout>
    </>
  );
};

export default VideoLayout;