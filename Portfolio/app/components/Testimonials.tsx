'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/animations';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/testimonial1.jpg",
    content: "Working with this team has been transformative for our business. Their expertise in software development and commitment to quality has helped us achieve remarkable results."
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "/testimonial2.jpg",
    content: "The team's ability to understand our vision and translate it into exceptional software solutions is truly impressive. They're not just developers, they're partners in our success."
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, GrowthLabs",
    image: "/testimonial3.jpg",
    content: "Their attention to detail and focus on user experience has helped us create products that our customers love. The results have exceeded our expectations."
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What Our Clients Say"
      className="bg-neutral-950/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 0.2}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7FFF00]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 relative z-10 h-full">
                <FaQuoteLeft className="w-8 h-8 text-[#7FFF00] mb-4" />
                <p className="text-neutral-300 text-lg mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#7FFF00] overflow-hidden">
                    <div className="w-full h-full bg-neutral-800" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-[#7FFF00] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;