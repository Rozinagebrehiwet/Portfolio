"use client";
import React from 'react'
import WordPullUp from '@/components/ui/word-pull-up';
import BlurFade from '@/components/ui/blur-fade';
import { useForm } from 'react-hook-form';
const Contact = () => {

    return (

        <div id='contact' className='flex justify-center items-center mt-72 '>
            <div className="form-container  font-serif max-w-[700px] mx-12 rounded-xl bg-neutral-900 shadow-2xl shadow-[#7FFF00] p-8 border-t-4 border-white clip-path-[polygon(0_0,_100%_0,_100%_calc(100%-20px),_calc(100%-20px)_100%,_0_100%)]">
                <WordPullUp className="heading block text-white text-xl font-bold mb-8" words='Get in touch' />
                <form>
                    <BlurFade className="form" delay={0.2} inView>
                        <input
                            placeholder="Name"
                            type="text"
                            className="input text-[#7FFF00] w-full bg-transparent shadow shadow-neutral-300  rounded-xl outline-none py-2 px-5 mb-6  transition-all duration-200 ease-in-out  focus:border-l-8 focus:border-[#7FFF00]"
                        />
                        <input
                            placeholder="Email"
                            type="email"
                            className="input text-[#7FFF00] w-full bg-transparent shadow shadow-neutral-300  rounded-xl outline-none py-2 px-5 mb-6  transition-all duration-200 ease-in-out  focus:border-l-8 focus:border-[#7FFF00]"
                        />
                        <input
                            placeholder="Phone number"
                            type="tel"
                            className="input text-[#7FFF00] w-full bg-transparent shadow shadow-neutral-300  rounded-xl outline-none py-2 px-5 mb-6  transition-all duration-200 ease-in-out  focus:border-l-8 focus:border-[#7FFF00]"
                        />
                        <textarea
                            placeholder="Tell us about your project..."
                            rows={10}
                            cols={30}
                            id="message"
                            name="message"
                            className="textarea w-full py-2 px-5 shadow shadow-neutral-300 rounded-xl  outline-none text-[#7FFF00]  resize-none max-h-[150px] mb-6  transition-all duration-200 ease-in-out   bg-transparent focus:border-l-8 focus:border-[#7FFF00]"
                        />
                        <button className="w-full  hover:cursor-pointer  bg-[#7FFF00] p-2 text-black text-center font-bold border border-transparent rounded-xl transition-all duration-200 ease-in-out hover:bg-transparent hover:border-[#7FFF00] hover:text-[#7FFF00]">
                            Send
                        </button>
                    </BlurFade>
                </form>

            </div>
            <div>
                <BlurFade className="flex-[0.8]" inView>
                    <div
                        className="relative bg-black w-[50%] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
                    >
                        <div
                            className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-neutral-200 w-full h-full absolute group-hover:-translate-y-16"
                        >
                            <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                                Thank You
                            </p>
                            <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
                                We appriciate the time you took to consider our website .
                            </p>
                            <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
                                Let's work great together!
                            </p>
                            <p className="font-sans text-[10px] text-gray-700 pt-5">From the  Team</p>
                        </div>
                        <button
                            className="seal bg-lime-400 text-black w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-lime-700"
                        >
                            seal
                        </button>
                        <div
                            className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
                        ></div>
                        <div
                            className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
                        ></div>
                        <div
                            className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
                        ></div>
                        <div
                            className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
                        ></div>
                    </div>
                </BlurFade>
            </div>

        </div>)
}

export default Contact;