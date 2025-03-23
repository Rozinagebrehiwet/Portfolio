'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { HoverScale } from './animations';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7FFF00]';
  
  const variants = {
    primary: 'bg-[#7FFF00] text-black hover:bg-[#91ff00]',
    secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
    outline: 'border-2 border-[#7FFF00] text-[#7FFF00] hover:bg-[#7FFF00] hover:text-black',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <HoverScale>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </motion.button>
    </HoverScale>
  );
}
