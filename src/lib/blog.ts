import { supabase, handleSupabaseError } from './supabase';
import { BlogPost, BlogPostFormData, BlogAuthor, BlogCategory } from '../types/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
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
}

export async function getBlogPost(id: string): Promise<BlogPost> {
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
}

export async function createBlogPost(post: BlogPostFormData): Promise<BlogPost> {
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
}

export async function updateBlogPost(id: string, post: Partial<BlogPostFormData>): Promise<BlogPost> {
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
}

export async function deleteBlogPost(id: string): Promise<void> {
  await handleSupabaseError(
    supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)
  );
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
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
}

export async function getBlogAuthors(): Promise<BlogAuthor[]> {
  return handleSupabaseError(
    supabase
      .from('blog_authors')
      .select('*')
      .order('name')
  );
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  return handleSupabaseError(
    supabase
      .from('blog_categories')
      .select('*')
      .order('name')
  );
}

export async function createBlogAuthor(author: Omit<BlogAuthor, 'id' | 'created_at' | 'updated_at'>): Promise<BlogAuthor> {
  return handleSupabaseError(
    supabase
      .from('blog_authors')
      .insert([author])
      .select()
      .single()
  );
}

export async function createBlogCategory(category: Omit<BlogCategory, 'id' | 'created_at'>): Promise<BlogCategory> {
  return handleSupabaseError(
    supabase
      .from('blog_categories')
      .insert([category])
      .select()
      .single()
  );
}