import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetchWithToken from '../../pages/api/utils/fetchWithToken';
import { VideoData } from '../types/VideosType';

type ApiResponse = {
  data: VideoData;
};

const useVideo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState<VideoData | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetchWithToken(`http://localhost:1337/api/videos/${id}`);
        const data: ApiResponse = await response.json();
        setVideo(data.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (id) {
      fetchVideo();
    }
  }, [id]);

  return video;
};

export default useVideo;