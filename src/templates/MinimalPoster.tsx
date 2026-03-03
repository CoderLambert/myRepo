import React from 'react';
import Poster from '../components/poster/Poster';
import PosterHeader from '../components/poster/PosterHeader';
import PosterBody from '../components/poster/PosterBody';
import PosterFooter from '../components/poster/PosterFooter';
import PosterTitle from '../components/poster/PosterTitle';
import PosterText from '../components/poster/PosterText';
import PosterDivider from '../components/poster/PosterDivider';
import PosterQRCode from '../components/poster/PosterQRCode';
import PosterImage from '../components/poster/PosterImage';
import { cn } from '@/lib/utils';

export interface MinimalPosterTemplate {
  // 内容
  title: string;
  subtitle?: string;
  description?: string;

  // 可选图片
  image?: string;

  // 可选信息
  info?: Array<{ label: string; value: string }>;

  // 底部
  ctaText?: string;
  qrCodeValue?: string;
  website?: string;

  // 样式
  size?: 'a4' | 'a3' | 'square' | 'story';
  className?: string;
}

export const MinimalPoster: React.FC<MinimalPosterTemplate> = ({
  title,
  subtitle,
  description,
  image,
  info,
  ctaText,
  qrCodeValue,
  website,
  size = 'a4',
  className,
}) => {
  return (
    <Poster size={size} variant="minimal" className={cn('poster-minimal', className)}>
      {/* 极简头部 */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-light text-foreground mb-3 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground font-light">
            {subtitle}
          </p>
        )}
      </div>

      {/* 可选图片 */}
      {image && (
        <div className="mb-8">
          <PosterImage
            src={image}
            alt={title}
            aspectRatio="square"
            variant="default"
            rounded="lg"
          />
        </div>
      )}

      {/* 描述 */}
      {description && (
        <PosterBody className="mb-8">
          <PosterText variant="body" className="text-center max-w-md mx-auto leading-relaxed">
            {description}
          </PosterText>
        </PosterBody>
      )}

      {/* 信息列表 */}
      {info && info.length > 0 && (
        <>
          <PosterDivider variant="solid" className="mb-6" />
          <div className="space-y-4 mb-8">
            {info.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 底部 */}
      <PosterFooter
        cta={ctaText ? (
          <button className="poster-btn poster-btn-primary">
            {ctaText}
          </button>
        ) : undefined}
        qrCode={qrCodeValue}
        qrCodeLabel="了解更多"
        website={website}
        variant="centered"
      />
    </Poster>
  );
};

export default MinimalPoster;
