'use client';

import { motion } from 'framer-motion';
import { HoverScale } from './animations';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Card({ title, description, icon, className = '' }: CardProps) {
  return (
    <HoverScale>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 ${className}`}
      >
        {icon && (
          <div className="w-12 h-12 bg-[#7FFF00]/10 rounded-lg flex items-center justify-center mb-4">
            <div className="text-[#7FFF00] text-2xl">
              {icon}
            </div>
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </motion.div>
    </HoverScale>
  );
}
