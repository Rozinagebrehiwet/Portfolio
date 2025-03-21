'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HoverScale, HoverLift } from '@/components/ui/animations';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#benefits', label: 'Benefits' },
        { href: '#features', label: 'Features' },
        { href: '#about', label: 'About' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900/90 backdrop-blur-md py-2' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <HoverScale>
                        <Link href='#home' className='text-2xl font-bold text-white hover:text-[#7FFF00] transition-colors'>
                            Logo
                        </Link>
                    </HoverScale>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <div className='bg-neutral-900/75 backdrop-blur-md border border-neutral-800 rounded-full p-2'>
                            <div className='flex items-center space-x-8 px-4'>
                                {navLinks.map((link) => (
                                    <HoverLift key={link.href}>
                                        <Link 
                                            href={link.href} 
                                            className='text-neutral-400 hover:text-white transition-colors'
                                        >
                                            {link.label}
                                        </Link>
                                    </HoverLift>
                                ))}
                            </div>
                        </div>
                        <HoverScale>
                            <Link href='#selected'>
                                <button className="flex items-center gap-2 px-6 py-2 bg-[#7FFF00] text-black font-semibold rounded-full hover:bg-[#91ff00] transition-colors">
                                    Explore Our Work
                                    <svg
                                        className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </HoverScale>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4"
                        >
                            <div className="bg-neutral-900/95 backdrop-blur-md rounded-lg p-4 space-y-4">
                                {navLinks.map((link) => (
                                    <HoverLift key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="block text-neutral-400 hover:text-white transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </HoverLift>
                                ))}
                                <HoverScale>
                                    <Link href='#selected' onClick={() => setIsMobileMenuOpen(false)}>
                                        <button className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-[#7FFF00] text-black font-semibold rounded-full hover:bg-[#91ff00] transition-colors">
                                            Explore Our Work
                                        </button>
                                    </Link>
                                </HoverScale>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* FAQ Button */}
            <div className='fixed z-50 right-8 bottom-8'>
                <HoverScale>
                    <Link href='#faqs'>
                        <button className="faq-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='#7FFF00'>
                                <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                            </svg>
                            <span className="tooltip">FAQ</span>
                        </button>
                    </Link>
                </HoverScale>
            </div>
        </motion.header>
    );
};

export default Navbar;
