import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
}

export const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of AI: Trends Shaping 2025 and Beyond",
      excerpt: "Explore the transformative AI trends that are revolutionizing industries and creating new opportunities for innovation and growth.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 15, 2025",
      author: "Liron Langer",
      category: "AI",
      readTime: "8 min read",
      slug: "future-of-ai-trends-2025"
    },
    {
      title: "Building Resilient Web3 Infrastructure",
      excerpt: "A deep dive into the essential components of robust Web3 infrastructure and best practices for scalable blockchain applications.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 2, 2025",
      author: "Liron Langer",
      category: "Blockchain",
      readTime: "12 min read",
      slug: "building-resilient-web3-infrastructure"
    },
    {
      title: "The Rise of Agentic AI Systems",
      excerpt: "Understanding how autonomous AI agents are transforming business operations and creating new possibilities for intelligent automation.",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "March 27, 2025",
      author: "Liron Langer",
      category: "Innovation",
      readTime: "10 min read",
      slug: "rise-of-agentic-ai-systems"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
            Insights & Perspectives
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and innovations in AI,
            blockchain, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center group-hover:underline"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="bg-white dark:bg-gray-800 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}