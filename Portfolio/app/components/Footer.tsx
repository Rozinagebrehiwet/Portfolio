'use client';

import React from 'react';
import { FadeIn } from '@/components/ui/animations';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub"
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter"
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950/50 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <FadeIn>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Your Company</h3>
              <p className="text-neutral-400">
                Creating exceptional software solutions for businesses worldwide.
              </p>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-neutral-400 hover:text-[#7FFF00] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-neutral-400 hover:text-[#7FFF00] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-neutral-400 hover:text-[#7FFF00] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-400 hover:text-[#7FFF00] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-neutral-900/50 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#7FFF00] hover:border-[#7FFF00] transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Copyright */}
        <FadeIn delay={0.3}>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-400">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
