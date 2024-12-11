import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/ui/HeroSection';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../lib/cms';
import type { BlogPost } from '../types/blog';

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await getBlogPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-16">Loading...</div>;
  }

  return (
    <div>
      <HeroSection
        title="Nuestro Blog"
        subtitle="Mantente informado sobre las últimas tendencias y noticias del mercado inmobiliario"
        backgroundImage="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </span>
                </div>
                <span className="text-orange-600 text-sm font-semibold">{post.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
                  >
                    Leer más
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}