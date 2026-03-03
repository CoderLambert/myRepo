import React from 'react';
import Poster from '../components/poster/Poster';
import PosterHeader from '../components/poster/PosterHeader';
import PosterHero from '../components/poster/PosterHero';
import PosterBody from '../components/poster/PosterBody';
import PosterFooter from '../components/poster/PosterFooter';
import PosterTitle from '../components/poster/PosterTitle';
import PosterText from '../components/poster/PosterText';
import PosterBadge from '../components/poster/PosterBadge';
import PosterDivider from '../components/poster/PosterDivider';
import PosterQRCode from '../components/poster/PosterQRCode';
import PosterGrid from '../components/poster/PosterGrid';
import { cn } from '@/lib/utils';

export interface EventPosterTemplate {
  // 头部
  badge?: string;
  title: string;
  subtitle?: string;

  // 主视觉
  heroImage?: string;

  // 信息区
  date: string;
  time: string;
  location: string;
  description?: string;

  // 底部
  ctaText?: string;
  onCtaClick?: () => void;
  qrCodeValue?: string;
  organizerLogo?: string;
  website?: string;
  copyright?: string;

  // 样式
  theme?: 'vibrant' | 'elegant' | 'minimal' | 'tech';
  size?: 'a4' | 'a3' | 'square' | 'story';

  // 自定义类名
  className?: string;
}

const themeVariantMap = {
  vibrant: 'gradient',
  elegant: 'dark',
  minimal: 'minimal',
  tech: 'dark',
};

export const EventPoster: React.FC<EventPosterTemplate> = ({
  badge = 'LIVE EVENT',
  title,
  subtitle,
  heroImage,
  date,
  time,
  location,
  description,
  ctaText = '立即报名',
  onCtaClick,
  qrCodeValue,
  website,
  copyright,
  theme = 'tech',
  size = 'a4',
  className,
}) => {
  const variant = themeVariantMap[theme];

  return (
    <Poster size={size} variant={variant} className={cn('poster-event', className)}>
      {/* 顶部发光装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-primary/20 to-transparent blur-3xl pointer-events-none" />

      {/* 头部 */}
      <PosterHeader
        badge={badge}
        title={title}
        subtitle={subtitle}
        variant="centered"
      />

      {/* 主视觉 */}
      <PosterHero
        image={heroImage}
        title={theme === 'tech' ? title : undefined}
        description={theme === 'tech' ? subtitle : undefined}
        overlay={!!heroImage}
        gradient={theme === 'vibrant'}
      />

      {/* 信息区 */}
      <PosterBody gap="xl">
        {/* 日期/时间/地点 */}
        <PosterGrid columns={3} gap="md">
          <div className="poster-card text-center">
            <div className="text-2xl mb-1">📅</div>
            <div className="text-sm text-muted-foreground">日期</div>
            <div className="font-semibold text-foreground">{date}</div>
          </div>
          <div className="poster-card text-center">
            <div className="text-2xl mb-1">⏰</div>
            <div className="text-sm text-muted-foreground">时间</div>
            <div className="font-semibold text-foreground">{time}</div>
          </div>
          <div className="poster-card text-center">
            <div className="text-2xl mb-1">📍</div>
            <div className="text-sm text-muted-foreground">地点</div>
            <div className="font-semibold text-foreground">{location}</div>
          </div>
        </PosterGrid>

        {/* 描述 */}
        {description && (
          <>
            <PosterDivider variant="gradient" />
            <PosterText variant="body">{description}</PosterText>
          </>
        )}
      </PosterBody>

      {/* 底部 */}
      <PosterFooter
        cta={
          <button
            onClick={onCtaClick}
            className="poster-btn poster-btn-glow w-full sm:w-auto"
          >
            {ctaText} →
          </button>
        }
        qrCode={qrCodeValue}
        qrCodeLabel="扫码报名"
        website={website}
        copyright={copyright}
        variant="split"
      />
    </Poster>
  );
};

export default EventPoster;
