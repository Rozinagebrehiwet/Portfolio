import React from 'react';
import WordPullUp from "@/components/ui/word-pull-up";
import BlurIn from '@/components/ui/blur-in';
import { FadeText } from '@/components/ui/fade-text';
import SparklesText from "@/components/ui/sparkles-text";
import BlurFade from '@/components/ui/blur-fade';

const About: React.FC = () => {
    return (
        <div id='about' className="font-serif mt-72">
            <WordPullUp className="text-4xl text-neutral-300 mx-16 mb-10 " words='About Us' />
            <BlurFade delay={0.2} inView>
                <section className="text-left m-16 max-w-screen-md ">
                    <BlurIn className="text-neutral-400 text-lg"
                        word='Discover the exceptional software development services we offer at our company.
                        From custom web applications to mobile apps and beyond, our team of skilled
                        developers, designers, and project managers collaborate to bring your digital vision to life.
                        Discover the exceptional software development services we offer at our company.
                        From custom web applications to mobile apps and beyond, our team of skilled
                        developers, designers, and project managers collaborate to bring your digital vision to life.'
                    />
                </section>


                <section className='flex flex-col justify-between space-y-12 mb-24'>
                    <div className='place-self-end right-0 bg-neutral-900 flex items-center  justify-between rounded-s-2xl w-2/5 h-44'>
                        <div className='rounded-full mx-3 align-self-center border-2 border-[#7FFF00] w-36 h-36'></div>
                        <div className='flex-[1]'>
                            <FadeText className='text-neutral-300 text-lg ' direction='right' text='Team 1' />
                            <FadeText className='text-neutral-400 text-base mt-2' direction='right' text='Discover the exceptional software development services we offer at our company.' />
                        </div>
                    </div>
                    <div className="relative">
                        <SparklesText className="absolute top-0 left-1/2 z-20 text-xs text-neutral-300 p-2"
                            text='Empowering Businesses'
                        />
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className='w-1/2 p-12 ml-16 rounded-s-3xl bg-neutral-900'>
                            <WordPullUp className="text-3xl  text-neutral-300 mb-10" words='Meet the Team' />
                            <p className="text-neutral-400 max-w-sm">
                                <FadeText direction='left' framerProps={{ show: { transition: { delay: 0.1 } }, }} text='• Expertise' />
                                <FadeText direction='left' framerProps={{ show: { transition: { delay: 0.2 } }, }} text='• Design' />
                                <FadeText direction='left' framerProps={{ show: { transition: { delay: 0.3 } }, }} text='• Development' />
                                <FadeText direction='left' framerProps={{ show: { transition: { delay: 0.4 } }, }} text='• UX/UI' />

                                <br />
                                <BlurIn
                                    word='Unparalleled Services: We bring your software vision to life through a blend of innovation and
                            collaboration, delivering exceptional results.'/>
                                <br />
                                <BlurIn
                                    word='Our software development expertise spans a wide range of industries, from e-commerce to
                            finance, healthcare, and more.'/>
                            </p>
                        </div>
                        <div className='absolute right-1/3 bg-neutral-900 rounded-full border-2 w-96 h-96 z-10'>
                            <div className='rounded-full justify-self-center my-8 shadow-lg shadow-[#7FFF00] w-36 h-36 '></div>
                            <div className='text-neutral-300 text-lg text-center '>
                                <FadeText direction='bottom' text='Team 2' />
                                <FadeText direction='bottom' className='text-neutral-400 text-base mt-2'
                                    text='Discover the exceptional software development services we offer at our company.' />
                            </div>
                        </div>
                    </div>
                    <div className='place-self-end right-0 bg-neutral-900 flex items-center  justify-between rounded-s-2xl w-2/5 h-44'>
                        <div className='text-neutral-300 mx-4 text-lg flex-[1]'>
                            <FadeText direction='left' text='Team 3' />
                            <FadeText direction='left' className='text-neutral-400 text-base mt-2'
                                text='Discover the exceptional software development services we offer at our company.' />
                        </div>
                        <div className='rounded-full mx-3 align-self-center border-2 border-[#7FFF00] w-36 h-36'></div>
                    </div>
                </section>


                <FadeText direction='bottom' className="text-2xl text-neutral-400 mx-4 text-center"
                    text='Our software development expertise spans a wide range of industries, from e-commerce to
                    finance, healthcare, and more.'
                />
            </BlurFade>
        </div>
    );
};

export default About;
