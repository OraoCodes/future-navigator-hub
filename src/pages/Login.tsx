
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple admin check - in a real app, this would be authenticated properly
    if (email === "admin@careermentor.com" && password === "admin123") {
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard.",
      });
      
      // Simulate a loading delay
      setTimeout(() => {
        setIsLoading(false);
        navigate("/admin");
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Login failed",
          description: "Invalid email or password. For admin access, use admin@careermentor.com / admin123",
          variant: "destructive",
        });
      }, 1000);
    }
  };

  return (
    <MainLayout>
      <div className="py-16 px-4 min-h-[80vh] flex items-center">
        <div className="container mx-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm border"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-navy">Log In to CareerMentor</h1>
              <p className="text-gray-600 mt-2">Welcome back! Please enter your credentials.</p>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-navy hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-navy text-white hover:bg-navy/90 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
              
              <div className="text-xs text-gray-500 mt-2">
                <p>For admin access (demo only): admin@careermentor.com / admin123</p>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-navy hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
