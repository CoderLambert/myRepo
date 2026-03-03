import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterGlowProps {
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  intensity?: 'subtle' | 'medium' | 'intense';
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  className?: string;
}

const colorMap = {
  primary: 'from-primary/30 via-primary/10 to-transparent',
  success: 'from-success/30 via-success/10 to-transparent',
  warning: 'from-warning/30 via-warning/10 to-transparent',
  error: 'from-error/30 via-error/10 to-transparent',
  info: 'from-info/30 via-info/10 to-transparent',
};

const intensityMap = {
  subtle: 'opacity-30 blur-3xl',
  medium: 'opacity-50 blur-3xl',
  intense: 'opacity-70 blur-3xl',
};

export const PosterGlow: React.FC<PosterGlowProps> = ({
  color = 'primary',
  intensity = 'medium',
  position = 'top',
  className,
}) => {
  const positionClasses = {
    top: 'inset-x-0 top-0 h-32 bg-gradient-to-b',
    bottom: 'inset-x-0 bottom-0 h-32 bg-gradient-to-t',
    left: 'inset-y-0 left-0 w-32 bg-gradient-to-r',
    right: 'inset-y-0 right-0 w-32 bg-gradient-to-l',
    center: 'inset-0 flex items-center justify-center',
  };

  return (
    <div
      className={cn(
        'absolute pointer-events-none overflow-hidden',
        positionClasses[position],
        className
      )}
    >
      {position === 'center' ? (
        <div
          className={cn(
            'w-64 h-64 rounded-full bg-radial-gradient from-primary/30 to-transparent blur-3xl',
            intensityMap[intensity]
          )}
          style={{
            background: `radial-gradient(circle at center, ${color === 'primary' ? 'hsl(255 87% 70% / 0.3)' : 'hsl(255 87% 70% / 0.3)'} 0%, transparent 70%)`,
            filter: intensity === 'intense' ? 'blur(60px)' : 'blur(40px)',
          }}
        />
      ) : (
        <div
          className={cn(
            'w-full h-full',
            colorMap[color],
            intensityMap[intensity]
          )}
        />
      )}
    </div>
  );
};

export default PosterGlow;
