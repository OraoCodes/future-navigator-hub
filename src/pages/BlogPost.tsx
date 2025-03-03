
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // Mock blog post data - in a real app, you would fetch this from an API
  const post = {
    id: postId,
    title: "How to Prepare for Technical Interviews in 2024",
    content: `
      <p>Preparing for technical interviews can be a daunting task. Here are some strategies that can help you succeed:</p>
      <h2>1. Understand the Fundamentals</h2>
      <p>Make sure you have a solid understanding of data structures, algorithms, and system design principles. These are the building blocks of technical interviews.</p>
      <h2>2. Practice, Practice, Practice</h2>
      <p>Solve problems on platforms like LeetCode, HackerRank, or CodeSignal. Try to solve at least one problem a day.</p>
      <h2>3. Mock Interviews</h2>
      <p>Practice with friends or use platforms that offer mock interviews. This will help you get comfortable with the interview setting.</p>
      <h2>4. Review Your Work</h2>
      <p>After solving problems, compare your solutions with others. This will help you learn more efficient approaches.</p>
      <h2>5. Stay Calm and Confident</h2>
      <p>Remember that interviewers are not just looking for the right answers, but also how you approach problems and communicate your thoughts.</p>
    `,
    date: "May 15, 2024",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <MainLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-navy hover:text-navy/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-80 object-cover rounded-lg mb-8"
            />
            
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">{post.date} • By {post.author}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-6">
                {post.title}
              </h1>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-navy text-white hover:bg-navy/90">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
