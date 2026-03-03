import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterTitleProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'primary' | 'white';
  size?: 'hero' | 'display' | 'headline' | 'title' | 'section';
  className?: string;
}

const sizeMap = {
  hero: 'var(--poster-text-hero)',
  display: 'var(--poster-text-display)',
  headline: 'var(--poster-text-headline)',
  title: 'var(--poster-text-title)',
  section: 'var(--poster-text-section)',
};

export const PosterTitle: React.FC<PosterTitleProps> = ({
  children,
  variant = 'gradient',
  size = 'title',
  className,
}) => {
  const variantClasses = {
    gradient: 'poster-text-gradient',
    primary: 'poster-text-gradient-primary',
    white: 'text-white',
  };

  return (
    <h2
      className={cn(
        'font-bold leading-tight',
        variantClasses[variant],
        className
      )}
      style={{ fontSize: sizeMap[size] }}
    >
      {children}
    </h2>
  );
};

export default PosterTitle;
