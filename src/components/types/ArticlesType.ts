type Paragraph = {
    type: string;
    children: { text: string }[];
  };
  
  type ArticleAttributes = {
    title: string;
    description: string;
    content: Paragraph[];
    published: string | null;
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    slug: string;
    image_url: string;
  };
  
  export type ArticleData = {
    id: number;
    attributes: ArticleAttributes;
  };
  
  export type ArticlesResponse = {
    data: ArticleData[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };