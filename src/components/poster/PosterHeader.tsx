import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterHeaderProps {
  logo?: string | React.ReactNode;
  badge?: string;
  title?: string;
  subtitle?: string;
  variant?: 'centered' | 'left' | 'right';
  className?: string;
}

export const PosterHeader: React.FC<PosterHeaderProps> = ({
  logo,
  badge,
  title,
  subtitle,
  variant = 'centered',
  className,
}) => {
  const alignMap = {
    centered: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col gap-4 mb-6', alignMap[variant], className)}>
      {/* Logo */}
      {logo && (
        <div className="mb-2">
          {typeof logo === 'string' ? (
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          ) : (
            logo
          )}
        </div>
      )}

      {/* Badge */}
      {badge && (
        <span className="poster-badge poster-badge-primary inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-current animate-pulse" />
          {badge}
        </span>
      )}

      {/* Title */}
      {title && (
        <h1 className="poster-text-gradient-primary font-bold leading-tight" style={{ fontSize: 'var(--poster-text-display)' }}>
          {title}
        </h1>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-secondary text-lg max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PosterHeader;
