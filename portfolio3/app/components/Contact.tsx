"use client";
import React, { useState } from 'react';
import { Section } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/animations';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Get in Touch"
      className="bg-neutral-950/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <FadeIn>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#7FFF00]/10 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-[#7FFF00]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-neutral-400">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#7FFF00]/10 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-6 h-6 text-[#7FFF00]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-neutral-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#7FFF00]/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-[#7FFF00]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-neutral-400">123 Tech Street, Digital City, 12345</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-[#7FFF00] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-[#7FFF00] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-[#7FFF00] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-[#7FFF00] transition-colors"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-[#7FFF00] text-black font-medium rounded-lg hover:bg-[#7FFF00]/90 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Contact;
