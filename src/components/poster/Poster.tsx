import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterProps {
  size?: 'a4' | 'a3' | 'square' | 'story' | 'banner' | 'custom';
  width?: string | number;
  height?: string | number;
  variant?: 'dark' | 'gradient' | 'glass' | 'minimal';
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

const sizeMap = {
  a4: { width: '210mm', height: '297mm' },
  a3: { width: '297mm', height: '420mm' },
  square: { width: '1080px', height: '1080px' },
  story: { width: '1080px', height: '1920px' },
  banner: { width: '1920px', height: '1080px' },
};

const variantMap = {
  dark: 'bg-gradient-to-b from-background via-surface-1 to-surface-2',
  gradient: 'bg-gradient-to-br from-background via-primary/5 to-surface-1',
  glass: 'bg-surface-2/60 backdrop-blur-xl',
  minimal: 'bg-background',
};

export const Poster = React.forwardRef<HTMLDivElement, PosterProps>(
  ({ size = 'a4', width, height, variant = 'dark', className, children, ...props }, ref) => {
    const dimensions = size !== 'custom' ? sizeMap[size] : { width, height };

    return (
      <div
        ref={ref}
        className={cn(
          'poster-base',
          variantMap[variant],
          className
        )}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          maxWidth: '100%',
        }}
        {...props}
      >
        {/* 顶部光晕装饰 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />

        {/* 内容区域 */}
        <div className="relative z-10 h-full flex flex-col p-8">
          {children}
        </div>
      </div>
    );
  }
);

Poster.displayName = 'Poster';

export default Poster;
