import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterHeroProps {
  image?: string;
  title?: string;
  description?: string;
  overlay?: boolean;
  gradient?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const PosterHero: React.FC<PosterHeroProps> = ({
  image,
  title,
  description,
  overlay = true,
  gradient = true,
  className,
  children,
}) => {
  return (
    <div className={cn('relative mb-6 rounded-xl overflow-hidden', className)}>
      {image ? (
        <div className="poster-image-container aspect-video">
          <img src={image} alt={title || 'Hero'} className="w-full h-full object-cover" />

          {/* 渐变遮罩 */}
          {overlay && (
            <div
              className={cn(
                'absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent',
                gradient && 'from-primary/20 via-background/30 to-transparent'
              )}
            />
          )}

          {/* 叠加内容 */}
          {(title || description) && (
            <div className="absolute bottom-0 left-0 right-0 p-6">
              {title && (
                <h2 className="text-white text-3xl font-bold mb-2 drop-shadow-lg">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-white/80 text-base drop-shadow">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        /* 无图片时的占位区域 */
        <div className="poster-border-gradient aspect-video flex items-center justify-center bg-surface-1">
          <div className="text-center p-8">
            {title && (
              <h2 className="poster-text-gradient-primary font-bold text-2xl mb-2">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
      )}

      {/* 自定义内容 */}
      {children}
    </div>
  );
};

export default PosterHero;
