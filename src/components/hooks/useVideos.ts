import { useState, useEffect } from 'react';
import fetchWithToken from '../../pages/api/utils/fetchWithToken';
import { VideoData, VideosResponse } from '../types/VideosType';

const useVideos = () => {
  const [videos, setVideos] = useState<VideoData[] | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetchWithToken('http://localhost:1337/api/videos');
        const data: VideosResponse = await response.json();
        setVideos(data.data);
      } catch (error) {
        console.error('Error fetching Videos:', error);
      }
    };

    fetchVideos();

    return () => {
      // Cleanup function
    };
  }, []);

  return videos;
};

export default useVideos;