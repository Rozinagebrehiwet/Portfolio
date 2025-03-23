'use client';

import { FadeIn } from './animations';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-xl text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>
        {children}
      </div>
    </section>
  );
} 