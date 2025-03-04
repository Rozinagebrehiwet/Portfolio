'use client';

import React from 'react'
import BlurFade from "@/components/ui/blur-fade";
import { MdOutlineDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import WordPullUp from '@/components/ui/word-pull-up';

const Features = () => {
    return (
        <div id='features' className='mt-72 font-sans'>
            <WordPullUp className='text-center text-4xl text-neutral-400 uppercase mb-24' words='Features' />
            <BlurFade delay={0.3} inView>
                <div className="container relative flex justify-center items-center ">
                    <div data-text="UI/UX Design" className="glass -rotate-12 w-1/4 h-96 ">
                        <MdOutlineDesignServices className='text-9xl text-[#7FFF00]' />
                    </div>
                    <div data-text="Web Development" className="glass rotate-6 w-1/4 h-96">
                        <CgWebsite className='text-9xl text-[#7FFF00]' />
                    </div>
                    <div data-text="Mobile App Development" className="glass rotate-12 w-1/4 h-96">
                        <FaMobileAlt className='text-9xl text-[#7FFF00]' />
                    </div>
                </div>
            </BlurFade>
        </div>

    )
}

export default Features;