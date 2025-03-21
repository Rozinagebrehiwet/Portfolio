'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of software development services including web development, mobile app development, UI/UX design, and custom software solutions. Our team specializes in creating scalable, secure, and user-friendly applications."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A typical web application project can take 2-4 months, while more complex solutions may take 6 months or longer. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Node.js, Python, and cloud platforms like AWS and Azure. Our stack is chosen based on your specific needs and project requirements."
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain transparent communication through regular meetings, progress reports, and dedicated project management tools. Our team is always available to address your questions and concerns."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects and time-and-materials contracts. Each project is unique, and we'll work with you to determine the best pricing structure for your needs."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      title="FAQ"
      subtitle="Frequently Asked Questions"
      className="bg-neutral-950/50"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <motion.div
              initial={false}
              className="border border-neutral-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
              >
                <span className="text-white font-medium text-left">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="w-5 h-5 text-[#7FFF00]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-neutral-900/30">
                      <p className="text-neutral-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default FAQ; 
