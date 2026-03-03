import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterTextProps {
  children: React.ReactNode;
  variant?: 'body' | 'small' | 'tiny' | 'muted';
  className?: string;
}

const variantMap = {
  body: 'text-base text-foreground',
  small: 'text-sm text-foreground',
  tiny: 'text-xs text-muted-foreground',
  muted: 'text-base text-muted-foreground',
};

export const PosterText: React.FC<PosterTextProps> = ({
  children,
  variant = 'body',
  className,
}) => {
  return (
    <p className={cn(variantMap[variant], className)}>
      {children}
    </p>
  );
};

export default PosterText;
