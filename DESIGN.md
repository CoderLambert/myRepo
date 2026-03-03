# DarkUI - 暗黑色时尚设计系统

基于 TailwindCSS 和 shadcn/ui 构建的现代化暗黑色 UI 设计系统。

## 🎨 设计理念

- **深邃优雅** - 多层次暗黑色调营造沉浸式体验
- **微光点缀** - 精致的发光效果和渐变
- **现代极简** - 干净利落，注重留白和层次
- **科技感** - 融入现代科技元素

## 📦 安装

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 🎯 颜色系统

### 基础颜色

| Token | HSL 值 | 预览 | 用途 |
|-------|--------|------|------|
| `--background` | `240 10% 4%` | 🌑 | 主背景色 |
| `--foreground` | `0 0% 98%` | ⬜ | 前景文字 |
| `--surface-1` | `240 8% 7%` | 🌑 | 一级卡片 |
| `--surface-2` | `240 6% 11%` | 🌑 | 二级卡片 |
| `--surface-3` | `240 5% 16%` | 🌑 | 三级元素 |

### 主色（紫色系）

| Token | HSL 值 | 用途 |
|-------|--------|------|
| `--primary-500` | `255 87% 70%` | 主强调色 |
| `--primary-600` | `258 87% 61%` | 悬停状态 |
| `--primary-700` | `262 71% 53%` | 按下状态 |

### 功能色

| Token | HSL 值 | 用途 |
|-------|--------|------|
| `--success` | `152 76% 47%` | 成功状态 🟢 |
| `--warning` | `38 92% 56%` | 警告提示 🟡 |
| `--error` | `350 86% 61%` | 错误信息 🔴 |
| `--info` | `199 89% 54%` | 信息提示 🔵 |

## 🔤 排版系统

```css
/* 字体家族 */
--font-sans: 'Inter', 'SF Pro Display', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* 字体大小 */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

## 🧩 组件

### 按钮

```jsx
// 主要按钮
<button className="btn-primary">
  主要按钮
</button>

// 次要按钮
<button className="btn-secondary">
  次要按钮
</button>

// 幽灵按钮
<button className="btn-ghost">
  幽灵按钮
</button>

// 发光按钮
<button className="btn-glow">
  发光按钮
</button>
```

### 卡片

```jsx
<div className="card">
  <h3>卡片标题</h3>
  <p>卡片内容</p>
</div>

// 带发光效果
<div className="card card-glow">
  <h3>发光卡片</h3>
</div>
```

### 输入框

```jsx
<input
  type="email"
  className="input"
  placeholder="name@example.com"
/>
```

### 徽章

```jsx
<span className="badge-primary">主要</span>
<span className="badge-success">成功</span>
<span className="badge-warning">警告</span>
<span className="badge-error">错误</span>
```

## 🎭 特效

### 发光效果

```css
.glow-primary {
  box-shadow: 0 0 20px -5px hsl(var(--glow-primary) / 0.5);
}
```

### 渐变背景

```css
.gradient-bg {
  background:
    radial-gradient(circle at 50% 0%,
      hsl(var(--primary) / 0.15) 0%,
      transparent 50%
    ),
    linear-gradient(180deg,
      hsl(var(--background)) 0%,
      hsl(var(--surface-1)) 100%
    );
}
```

### 玻璃态

```css
.glass {
  @apply bg-surface-2/60 backdrop-blur-xl;
  border: 1px solid hsl(var(--border) / 0.5);
}
```

## 📐 间距系统

基于 4px 网格：

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

## 🎬 动画

### 淡入

```css
.fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
```

### 滑入

```css
.slide-in-left {
  animation: slide-in-left 0.3s ease-out forwards;
}
```

### 缩放

```css
.scale-in {
  animation: scale-in 0.2s ease-out forwards;
}
```

## 📱 响应式断点

| 断点 | 最小宽度 | 设备 |
|------|----------|------|
| `sm` | 640px | 小屏手机 |
| `md` | 768px | 平板 |
| `lg` | 1024px | 笔记本 |
| `xl` | 1280px | 桌面 |
| `2xl` | 1536px | 大屏 |

## ♿ 可访问性

- 所有文本对比度符合 WCAG AA 标准（至少 4.5:1）
- 焦点指示器清晰可见
- 最小点击区域 44x44px
- 支持键盘导航

## 🛠 工具函数

```ts
// 合并类名
import { cn } from '@/lib/utils'

cn('btn', 'btn-primary', className)
```

## 📄 许可证

MIT License
