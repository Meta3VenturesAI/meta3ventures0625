import { supabase, handleSupabaseError } from './supabase';
import { BlogPost, BlogPostFormData } from '../types/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  return handleSupabaseError(
    supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
  );
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  return handleSupabaseError(
    supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()
  );
}

export async function createBlogPost(post: BlogPostFormData): Promise<BlogPost> {
  return handleSupabaseError(
    supabase
      .from('blog_posts')
      .insert([post])
      .select()
      .single()
  );
}

export async function updateBlogPost(id: string, post: Partial<BlogPostFormData>): Promise<BlogPost> {
  return handleSupabaseError(
    supabase
      .from('blog_posts')
      .update({ ...post, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
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
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
  );
}