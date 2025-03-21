'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Fixed FAQ Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#7FFF00] rounded-full shadow-lg flex items-center justify-center text-black hover:bg-[#7FFF00]/90 transition-colors"
      >
        <FaQuestionCircle className="w-8 h-8" />
      </motion.button>

      {/* FAQ Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
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
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
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
    </>
  );
};

export default FAQ; 
