'use client';

import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Benefits from './components/Benefits';
import Features from './components/Features';
import Selected from './components/Selected';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Image from 'next/image';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import BlurFade from '@/components/ui/blur-fade';

const page = () => {
 

  return (
    <div className='bg-neutral-950'>
          <Navbar />
          <Home />
          <ParallaxProvider scrollAxis='horizontal' >
            <Benefits />
            <Features />
          </ParallaxProvider>
          <Selected />
          <About />
          <Parallax speed={-100}>
            <Image src="/stage-light.png" alt='light' width={800} height={500} className='relative opacity-75  left-1/2 transform -translate-y-1/2 -translate-x-1/2' />
          </Parallax>
          <Testimonials />
          <FAQs />
          <Contact />
          <Footer />
        </div>
  )
}

export default page