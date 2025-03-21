'use client';

import React from 'react';
import TypingAnimation from "@/components/ui/typing-animation";
import BlurIn from "@/components/ui/blur-in";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import Link from 'next/link';
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTelegramLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FadeIn, HoverScale, HoverLift } from '@/components/ui/animations';

const socialLinks = [
    { icon: MdOutlineWhatsapp, href: "https://wa.me/your-whatsapp-number", label: "WhatsApp" },
    { icon: RiTelegramLine, href: "https://t.me/your-telegram-username", label: "Telegram" },
    { icon: RiFacebookCircleLine, href: "https://facebook.com/your-profile", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/your-profile", label: "Instagram" },
    { icon: FaGithub, href: "https://github.com/your-username", label: "GitHub" },
];

const Home: React.FC = () => {
    return (
        <ParallaxBanner
            layers={[{ image: '/home-bg.webp', speed: -50 }]}
            className='aspect-[1/1] h-screen relative overflow-hidden'
            id='home'
        >
            <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' />
            
            <div className='relative h-full flex items-center justify-center px-4'>
                <div className="max-w-screen-lg w-full">
                    <Parallax scale={[1, 0.5]}>
                        <div className="space-y-8">
                            <FadeIn delay={0.2}>
                                <BlurIn
                                    className="text-4xl md:text-5xl font-semibold text-center text-white"
                                    word='Introducing Our Software Development Team'
                                />
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <TypingAnimation
                                    text="Crafting Exceptional Digital"
                                    className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent text-5xl md:text-7xl font-bold leading-tight text-center"
                                />
                            </FadeIn>

                            <FadeIn delay={0.6}>
                                <BlurIn
                                    className="text-white/90 text-xl md:text-2xl font-normal max-w-3xl mx-auto"
                                    word='At our software development company, we pride ourselves on delivering cutting-edge digital experiences that combine technical excellence and creativity.'
                                />
                            </FadeIn>

                            <FadeIn delay={0.8}>
                                <div className='flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto'>
                                    <input
                                        type='email'
                                        placeholder='Your Email'
                                        className='w-full md:w-auto bg-white/10 text-white text-lg px-6 py-4 rounded-full placeholder-white/50 outline-none border border-white/20 focus:border-[#7FFF00] transition-colors'
                                    />
                                    <HoverScale>
                                        <Link href='#contact'>
                                            <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#7FFF00] text-black font-semibold rounded-full hover:bg-[#91ff00] transition-colors group">
                                                Get In Touch
                                                <svg
                                                    className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 448 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </HoverScale>
                                </div>
                            </FadeIn>

                            <FadeIn delay={1}>
                                <div className='flex flex-wrap justify-center items-center gap-4 mt-8'>
                                    {socialLinks.map((social) => (
                                        <HoverLift key={social.label}>
                                            <Link
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group"
                                            >
                                                <button className="button">
                                                    <social.icon className="w-6 h-6 transition-colors group-hover:text-[#7FFF00]" />
                                                </button>
                                            </Link>
                                        </HoverLift>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </Parallax>
                </div>
            </div>
        </ParallaxBanner>
    );
};

export default Home;
