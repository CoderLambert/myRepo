import React from 'react';
import Poster from '../components/poster/Poster';
import PosterHeader from '../components/poster/PosterHeader';
import PosterBody from '../components/poster/PosterBody';
import PosterFooter from '../components/poster/PosterFooter';
import PosterTitle from '../components/poster/PosterTitle';
import PosterText from '../components/poster/PosterText';
import PosterBadge from '../components/poster/PosterBadge';
import PosterDivider from '../components/poster/PosterDivider';
import PosterQRCode from '../components/poster/PosterQRCode';
import PosterGrid from '../components/poster/PosterGrid';
import { cn } from '@/lib/utils';

export interface ConferencePosterTemplate {
  conferenceName: string;
  theme?: string;
  date: string;
  venue: string;
  tagline?: string;

  // 演讲者
  speakers?: Array<{
    name: string;
    title: string;
    company?: string;
    avatar?: string;
  }>;

  // 议程
  agenda?: Array<{
    time: string;
    title: string;
    speaker?: string;
  }>;

  // 赞助商
  sponsors?: Array<{
    name: string;
    logo?: string;
    tier: 'gold' | 'silver' | 'bronze';
  }>;

  // 底部
  registrationUrl?: string;
  qrCodeValue?: string;
  website?: string;
  copyright?: string;

  // 样式
  size?: 'a4' | 'a3' | 'square';
  className?: string;
}

export const ConferencePoster: React.FC<ConferencePosterTemplate> = ({
  conferenceName,
  theme: conferenceTheme,
  date,
  venue,
  tagline,
  speakers = [],
  agenda = [],
  sponsors = [],
  registrationUrl,
  qrCodeValue,
  website,
  copyright,
  size = 'a4',
  className,
}) => {
  return (
    <Poster size={size} variant="dark" className={cn('poster-conference', className)}>
      {/* 顶部发光装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-primary/20 to-transparent blur-3xl pointer-events-none" />

      {/* 头部 */}
      <div className="text-center mb-6">
        <PosterBadge variant="primary" size="lg" className="mb-4">
          🎤 CONFERENCE 2024
        </PosterBadge>

        <h1 className="poster-text-gradient-primary font-black text-4xl mb-2">
          {conferenceName}
        </h1>

        {conferenceTheme && (
          <p className="text-xl text-muted-foreground italic mb-2">
            "{conferenceTheme}"
          </p>
        )}

        {tagline && (
          <p className="text-lg text-secondary">
            {tagline}
          </p>
        )}
      </div>

      {/* 主要信息 */}
      <div className="mb-8">
        <PosterGrid columns={3} gap="md">
          <div className="poster-card text-center">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-sm text-muted-foreground">日期</div>
            <div className="font-semibold text-lg">{date}</div>
          </div>
          <div className="poster-card text-center">
            <div className="text-3xl mb-2">📍</div>
            <div className="text-sm text-muted-foreground">地点</div>
            <div className="font-semibold text-lg">{venue}</div>
          </div>
          <div className="poster-card text-center">
            <div className="text-3xl mb-2">🎫</div>
            <div className="text-sm text-muted-foreground">入场</div>
            <div className="font-semibold text-lg">免费注册</div>
          </div>
        </PosterGrid>
      </div>

      {/* 演讲者 */}
      {speakers.length > 0 && (
        <>
          <div className="mb-4">
            <PosterTitle size="section" variant="gradient">
              Keynote Speakers
            </PosterTitle>
          </div>

          <PosterGrid columns={speakers.length >= 3 ? 3 : speakers.length} gap="lg">
            {speakers.map((speaker, index) => (
              <div key={index} className="poster-card text-center">
                {speaker.avatar ? (
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/30"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full mx-auto mb-3 bg-surface-2 flex items-center justify-center text-2xl">
                    👤
                  </div>
                )}
                <div className="font-semibold text-foreground">{speaker.name}</div>
                <div className="text-sm text-muted-foreground">{speaker.title}</div>
                {speaker.company && (
                  <div className="text-xs text-secondary">{speaker.company}</div>
                )}
              </div>
            ))}
          </PosterGrid>

          <PosterDivider variant="gradient" className="my-6" />
        </>
      )}

      {/* 议程 */}
      {agenda.length > 0 && (
        <>
          <div className="mb-4">
            <PosterTitle size="section" variant="gradient">
              Agenda
            </PosterTitle>
          </div>

          <div className="space-y-3 mb-6">
            {agenda.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-surface-1/50 border border-border"
              >
                <div className="text-sm font-mono text-primary min-w-[80px]">
                  {item.time}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground">{item.title}</div>
                  {item.speaker && (
                    <div className="text-sm text-muted-foreground">{item.speaker}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <PosterDivider variant="gradient" className="my-6" />
        </>
      )}

      {/* 赞助商 */}
      {sponsors.length > 0 && (
        <>
          <div className="mb-4">
            <PosterTitle size="section" variant="gradient">
              Sponsors
            </PosterTitle>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className={cn(
                  'px-6 py-3 rounded-lg bg-surface-1 border',
                  sponsor.tier === 'gold' && 'border-yellow-500/50',
                  sponsor.tier === 'silver' && 'border-gray-400/50',
                  sponsor.tier === 'bronze' && 'border-amber-700/50'
                )}
              >
                {sponsor.logo ? (
                  <img src={sponsor.logo} alt={sponsor.name} className="h-8 object-contain" />
                ) : (
                  <span className="text-sm text-muted-foreground">{sponsor.name}</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* 底部 */}
      <PosterFooter
        cta={
          <button className="poster-btn poster-btn-glow w-full sm:w-auto">
            立即注册 →
          </button>
        }
        qrCode={qrCodeValue}
        qrCodeLabel="扫码注册"
        website={website}
        copyright={copyright}
        variant="centered"
      />
    </Poster>
  );
};

export default ConferencePoster;
