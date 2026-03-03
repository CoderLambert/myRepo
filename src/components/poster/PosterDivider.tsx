import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterDividerProps {
  variant?: 'solid' | 'dashed' | 'gradient' | 'fade';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const PosterDivider: React.FC<PosterDividerProps> = ({
  variant = 'fade',
  orientation = 'horizontal',
  className,
}) => {
  const baseClasses = 'border-0';

  const variantClasses = {
    solid: 'bg-border',
    dashed: 'border-t border-dashed border-border',
    gradient: 'poster-divider-gradient',
    fade: 'poster-divider',
  };

  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'w-px h-full',
          variantClasses[variant],
          variant === 'gradient' && 'bg-gradient-to-b from-transparent via-border to-transparent',
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'h-px w-full',
        variantClasses[variant],
        className
      )}
    />
  );
};

export default PosterDivider;
