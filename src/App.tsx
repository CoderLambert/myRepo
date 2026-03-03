import { useState } from 'react'
import {
  Zap,
  Layers,
  Palette,
  Type,
  Box,
  Sparkles,
  ArrowRight,
  Check,
  Copy,
  Moon,
  Github,
  Twitter,
  Command,
  BarChart3,
  Users,
  Activity
} from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')

  const features = [
    {
      icon: Palette,
      title: '暗黑色主题',
      description: '深邃优雅的暗黑色调，多层次表面设计，营造沉浸式视觉体验'
    },
    {
      icon: Sparkles,
      title: '发光效果',
      description: '精致的发光阴影和渐变效果，让界面更加生动立体'
    },
    {
      icon: Type,
      title: '排版系统',
      description: '基于 Inter 字体的完整排版层级，确保出色的可读性'
    },
    {
      icon: Layers,
      title: '组件丰富',
      description: '按钮、卡片、输入框、徽章等完整组件样式库'
    },
    {
      icon: Box,
      title: '响应式设计',
      description: '完美适配各种屏幕尺寸，从手机到桌面无缝切换'
    },
    {
      icon: Zap,
      title: '高性能',
      description: '基于 TailwindCSS 的原子化 CSS，极致加载性能'
    }
  ]

  const stats = [
    { label: '活跃用户', value: '10K+', icon: Users },
    { label: '组件数量', value: '50+', icon: Box },
    { label: '下载量', value: '100K+', icon: BarChart3 },
    { label: '满意度', value: '99%', icon: Activity },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      {/* 导航栏 */}
      <nav className="glass sticky top-0 z-50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center glow-primary">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gradient-primary">DarkUI</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="text-sm text-secondary hover:text-foreground transition-colors">特性</a>
              <a href="#components" className="text-sm text-secondary hover:text-foreground transition-colors">组件</a>
              <a href="#docs" className="text-sm text-secondary hover:text-foreground transition-colors">文档</a>
              <button className="btn-ghost text-sm">
                <Moon className="w-4 h-4 mr-2" />
                切换主题
              </button>
              <button className="btn-primary">
                开始使用
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* 背景光效 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              全新的暗黑色设计系统
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">打造极致</span>
              <br />
              <span className="text-gradient-primary">暗黑色 UI 体验</span>
            </h1>

            <p className="text-xl text-secondary max-w-2xl mx-auto mb-10">
              基于 TailwindCSS 和 shadcn/ui 构建的现代化设计系统，
              提供完整的组件库、设计令牌和最佳实践，
              让你的应用瞬间提升视觉品质
            </p>

            <div className="flex items-center justify-center gap-4">
              <button className="btn-primary px-8 py-3 text-base">
                立即开始
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary px-8 py-3 text-base">
                <Command className="w-5 h-5 mr-2" />
                npm install darkui
              </button>
            </div>
          </div>

          {/* 数据统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center border-gradient">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特性展示 */}
      <section id="features" className="py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              为现代应用而生
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              精心设计的每一个元素，只为提供最佳的用户体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card border-gradient hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-2 border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 组件展示 */}
      <section id="components" className="py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              组件展示
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              开箱即用的精美组件，满足各种交互需求
            </p>
          </div>

          {/* 按钮展示 */}
          <div className="card mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Box className="w-5 h-5 text-primary" />
              按钮组件
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                主要按钮
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="btn-secondary">次要按钮</button>
              <button className="btn-ghost">幽灵按钮</button>
              <button className="btn-glow">发光按钮</button>
              <button className="btn-primary" disabled>
                禁用状态
              </button>
            </div>
          </div>

          {/* 输入框展示 */}
          <div className="card mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Copy className="w-5 h-5 text-primary" />
              表单组件
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-secondary mb-2 block">邮箱地址</label>
                <input
                  type="email"
                  className="input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm text-secondary mb-2 block">搜索</label>
                <input
                  type="text"
                  className="input"
                  placeholder="输入关键词搜索..."
                />
              </div>
            </div>
          </div>

          {/* 徽章展示 */}
          <div className="card mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              徽章组件
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="badge-primary">主要徽章</span>
              <span className="badge-success">成功状态</span>
              <span className="badge-warning">警告提示</span>
              <span className="badge-error">错误信息</span>
            </div>
          </div>

          {/* 交互演示 */}
          <div className="card border-gradient">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              交互演示
            </h3>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{count}</div>
                <p className="text-sm text-secondary mb-4">当前计数</p>
                <div className="flex gap-2">
                  <button
                    className="btn-secondary px-4"
                    onClick={() => setCount(Math.max(0, count - 1))}
                  >
                    -1
                  </button>
                  <button
                    className="btn-primary"
                    onClick={() => setCount(count + 1)}
                  >
                    +1
                  </button>
                </div>
              </div>
              <div className="divider w-px h-32" />
              <div>
                <p className="text-secondary text-sm mb-3">点击按钮体验流畅的交互动画</p>
                <p className="text-tertiary text-xs">
                  每个组件都经过精心调优，提供丝滑的用户体验
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card border-gradient p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              准备好开始了吗？
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto">
              立即使用 DarkUI 构建你的下一个伟大应用，
              享受极致的开发体验和视觉品质
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="btn-primary px-8 py-3">
                查看文档
              </button>
              <button className="btn-secondary px-8 py-3">
                <Github className="w-5 h-5" />
              </button>
              <button className="btn-secondary px-8 py-3">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-secondary">© 2026 DarkUI. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">隐私政策</a>
              <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">使用条款</a>
              <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
