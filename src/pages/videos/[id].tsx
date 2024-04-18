import React, { useEffect, useState } from 'react';
import BaseLayout from '../../components/layouts/baseLayout';
import useVideo from '@/components/hooks/useVideo';

const VideoPage: React.FC = () => {
  const video = useVideo();

  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video.attributes.video_url);
  return (
    <BaseLayout>
      <div className="container mx-auto text-sm max-w-prose py-8">
        <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-3xl text-slate-600 font-bold mb-8">{video.attributes.title}</h1>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            src={video.attributes.video_url}
            title="Video"
            width={500}
            height={500}
            className='rounded-md mb-8'
            allowFullScreen
          />
        </div>               
        <div>
          {video.attributes.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-slate-600 font-mono">
              {paragraph.children.map((child, idx) => (
                
              <span key={idx}>{child.text}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default VideoPage;