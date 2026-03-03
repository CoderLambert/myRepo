import React from 'react';
import { cn } from '@/lib/utils';
import { QRCodeSVG } from 'qrcode.react';

export interface PosterQRCodeProps {
  value: string;
  size?: 'sm' | 'md' | 'lg';
  fgColor?: string;
  bgColor?: string;
  logo?: string;
  label?: string;
  withGlow?: boolean;
  level?: 'L' | 'M' | 'Q' | 'H';
  className?: string;
}

const sizeMap = {
  sm: 96,
  md: 128,
  lg: 160,
};

export const PosterQRCode: React.FC<PosterQRCodeProps> = ({
  value,
  size = 'md',
  fgColor = '#1a1a1a',
  bgColor = '#ffffff',
  logo,
  label,
  withGlow = true,
  level = 'H',
  className,
}) => {
  const qrSize = sizeMap[size];

  return (
    <div className={cn('inline-flex flex-col items-center gap-2', className)}>
      <div
        className={cn(
          'relative p-3 bg-white rounded-xl',
          withGlow && 'poster-glow poster-glow-subtle'
        )}
      >
        {/* 渐变边框容器 */}
        <div className="poster-border-gradient p-0.5 rounded-lg">
          <div className="bg-white rounded-lg p-2">
            <QRCodeSVG
              value={value}
              size={qrSize}
              level={level}
              includeMargin={false}
              imageSettings={logo ? {
                src: logo,
                height: qrSize / 5,
                width: qrSize / 5,
                excavate: true,
              } : undefined}
            />
          </div>
        </div>
      </div>

      {label && (
        <span className="text-xs text-muted-foreground text-center">
          {label}
        </span>
      )}
    </div>
  );
};

export default PosterQRCode;
