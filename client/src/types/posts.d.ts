export type Post = {
  id: number;
  title: string;
  excerpt: string;
  body_content: string;
  post_image: string;
  created_at: string;
  category: string;
  publisher: Publisher;
};

type Publisher = {
  name: string;
  id: number;
  profile_image: string;
};

export type BlogPreviewProps = {
  post_image: string;
  title: string;
  excerpt: string;
  category: string;
  publisher: string;
  publisher_id: number;
  created_at: string;
  profile_image: string;
};
