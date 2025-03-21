'use client';

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/animations';
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { SiFastly } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const benefits = [
  {
    icon: PiLightbulbFilamentDuotone,
    title: "Tailored Solutions",
    description: "We customize our services to meet your specific needs, ensuring that you get the best solution for your business."
  },
  {
    icon: RiTeamLine,
    title: "Expert Team",
    description: "Our team consists of skilled professionals with extensive experience in various technologies and industries."
  },
  {
    icon: SiFastly,
    title: "Agile Development",
    description: "We follow agile methodologies to ensure flexibility and quick adaptations to changing requirements."
  },
  {
    icon: BiSupport,
    title: "Ongoing Support",
    description: "Our commitment to you doesn't end at deployment; we offer ongoing support and maintenance to keep your project running smoothly."
  },
  {
    icon: FaHandHoldingDollar,
    title: "Cost-Effective Solutions",
    description: "We provide high-quality services at competitive prices, ensuring that you get the best value for your investment."
  },
  {
    icon: MdOutlineSecurity,
    title: "Enhanced Security",
    description: "We prioritize security in our development process, implementing best practices to protect your data and applications."
  }
];

const Benefits: React.FC = () => {
  return (
    <Section
      id="benefits"
      title="Benefits"
      subtitle="Why Choose Our Services"
      className="bg-neutral-950/50"
    >
      <Parallax speed={20}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <Card
                icon={<benefit.icon className="w-8 h-8" />}
                title={benefit.title}
                description={benefit.description}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </Parallax>
    </Section>
  );
};

export default Benefits;
