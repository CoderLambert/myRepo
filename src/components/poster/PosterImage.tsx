import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill';
  variant?: 'default' | 'border-gradient' | 'glow';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  withCaption?: boolean;
  caption?: string;
}

const aspectRatioMap = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-video',
  auto: '',
};

const roundedMap = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

export const PosterImage: React.FC<PosterImageProps> = ({
  src,
  alt,
  aspectRatio = 'landscape',
  objectFit = 'cover',
  variant = 'border-gradient',
  rounded = 'lg',
  className,
  withCaption,
  caption,
}) => {
  const imageElement = (
    <img
      src={src}
      alt={alt}
      className={cn(
        'w-full h-full',
        objectFit === 'cover' && 'object-cover',
        objectFit === 'contain' && 'object-contain',
        objectFit === 'fill' && 'object-fill',
        roundedMap[rounded]
      )}
    />
  );

  return (
    <div className={cn('inline-block', className)}>
      {variant === 'border-gradient' ? (
        <div className={cn('poster-border-gradient', aspectRatioMap[aspectRatio])}>
          <div className={cn('overflow-hidden', roundedMap[rounded])}>
            {imageElement}
          </div>
        </div>
      ) : variant === 'glow' ? (
        <div
          className={cn(
            'poster-glow poster-glow-medium',
            aspectRatioMap[aspectRatio],
            roundedMap[rounded]
          )}
        >
          {imageElement}
        </div>
      ) : (
        <div className={cn(aspectRatioMap[aspectRatio], roundedMap[rounded], 'overflow-hidden')}>
          {imageElement}
        </div>
      )}

      {withCaption && caption && (
        <p className="text-center text-sm text-muted-foreground mt-2">{caption}</p>
      )}
    </div>
  );
};

export default PosterImage;
