import VideoLayout from '@/components/layouts/videos/layout';
import useVideos  from '@/components/hooks/useVideos';

export default function Videos() {
  const videos = useVideos();

  return (
    <>
     {videos && <VideoLayout videos={videos} />}
    </>
  );
}
