import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Plus, Save, Trash2, Edit2, LogOut, BarChart } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/LoginForm';
import { BlogEditor } from '../components/BlogEditor';
import { Analytics } from '../components/Analytics';
import { getBlogPosts, deleteBlogPost } from '../lib/blog';
import { ErrorFallback } from '../components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

const BlogManagement: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      loadPosts();
    }
  }, [isAuthenticated]);

  const loadPosts = async () => {
    try {
      const posts = await getBlogPosts();
      setPosts(posts || []);
    } catch (error) {
      console.error('Error loading posts:', error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      await deleteBlogPost(id);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    }
  };

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (showAnalytics) {
    return (
      <>
        <SEO 
          title="Analytics - Meta3Ventures"
          description="Analytics dashboard for Meta3Ventures website performance and lead tracking."
        />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Analytics & Insights
                  </h1>
                  <button
                    onClick={() => setShowAnalytics(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Back to Blog Management
                  </button>
                </div>
                
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Analytics />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Blog Management - Meta3Ventures"
        description="Manage blog posts and content for Meta3Ventures website."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Blog Management
                </h1>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowAnalytics(true)}
                    className="inline-flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    <BarChart className="w-5 h-5 mr-2" />
                    Analytics
                  </button>
                  <button
                    onClick={logout}
                    className="inline-flex items-center px-4 py-2 text-red-600 hover:text-red-700 font-medium"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </div>
              </div>

              {isEditing ? (
                <BlogEditor
                  initialData={selectedPost || undefined}
                  onSave={() => {
                    setIsEditing(false);
                    setSelectedPost(null);
                    loadPosts();
                  }}
                  onCancel={() => {
                    setIsEditing(false);
                    setSelectedPost(null);
                  }}
                />
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="mb-8 inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    New Post
                  </button>

                  <div className="space-y-6">
                    {posts.length > 0 ? (
                      posts.map(post => (
                        <div
                          key={post.id}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {post.excerpt}
                              </p>
                              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <span>Status: {post.published ? 'Published' : 'Draft'}</span>
                                <span>Created: {new Date(post.created_at).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => {
                                  setSelectedPost(post);
                                  setIsEditing(true);
                                }}
                                className="p-2 text-indigo-600 hover:text-indigo-700"
                              >
                                <Edit2 className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleDelete(post.id)}
                                className="p-2 text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          No blog posts found. Create your first post to get started.
                        </p>
                        <button
                          onClick={() => setIsEditing(true)}
                          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                        >
                          <Plus className="w-5 h-5 mr-2" />
                          Create First Post
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogManagement;