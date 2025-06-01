export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author_id: string;
  category: string;
  tags: string[];
  read_time: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogPostFormData {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  read_time: string;
  published: boolean;
}