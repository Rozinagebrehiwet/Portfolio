import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import BoxReveal from "@/components/ui/box-reveal";
import BlurIn from '@/components/ui/blur-in';
import WordPullUp from '@/components/ui/word-pull-up';
import BlurFade from '@/components/ui/blur-fade';
export default function Selected() {
    return (
        <div id='selected' className='mt-72 font-sans'>
            <WordPullUp className='text-4xl text-center text-neutral-400 uppercase mb-24' words='Selected Projects' />
            <BlurFade delay={0.2} inView>
                <Carousel opts={{ align: "center", }} className="max-w-screen-lg mx-auto place-content-center">
                    <CarouselContent>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                                <div className='py-24 px-14'>
                                    <Card className='bg-neutral-900  border-none hover:shadow-none shadow-2xl shadow-[#7FFF00]  hover:transform hover:scale-110'>
                                        <CardContent className="flex flex-col items-center justify-center p-8">
                                            <BoxReveal boxColor={"#7FFF00"} duration={0.2} >
                                                <div className='px-36 py-20 rounded-xl hover:cursor-pointer mb-5 bg-transparent border border-[#7FFF00]'></div>
                                            </BoxReveal>
                                            <BlurIn className="text-2xl  mb-3 text-neutral-300" word='Title Card' />
                                            <BlurIn className="text-neutral-300 line-clamp-2 mb-8"
                                                word='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis
                                                magna .'/>
                                            <BoxReveal boxColor={"#7FFF00"} duration={0.2}>
                                                <button
                                                    className=" text-black justify-center font-semibold   px-4 py-2  items-center bg-neutral-200   isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#7FFF00] hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden  rounded group">
                                                    Preview
                                                </button>
                                            </BoxReveal>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </BlurFade>
        </div >
    )
}
