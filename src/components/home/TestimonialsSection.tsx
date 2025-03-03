
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Billy Owuor",
      role: "Software Engineer at Calcare",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
      testimonial: "The mock interviews and career coaching were invaluable in helping me land my dream job. I gained confidence and improved my technical communication skills significantly."
    },
    {
      name: "Anne Kimani",
      role: "Product Manager at iCapital",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
      testimonial: "The CV review service transformed my resume from good to exceptional. I started getting calls from recruiters within days of making the recommended changes."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="gold-accent mb-4 inline-block">Success Stories</span>
          <h2 className="text-3xl font-bold text-archeoblue mb-4">Hear From Our Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how tech professionals transformed their careers with our expert coaching services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-archeoblue/5 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12 border-2 border-archeoblue/10">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-archeoblue/10">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">
                "{testimonial.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
