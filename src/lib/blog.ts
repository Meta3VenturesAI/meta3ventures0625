import { supabase, handleSupabaseError } from './supabase';
import { BlogPost, BlogPostFormData, BlogAuthor, BlogCategory } from '../types/blog';
import { blogPosts } from '../utils/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, return the static data
    return Promise.resolve(blogPosts);
  } catch (error) {
    console.warn('Failed to get blog posts:', error);
    return [];
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, find in the static data
    const post = blogPosts.find(post => post.id === id);
    return Promise.resolve(post || null);
  } catch (error) {
    console.warn('Failed to get blog post:', error);
    return null;
  }
}

export async function createBlogPost(post: BlogPostFormData): Promise<BlogPost | null> {
  try {
    // In a real implementation, this would insert into Supabase
    // For now, simulate creating a post
    const newPost: BlogPost = {
      id: `new-${Date.now()}`,
      slug: post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author_id: post.author_id,
      author: {
        name: 'Liron Langer',
        avatar: '/images/Liron1.jpg'
      },
      category_id: post.category_id,
      category: post.category_id,
      tags: post.tags,
      read_time: post.read_time,
      readTime: post.read_time,
      published: post.published,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // In a real app, we would add this to the database
    // For now, we'll just return the new post
    return Promise.resolve(newPost);
  } catch (error) {
    console.warn('Failed to create blog post:', error);
    return null;
  }
}

export async function updateBlogPost(id: string, post: Partial<BlogPostFormData>): Promise<BlogPost | null> {
  try {
    // In a real implementation, this would update in Supabase
    // For now, find the post in static data and return an updated version
    const existingPost = blogPosts.find(p => p.id === id);
    if (!existingPost) return null;
    
    const updatedPost: BlogPost = {
      ...existingPost,
      ...post,
      category: post.category_id || existingPost.category,
      readTime: post.read_time || existingPost.readTime,
      updated_at: new Date().toISOString()
    };
    
    return Promise.resolve(updatedPost);
  } catch (error) {
    console.warn('Failed to update blog post:', error);
    return null;
  }
}

export async function deleteBlogPost(id: string): Promise<void> {
  try {
    // In a real implementation, this would delete from Supabase
    // For now, just simulate success
    return Promise.resolve();
  } catch (error) {
    console.warn('Failed to delete blog post:', error);
    throw error;
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, filter the static data
    const published = blogPosts.filter(post => post.published);
    return Promise.resolve(published);
  } catch (error) {
    console.warn('Failed to get published posts:', error);
    return [];
  }
}

export async function getBlogAuthors(): Promise<BlogAuthor[]> {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, return a mock author
    return Promise.resolve([
      {
        id: 'default-author',
        name: 'Liron Langer',
        email: 'liron@meta3ventures.com',
        bio: 'Managing Director at Meta3Ventures',
        avatar_url: '/images/Liron1.jpg',
        social_links: {
          linkedin: 'https://linkedin.com/in/lironlanger',
          twitter: 'https://twitter.com/lironlanger'
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ]);
  } catch (error) {
    console.warn('Failed to get blog authors:', error);
    return [];
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, return mock categories
    return Promise.resolve([
      {
        id: 'ai',
        name: 'AI & Machine Learning',
        slug: 'ai',
        description: 'Articles about artificial intelligence and machine learning',
        created_at: new Date().toISOString()
      },
      {
        id: 'blockchain',
        name: 'Blockchain',
        slug: 'blockchain',
        description: 'Articles about blockchain technology and Web3',
        created_at: new Date().toISOString()
      },
      {
        id: 'innovation',
        name: 'Innovation',
        slug: 'innovation',
        description: 'Articles about innovation and emerging technologies',
        created_at: new Date().toISOString()
      },
      {
        id: 'venture-capital',
        name: 'Venture Capital',
        slug: 'venture-capital',
        description: 'Articles about venture capital and investment',
        created_at: new Date().toISOString()
      },
      {
        id: 'technology',
        name: 'Technology',
        slug: 'technology',
        description: 'Articles about general technology topics',
        created_at: new Date().toISOString()
      }
    ]);
  } catch (error) {
    console.warn('Failed to get blog categories:', error);
    return [];
  }
}

export async function createBlogAuthor(author: Omit<BlogAuthor, 'id' | 'created_at' | 'updated_at'>): Promise<BlogAuthor | null> {
  try {
    // In a real implementation, this would insert into Supabase
    // For now, simulate creating an author
    const newAuthor: BlogAuthor = {
      id: `author-${Date.now()}`,
      ...author,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    return Promise.resolve(newAuthor);
  } catch (error) {
    console.warn('Failed to create blog author:', error);
    return null;
  }
}

export async function createBlogCategory(category: Omit<BlogCategory, 'id' | 'created_at'>): Promise<BlogCategory | null> {
  try {
    // In a real implementation, this would insert into Supabase
    // For now, simulate creating a category
    const newCategory: BlogCategory = {
      id: `category-${Date.now()}`,
      ...category,
      created_at: new Date().toISOString()
    };
    
    return Promise.resolve(newCategory);
  } catch (error) {
    console.warn('Failed to create blog category:', error);
    return null;
  }
}