import { supabase, handleSupabaseError } from './supabase';
import { BlogPost, BlogPostFormData, BlogAuthor, BlogCategory } from '../types/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_posts')
        .select(`
          *,
          author:author_id(id, name, avatar_url),
          category:category_id(id, name, slug)
        `)
        .order('created_at', { ascending: false })
    );
  } catch (error) {
    console.warn('Failed to get blog posts:', error);
    return [];
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_posts')
        .select(`
          *,
          author:author_id(id, name, avatar_url),
          category:category_id(id, name, slug)
        `)
        .eq('id', id)
        .single()
    );
  } catch (error) {
    console.warn('Failed to get blog post:', error);
    return null;
  }
}

export async function createBlogPost(post: BlogPostFormData): Promise<BlogPost | null> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_posts')
        .insert([post])
        .select(`
          *,
          author:author_id(id, name, avatar_url),
          category:category_id(id, name, slug)
        `)
        .single()
    );
  } catch (error) {
    console.warn('Failed to create blog post:', error);
    return null;
  }
}

export async function updateBlogPost(id: string, post: Partial<BlogPostFormData>): Promise<BlogPost | null> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_posts')
        .update({ ...post, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select(`
          *,
          author:author_id(id, name, avatar_url),
          category:category_id(id, name, slug)
        `)
        .single()
    );
  } catch (error) {
    console.warn('Failed to update blog post:', error);
    return null;
  }
}

export async function deleteBlogPost(id: string): Promise<void> {
  try {
    await handleSupabaseError(
      supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)
    );
  } catch (error) {
    console.warn('Failed to delete blog post:', error);
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_posts')
        .select(`
          *,
          author:author_id(id, name, avatar_url),
          category:category_id(id, name, slug)
        `)
        .eq('published', true)
        .order('created_at', { ascending: false })
    );
  } catch (error) {
    console.warn('Failed to get published posts:', error);
    return [];
  }
}

export async function getBlogAuthors(): Promise<BlogAuthor[]> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_authors')
        .select('*')
        .order('name')
    );
  } catch (error) {
    console.warn('Failed to get blog authors:', error);
    return [];
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_categories')
        .select('*')
        .order('name')
    );
  } catch (error) {
    console.warn('Failed to get blog categories:', error);
    return [];
  }
}

export async function createBlogAuthor(author: Omit<BlogAuthor, 'id' | 'created_at' | 'updated_at'>): Promise<BlogAuthor | null> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_authors')
        .insert([author])
        .select()
        .single()
    );
  } catch (error) {
    console.warn('Failed to create blog author:', error);
    return null;
  }
}

export async function createBlogCategory(category: Omit<BlogCategory, 'id' | 'created_at'>): Promise<BlogCategory | null> {
  try {
    return handleSupabaseError(
      supabase
        .from('blog_categories')
        .insert([category])
        .select()
        .single()
    );
  } catch (error) {
    console.warn('Failed to create blog category:', error);
    return null;
  }
}