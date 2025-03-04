import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import BoxReveal from '@/components/ui/box-reveal';
import { FaStar } from 'react-icons/fa';
import BlurIn from '@/components/ui/blur-in';
import BlurFade from '@/components/ui/blur-fade';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "The software exceeded our expectations! It's intuitive, reliable, and has drastically improved our workflow efficiency. The team behind it provided exceptional support, promptly addressing any queries we had during setup. We’ve seen measurable growth in productivity and are thrilled with how seamlessly it integrates into our existing systems. Highly recommend this for businesses looking for smart, scalable solutions!",
            rating: 5,
            photo: "https://via.placeholder.com/100" // Replace with actual image URL
        },
        {
            name: "Jane Smith",
            feedback: "We couldn’t be happier with this software! From the moment we implemented it, it was clear that it was designed with user experience and functionality in mind. The interface is sleek and easy to navigate, even for team members who aren’t particularly tech-savvy. The features are robust and tailored to meet the needs of modern businesses.",
            rating: 4,
            photo: "https://via.placeholder.com/100" // Replace with actual image URL
        },
        {
            name: "Michael Johnson",
            feedback: "Thanks to this software, we’ve seen a tangible increase in productivity, enhanced team collaboration, and noticeable improvements in customer satisfaction. It’s been a game-changer for our organization, and we couldn’t recommend it more highly to anyone looking for a smart, scalable, and future-ready solution!",
            rating: 5,
            photo: "https://via.placeholder.com/100" // Replace with actual image URL
        },
        {
            name: "Emily Davis",
            feedback: "The customer support team deserves a special mention. They were available at every step, offering clear guidance during the onboarding process and addressing our questions with patience and expertise. Their commitment to ensuring our success is unmatched, and it shows in the seamless integration we’ve experienced.",
            rating: 5,
            photo: "https://via.placeholder.com/100" // Replace with actual image URL
        },
    ];

    return (
        <div id='testimonials' className='mt-72 font-serif '>
            <div className='bg-[#7FFF00] bg-opacity-25 w-7/12  place-self-center transform -rotate-[15deg] rounded-2xl '>
                <div className='bg-[#7FFF00] bg-opacity-50  place-self-center transform rotate-[8deg] rounded-2xl'>
                    <div className='bg-neutral-900 px-16  py-12 place-self-center rounded-2xl transform rotate-[7deg]'>
                        <div className='text-3xl text-center text-neutral-200 '>Our clients say</div>
                        <BlurFade delay={0.2} inView>
                            <Carousel>
                                <CarouselContent className='text-center text-lg text-neutral-300 mt-8 '>
                                    {testimonials.map((testimonial, index) => (
                                        <CarouselItem key={index} >
                                            <div className='mb-4 space-x-4 flex items-center justify-center'>
                                                <img src={testimonial.photo} alt={testimonial.name} className='w-24 h-24 rounded-full ' />
                                                <div>
                                                    <BoxReveal boxColor='#7FFF00' duration={0.2} className='font-bold'>{testimonial.name}</BoxReveal>
                                                    <div className='flex'>
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <FaStar key={i} className='text-yellow-500 text-center text-sm' />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <BlurIn className='italic line-clamp-4 text-base' word={testimonial.feedback} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;