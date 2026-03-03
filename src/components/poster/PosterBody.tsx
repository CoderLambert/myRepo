import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterBodyProps {
  variant?: 'centered' | 'split' | 'grid' | 'timeline';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

const gapMap = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

export const PosterBody: React.FC<PosterBodyProps> = ({
  variant = 'centered',
  gap = 'lg',
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'flex-1',
        gapMap[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

export default PosterBody;
