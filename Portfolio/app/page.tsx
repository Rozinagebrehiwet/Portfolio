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
import { SmoothScroll } from '@/components/ui/smooth-scroll';

const Page = () => {
  return (
    <SmoothScroll>
      <div className='bg-neutral-950 min-h-screen'>
        <Navbar />
        
        <main className="relative">
          <section id="home" className="min-h-screen">
            <Home />
          </section>

          <ParallaxProvider scrollAxis='horizontal'>
            <section id="benefits" className="min-h-screen">
              <Benefits />
            </section>
            
            <section id="features" className="min-h-screen">
              <Features />
            </section>
          </ParallaxProvider>

          <section id="selected" className="min-h-screen">
            <Selected />
          </section>

          <section id="about" className="min-h-screen">
            <About />
          </section>

          <Parallax speed={-100}>
            <div className="relative w-full h-[500px] overflow-hidden">
              <Image 
                src="/stage-light.png" 
                alt='light' 
                fill
                className='object-cover opacity-75'
                priority
              />
            </div>
          </Parallax>

          <section id="testimonials" className="min-h-screen">
            <Testimonials />
          </section>

          <section id="faqs" className="min-h-screen">
            <FAQs />
          </section>

          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default Page