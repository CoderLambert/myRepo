import React from 'react';
import { cn } from '@/lib/utils';

export interface PosterFooterProps {
  cta?: React.ReactNode;
  qrCode?: string;
  qrCodeLabel?: string;
  socialLinks?: React.ReactNode;
  website?: string;
  copyright?: string;
  variant?: 'centered' | 'split';
  className?: string;
}

export const PosterFooter: React.FC<PosterFooterProps> = ({
  cta,
  qrCode,
  qrCodeLabel = '扫码了解更多',
  socialLinks,
  website,
  copyright,
  variant = 'centered',
  className,
}) => {
  return (
    <div className={cn('mt-auto pt-6', className)}>
      {/* 渐变分隔线 */}
      <div className="poster-divider mb-6" />

      {/* 主要内容区 */}
      <div
        className={cn(
          'flex items-center gap-6',
          variant === 'centered' ? 'justify-center flex-col' : 'justify-between'
        )}
      >
        {/* CTA 按钮 */}
        {cta && (
          <div className={cn(variant === 'centered' ? 'mb-4' : '')}>
            {cta}
          </div>
        )}

        {/* 二维码 */}
        {qrCode && (
          <div className="flex flex-col items-center gap-2">
            <div className="poster-border-gradient p-2 bg-white rounded-lg">
              {/* QR Code 占位 - 实际使用 PosterQRCode 组件 */}
              <div className="w-24 h-24 bg-surface-1 rounded flex items-center justify-center text-xs text-muted-foreground">
                QR Code
              </div>
            </div>
            {qrCodeLabel && (
              <span className="text-xs text-muted-foreground">{qrCodeLabel}</span>
            )}
          </div>
        )}
      </div>

      {/* 底部信息 */}
      {(socialLinks || website || copyright) && (
        <div className="poster-divider mt-6" />
      )}

      {(socialLinks || website || copyright) && (
        <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
          {socialLinks && <div className="flex items-center gap-3">{socialLinks}</div>}

          {website && <span>{website}</span>}

          {copyright && <span>{copyright}</span>}
        </div>
      )}
    </div>
  );
};

export default PosterFooter;
