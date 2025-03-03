
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  // Mock blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Prepare for Technical Interviews in 2024",
      excerpt: "Discover the most effective strategies to prepare for technical interviews at top tech companies.",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Most In-Demand Tech Skills for Career Advancement",
      excerpt: "Learn which skills are most valued by employers and how to acquire them efficiently.",
      date: "May 8, 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Crafting a CV That Stands Out to Tech Recruiters",
      excerpt: "Expert tips on how to optimize your CV to catch the attention of recruiters at top tech companies.",
      date: "April 29, 2024",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <MainLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="gold-accent mb-4 inline-block">Our Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-6">
              Career Insights & Advice
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert perspectives and practical tips to help you succeed in your tech career journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm border"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-navy mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-navy font-medium flex items-center hover:text-navy/80 transition-colors">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-navy text-white hover:bg-navy/90">
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
