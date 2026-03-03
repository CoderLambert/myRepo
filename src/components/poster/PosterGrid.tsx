import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterGridProps {
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

const columnsMap = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

const gapMap = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

export const PosterGrid: React.FC<PosterGridProps> = ({
  columns = 2,
  gap = 'lg',
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'grid',
        columnsMap[columns],
        gapMap[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

export default PosterGrid;
