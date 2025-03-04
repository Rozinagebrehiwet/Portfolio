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

const Home: React.FC = () => {
    return (
        <ParallaxBanner layers={[{ image: '/home-bg.webp', speed: -50 }]}
            className='aspect-[1/1] h-screen ' id='home'>
            <div className='flex font-sans items-center text-center justify-center'>
                <div className="mt-12  max-w-screen-lg">
                    <Parallax scale={[1, 0.5]} >
                        <BlurIn
                         className="text-4xl font-semibold text-center  text-neutral-100 mt-8 mb-3"
                         word='Introducing Our Software Development Team'/>
                        <TypingAnimation
                            text="Crafting Exceptional Digital"
                         className=" bg-gradient-to-b font-bold from-neutral-50 to-neutral-300 bg-clip-text text-transparent  text-7xl leading-tight mb-8 "/>
                        <BlurIn 
                         className="text-neutral-100 mb-14 text-2xl font-normal "
                         word='At our software development company, we pride ourselves on delivering cutting-edge digital experiences that combine technical excellence and creativity.'/>
                    <div className='flex justify-between mb-20 w-[60%] place-self-center   border border-neutral-300 rounded-full '>
                        <input type='email' placeholder='Your Email' className='bg-transparent text-xl text-neutral-100 flex-grow pl-5 pr-32  py-4 rounded-full placeholder-neutral-400 outline-none' />
                        <Link href='#contact'>
                            <button
                                type="submit"
                                className="place-self-end flex text-xl text-black justify-center font-semibold  shadow-2xl shadow-[#7FFF00] px-4 py-4 gap-3 items-center bg-neutral-100   isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#7FFF00] hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden  rounded-full group"
                            >
                                Get In Touch
                                <svg
                                    className="w-8 h-8 justify-end group-hover:rotate-45 group-hover:bg-white  ease-linear duration-300 rounded-full border border-black group-hover:border-none p-2 "
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                                        className="fill-[#000000] group-hover:fill-black"
                                    ></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className='place-self-center flex items-center text-lg text-neutral-500 space-x-10 mt-5'>

                        <button className="button">
                            <Link href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
                                <MdOutlineWhatsapp />
                            </Link>
                        </button>
                        <button className="button">
                            <Link href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer">
                                <RiTelegramLine />
                            </Link>
                        </button>

                        <button className="button">
                            <Link href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <RiFacebookCircleLine />
                            </Link>
                        </button>

                        <button className="button">
                            <Link href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </Link>
                        </button>

                        <button className="button">
                            <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </Link>
                        </button>
                    </div>
                    </Parallax>
                </div>
            </div>
        </ParallaxBanner>
    );
};

export default Home;
