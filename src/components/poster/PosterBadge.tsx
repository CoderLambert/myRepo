import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

const variantMap = {
  primary: 'poster-badge-primary',
  success: 'poster-badge-success',
  warning: 'poster-badge-warning',
  error: 'poster-badge-error',
  info: 'poster-badge-info',
  gradient: 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30',
};

const sizeMap = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export const PosterBadge: React.FC<PosterBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  pulse = false,
  className,
}) => {
  return (
    <span
      className={cn(
        'poster-badge',
        variantMap[variant],
        sizeMap[size],
        pulse && 'poster-badge-pulse',
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default PosterBadge;
