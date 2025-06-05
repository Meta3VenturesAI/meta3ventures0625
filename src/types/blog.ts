export interface BlogAuthor {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar_url?: string;
  social_links?: Record<string, string>;
  created_at: string;
  updated_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author_id: string;
  author?: BlogAuthor;
  category_id: string;
  category?: BlogCategory;
  tags: string[];
  read_time: string;
  published: boolean;
  featured: boolean;
  meta_description?: string;
  meta_keywords?: string[];
  created_at: string;
  updated_at: string;
}

export interface BlogPostFormData {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author_id: string;
  category_id: string;
  tags: string[];
  read_time: string;
  published: boolean;
  featured?: boolean;
  meta_description?: string;
  meta_keywords?: string[];
}