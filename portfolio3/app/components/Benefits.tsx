'use client';

import React from 'react';
import BlurFade from "@/components/ui/blur-fade";
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { SiFastly } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { Parallax } from 'react-scroll-parallax';
import WordPullUp from '@/components/ui/word-pull-up';

const Benefits: React.FC = () => {


    return (
        <Parallax speed={20} id='benefits' className=" text-neutral-300 px-8 rounded-lg shadow-lg font-serif mt-24">
            <WordPullUp className="text-4xl text-center font-serif mb-24 uppercase" words='Benefits' />
                <div className='grid grid-cols-3 gap-x-16 gap-y-28  text-neutral-200'>
                   
                <BlurFade delay={0.2} inView >
                <div className="flip-card bg-transparent w-full h-96 ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front rounded-2xl  text-[#7FFF00]  ">
                                <PiLightbulbFilamentDuotone className='text-9xl ' />
                                <p className="text-3xl font-medium">Tailored Solutions</p>
                            </div>
                            <div className="flip-card-back text-balance text-lg rounded-2xl">
                                We customize our services to meet your specific needs, ensuring that you get the best solution for your business.
                            </div>
                        </div>
                    </div>
                    </BlurFade>

                    <BlurFade delay={0.4} inView >
                    <div className="flip-card bg-transparent w-full h-96 ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front rounded-2xl text-[#7FFF00] ">
                                <RiTeamLine className='text-9xl ' />
                                <p className="text-3xl font-medium  ">Expert Team</p>
                            </div>
                            <div className="flip-card-back  text-lg rounded-2xl  ">
                                Our team consists of skilled professionals with extensive experience in various technologies and industries.
                            </div>
                        </div>
                    </div>
                    </BlurFade>

                    <BlurFade delay={0.6} inView >
                    <div className="flip-card bg-transparent w-full h-96 ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front rounded-2xl text-[#7FFF00]">
                                <SiFastly className='text-9xl ' />
                                <p className="text-3xl font-medium">Agile Development</p>
                            </div>
                            <div className="flip-card-back  text-lg  rounded-2xl ">
                                We follow agile methodologies to ensure flexibility and quick adaptations to changing requirements.
                            </div>
                        </div>
                    </div>
                    </BlurFade>

                    <BlurFade delay={0.2} inView >
                    <div className="flip-card bg-transparent w-full h-96 ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front rounded-2xl text-[#7FFF00]">
                                <BiSupport className='text-9xl ' />
                                <p className="text-3xl font-medium  ">Ongoing Support</p>
                            </div>
                            <div className="flip-card-back  text-lg rounded-2xl ">
                                Our commitment to you doesn't end at deployment; we offer ongoing support and maintenance to keep your project running smoothly.
                            </div>
                        </div>
                    </div>
  </BlurFade>

                    <BlurFade delay={0.4} inView >
                    <div className="flip-card bg-transparent w-full h-96 ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front rounded-2xl text-[#7FFF00] ">
                                <FaHandHoldingDollar className='text-9xl ' />
                                <p className="text-3xl font-medium  ">Cost-Effective Solutions</p>
                            </div>
                            <div className="flip-card-back  text-lg rounded-2xl ">
                                We provide high-quality services at competitive prices, ensuring that you get the best value for your investment.
                            </div>
                        </div>

                    </div>
                    </BlurFade>

                    <BlurFade delay={0.6} inView >
                    <div className="flip-card bg-transparent w-full h-96 ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front rounded-2xl text-[#7FFF00]">
                                <MdOutlineSecurity className='text-9xl ' />
                                <p className="text-3xl font-medium  ">Enhanced Security</p>
                            </div>
                            <div className="flip-card-back  text-lg rounded-2xl ">
                                We prioritize security in our development process, implementing best practices to protect your data and applications.                        </div>
                        </div>
                    </div>
                    </BlurFade>

                </div>
        </Parallax>
    );
};

export default Benefits;