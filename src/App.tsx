import { useState, useRef } from 'react';
import { Download, Image, FileText, Grid3X3, Check } from 'lucide-react';
import { EventPoster } from './templates/EventPoster';
import { ProductPoster } from './templates/ProductPoster';
import { ConferencePoster } from './templates/ConferencePoster';
import { MinimalPoster } from './templates/MinimalPoster';
import Poster from './components/poster/Poster';
import PosterHeader from './components/poster/PosterHeader';
import PosterHero from './components/poster/PosterHero';
import PosterBody from './components/poster/PosterBody';
import PosterFooter from './components/poster/PosterFooter';
import PosterTitle from './components/poster/PosterTitle';
import PosterText from './components/poster/PosterText';
import PosterImage from './components/poster/PosterImage';
import PosterBadge from './components/poster/PosterBadge';
import PosterDivider from './components/poster/PosterDivider';
import PosterQRCode from './components/poster/PosterQRCode';
import PosterGrid from './components/poster/PosterGrid';
import PosterGlow from './components/poster/PosterGlow';
import { usePosterExport } from './hooks/usePosterExport';
import './App.css';
import './design-system/poster-tokens.css';

function App() {
  const [activeTemplate, setActiveTemplate] = useState<'event' | 'product' | 'conference' | 'minimal' | 'custom'>('event');
  const [selectedSize, setSelectedSize] = useState<'a4' | 'a3' | 'square'>('a4');
  const posterRef = useRef<HTMLDivElement>(null);

  const { exportAsPNG, exportAsPDF, isExporting } = usePosterExport();

  const handleExportPNG = async () => {
    if (posterRef.current) {
      await exportAsPNG(posterRef.current, {
        scale: 2,
        filename: `poster-${activeTemplate}.png`,
      });
    }
  };

  const handleExportPDF = async () => {
    if (posterRef.current) {
      await exportAsPDF(posterRef.current, {
        scale: 2,
        format: selectedSize === 'a4' ? 'a4' : selectedSize === 'a3' ? 'a3' : 'a4',
        filename: `poster-${activeTemplate}.pdf`,
      });
    }
  };

  const renderPoster = () => {
    switch (activeTemplate) {
      case 'event':
        return (
          <EventPoster
            ref={posterRef as any}
            badge="LIVE EVENT"
            title="科技大会 2024"
            subtitle="探索未来科技的无限可能"
            heroImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop"
            date="2024.12.25"
            time="14:00 PM"
            location="北京·国家会议中心"
            description="汇聚全球科技领袖，共同探讨人工智能、区块链、量子计算等前沿技术的未来发展。为期两天的深度交流，为您带来前所未有的科技盛宴。"
            ctaText="立即报名"
            qrCodeValue="https://example.com/register"
            website="www.techconf2024.com"
            copyright="© 2024 TechConf. All rights reserved."
            theme="tech"
            size={selectedSize}
          />
        );

      case 'product':
        return (
          <ProductPoster
            ref={posterRef as any}
            badge="NEW"
            productName="无线降噪耳机 Pro"
            tagline="沉浸式音质体验"
            productImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
            price="¥1,299"
            originalPrice="¥1,699"
            discount="-24%"
            features={['主动降噪', '40 小时续航', 'Hi-Res 音质', '蓝牙 5.3']}
            description="搭载最新降噪芯片，提供行业领先的主动降噪效果。40mm 驱动单元带来震撼音质，一次充电可续航 40 小时。"
            ctaText="立即购买"
            qrCodeValue="https://example.com/buy"
            website="www.audio-pro.com"
            theme="gradient"
            size={selectedSize}
          />
        );

      case 'conference':
        return (
          <ConferencePoster
            ref={posterRef as any}
            conferenceName="全球开发者大会"
            theme="Innovating the Future"
            tagline="创新未来 · 连接世界"
            date="Dec 25-27, 2024"
            venue="北京·国家会议中心"
            speakers={[
              { name: 'John Chen', title: 'CEO', company: 'TechCorp', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
              { name: 'Jane Liu', title: 'CTO', company: 'InnovateAI' },
              { name: 'Bob Wang', title: 'Founder', company: 'StartupXYZ' },
            ]}
            agenda={[
              { time: '09:00', title: '开幕式 & 主题演讲', speaker: 'John Chen' },
              { time: '10:30', title: 'AI 技术前沿', speaker: 'Jane Liu' },
              { time: '14:00', title: '创业分享', speaker: 'Bob Wang' },
            ]}
            sponsors={[
              { name: 'Google', tier: 'gold' },
              { name: 'Microsoft', tier: 'gold' },
              { name: 'Amazon', tier: 'silver' },
            ]}
            qrCodeValue="https://example.com/register"
            website="www.devconf2024.com"
            size={selectedSize}
          />
        );

      case 'minimal':
        return (
          <MinimalPoster
            ref={posterRef as any}
            title="LESS IS MORE"
            subtitle="极简主义设计"
            description="少即是多。去除多余的装饰，保留最本质的内容。让设计回归纯粹，让信息传递更加清晰。"
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=600&fit=crop"
            info={[
              { label: '设计理念', value: '极简主义' },
              { label: '配色方案', value: '单色调' },
              { label: '字体选择', value: '无衬线体' },
            ]}
            qrCodeValue="https://example.com/minimal"
            website="www.minimal.design"
            size={selectedSize}
          />
        );

      case 'custom':
        return (
          <Poster
            ref={posterRef as any}
            size={selectedSize}
            variant="dark"
            className="flex flex-col"
          >
            <PosterGlow position="top" intensity="medium" />

            <PosterHeader
              badge="CUSTOM"
              title="自定义海报"
              subtitle="使用基础组件自由组合"
              variant="centered"
            />

            <PosterHero
              title="自由组合"
              description="使用 Poster 组件构建你的专属设计"
              overlay
              gradient
            />

            <PosterBody gap="xl">
              <PosterGrid columns={2} gap="lg">
                <div className="poster-card">
                  <PosterTitle size="section" variant="primary">
                    组件化
                  </PosterTitle>
                  <PosterText variant="small">
                    每个组件都是独立的，可以自由组合
                  </PosterText>
                </div>
                <div className="poster-card">
                  <PosterTitle size="section" variant="primary">
                    可定制
                  </PosterTitle>
                  <PosterText variant="small">
                    支持完全自定义样式和内容
                  </PosterText>
                </div>
              </PosterGrid>

              <PosterDivider variant="gradient" />

              <div className="text-center">
                <PosterText variant="body">
                  使用 DarkUI Poster 系统，创建属于你的精美海报
                </PosterText>
              </div>
            </PosterBody>

            <PosterFooter
              cta={
                <button className="poster-btn poster-btn-glow">
                  开始设计 →
                </button>
              }
              qrCode="https://example.com/custom"
              qrCodeLabel="了解更多"
              variant="centered"
            />
          </Poster>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* 导航栏 */}
      <nav className="glass sticky top-0 z-50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center glow-primary">
                <Image className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gradient-primary">
                DarkUI Poster
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleExportPNG}
                disabled={isExporting}
                className="btn-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                导出 PNG
              </button>
              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 mr-2" />
                导出 PDF
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* 左侧控制面板 */}
          <div className="w-80 shrink-0 space-y-6">
            {/* 模板选择 */}
            <div className="card">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Grid3X3 className="w-4 h-4 text-primary" />
                选择模板
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'event', label: '活动海报' },
                  { id: 'product', label: '产品海报' },
                  { id: 'conference', label: '会议海报' },
                  { id: 'minimal', label: '极简海报' },
                  { id: 'custom', label: '自定义' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTemplate(item.id as any)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                      activeTemplate === item.id
                        ? 'bg-primary/10 border border-primary/30 text-primary'
                        : 'bg-surface-1 border border-border text-secondary hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                      {activeTemplate === item.id && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 尺寸选择 */}
            <div className="card">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                输出尺寸
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'a4', label: 'A4', desc: '210 × 297 mm' },
                  { id: 'a3', label: 'A3', desc: '297 × 420 mm' },
                  { id: 'square', label: 'Square', desc: '1080 × 1080 px' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSize(item.id as any)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedSize === item.id
                        ? 'bg-primary/10 border border-primary/30 text-primary'
                        : 'bg-surface-1 border border-border text-secondary hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 导出提示 */}
            {isExporting && (
              <div className="card border-primary/30 bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  <span className="text-sm text-primary">正在导出...</span>
                </div>
              </div>
            )}
          </div>

          {/* 右侧海报预览 */}
          <div className="flex-1 overflow-auto">
            <div className="sticky top-24">
              {/* 缩放容器 */}
              <div className="transform origin-top-left">
                {renderPoster()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
