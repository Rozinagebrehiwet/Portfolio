
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import WordPullUp from '@/components/ui/word-pull-up';
import BlurFade from '@/components/ui/blur-fade';

const FAQs: React.FC = () => {
    return (
        <div id='faqs' className=" text-neutral-200 w-screen-lg p-8 place-self-center rounded-3xl  bg-neutral-900 border  border-[#7FFF00]  mt-72">
            <WordPullUp className="text-4xl font-serif mb-12" words='Frequently Asked Questions' />
            <BlurFade delay={0.2} inview>
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What services do you offer?</AccordionTrigger>
                        <AccordionContent>
                            We offer a range of software development services including web applications, mobile applications, and custom software solutions tailored to your needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How can I contact your team?</AccordionTrigger>
                        <AccordionContent>
                            You can reach us through our contact form on the website or by emailing us at support@example.com.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is your development process?</AccordionTrigger>
                        <AccordionContent>
                            Our development process involves understanding your requirements, designing the solution, developing the software, and conducting thorough testing before deployment.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Do you provide support after the project is completed?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we offer ongoing support and maintenance services to ensure your software continues to perform optimally.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Can I customize my project?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely! We believe in providing tailored solutions, and we encourage customization to meet your specific needs.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </BlurFade>
        </div>
    );
};

export default FAQs;