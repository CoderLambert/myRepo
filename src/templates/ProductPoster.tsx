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
import PosterImage from '../components/poster/PosterImage';
import { cn } from '@/lib/utils';

export interface ProductPosterTemplate {
  // 头部
  badge?: string;
  productName: string;
  tagline?: string;

  // 产品
  productImage: string;

  // 价格
  price: string;
  originalPrice?: string;
  discount?: string;

  // 特性
  features?: string[];

  // 描述
  description?: string;

  // 底部
  ctaText?: string;
  onCtaClick?: () => void;
  qrCodeValue?: string;
  website?: string;
  copyright?: string;

  // 样式
  theme?: 'minimal' | 'bold' | 'gradient';
  size?: 'a4' | 'a3' | 'square' | 'story';

  // 自定义
  className?: string;
}

const themeVariantMap = {
  minimal: 'minimal',
  bold: 'dark',
  gradient: 'gradient',
};

export const ProductPoster: React.FC<ProductPosterTemplate> = ({
  badge,
  productName,
  tagline,
  productImage,
  price,
  originalPrice,
  discount,
  features = [],
  description,
  ctaText = '立即购买',
  onCtaClick,
  qrCodeValue,
  website,
  copyright,
  theme = 'gradient',
  size = 'a4',
  className,
}) => {
  const variant = themeVariantMap[theme];

  return (
    <Poster size={size} variant={variant} className={cn('poster-product', className)}>
      {/* 顶部发光装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-primary/20 to-transparent blur-3xl pointer-events-none" />

      {/* 头部 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h1 className="poster-text-gradient-primary font-bold text-3xl mb-1">
            {productName}
          </h1>
          {tagline && (
            <p className="text-muted-foreground">{tagline}</p>
          )}
        </div>
        {badge && (
          <PosterBadge variant="gradient" pulse>
            {badge}
          </PosterBadge>
        )}
      </div>

      {/* 产品图片 */}
      <div className="mb-6">
        <PosterImage
          src={productImage}
          alt={productName}
          aspectRatio="square"
          variant="border-gradient"
          rounded="xl"
          withGlow
        />
      </div>

      {/* 价格区 */}
      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        {originalPrice && (
          <span className="text-xl text-muted-foreground line-through">
            {originalPrice}
          </span>
        )}
        {discount && (
          <PosterBadge variant="error" size="lg">
            {discount}
          </PosterBadge>
        )}
      </div>

      {/* 特性列表 */}
      {features.length > 0 && (
        <div className="mb-6">
          <PosterGrid columns={features.length >= 3 ? 3 : 2} gap="sm">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-success">✓</span>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </PosterGrid>
        </div>
      )}

      {/* 描述 */}
      {description && (
        <>
          <PosterDivider variant="gradient" />
          <PosterText variant="body" className="mb-6">
            {description}
          </PosterText>
        </>
      )}

      {/* 底部 */}
      <PosterFooter
        cta={
          <button
            onClick={onCtaClick}
            className="poster-btn poster-btn-glow w-full"
          >
            {ctaText} →
          </button>
        }
        qrCode={qrCodeValue}
        qrCodeLabel="扫码购买"
        website={website}
        copyright={copyright}
        variant="centered"
      />
    </Poster>
  );
};

export default ProductPoster;
