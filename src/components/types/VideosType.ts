type Paragraph = {
    type: string;
    children: { text: string }[];
  };
  
  type VideoAttributes = {
    title: string;
    description: string;
    content: Paragraph[];
    video_id: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    thumbnail: string;
    video_url: string;
  };
  
  export type VideoData = {
    id: number;
    attributes: VideoAttributes;
  };
  
  export type VideosResponse = {
    data: VideoData[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };