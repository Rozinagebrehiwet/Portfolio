'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/animations';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaUsers, FaRocket } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Developer",
    image: "/team1.jpg",
    description: "10+ years of experience in full-stack development and team leadership."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/team2.jpg",
    description: "Passionate about creating intuitive and beautiful user experiences."
  },
  {
    name: "Mike Johnson",
    role: "Project Manager",
    image: "/team3.jpg",
    description: "Expert in agile methodologies and client communication."
  }
];

const expertise = [
  {
    icon: FaCode,
    title: "Development",
    description: "Full-stack development using cutting-edge technologies and best practices."
  },
  {
    icon: FaPalette,
    title: "Design",
    description: "Creating beautiful and functional user interfaces that engage users."
  },
  {
    icon: FaUsers,
    title: "Team Collaboration",
    description: "Effective communication and teamwork to deliver exceptional results."
  },
  {
    icon: FaRocket,
    title: "Innovation",
    description: "Staying ahead of industry trends and implementing modern solutions."
  }
];

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Us"
      subtitle="Our Story & Team"
      className="bg-neutral-950/50"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neutral-400 text-lg leading-relaxed">
              Discover the exceptional software development services we offer at our company.
              From custom web applications to mobile apps and beyond, our team of skilled
              developers, designers, and project managers collaborate to bring your digital vision to life.
            </p>
          </div>
        </FadeIn>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <Card
                icon={<item.icon className="w-8 h-8" />}
                title={item.title}
                description={item.description}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <FadeIn>
            <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7FFF00]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 relative z-10">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-[#7FFF00] overflow-hidden">
                      <div className="w-full h-full bg-neutral-800" />
                    </div>
                    <h4 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h4>
                    <p className="text-[#7FFF00] text-center mb-4">{member.role}</p>
                    <p className="text-neutral-400 text-center">{member.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <FadeIn delay={0.6}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neutral-400 text-lg leading-relaxed">
              Our software development expertise spans a wide range of industries, from e-commerce to
              finance, healthcare, and more. We bring your software vision to life through a blend of
              innovation and collaboration, delivering exceptional results.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default About;
