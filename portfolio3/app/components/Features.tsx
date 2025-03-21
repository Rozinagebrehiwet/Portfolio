'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/animations';
import { MdOutlineDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const features = [
  {
    icon: MdOutlineDesignServices,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that enhance user experience and engagement.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: CgWebsite,
    title: "Web Development",
    description: "Building responsive and scalable web applications using cutting-edge technologies.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications that work seamlessly across devices.",
    color: "from-purple-500 to-pink-500"
  }
];

const Features = () => {
  return (
    <Section
      id="features"
      title="Features"
      subtitle="Our Core Services"
      className="bg-neutral-950/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FadeIn key={feature.title} delay={index * 0.2}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              <Card
                icon={<feature.icon className="w-8 h-8" />}
                title={feature.title}
                description={feature.description}
                className="h-full relative z-10"
              />
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-16 text-center">
        <FadeIn delay={0.6}>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Our comprehensive suite of services ensures that your digital presence is not just functional, but exceptional.
            We combine creativity with technical expertise to deliver solutions that drive results.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Features;
