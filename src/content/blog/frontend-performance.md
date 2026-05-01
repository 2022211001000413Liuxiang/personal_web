---
title: "前端性能优化完全指南"
description: "从加载性能、渲染性能、交互性能三个维度全面提升网页性能的方法与实践。"
date: 2026-04-01
category: "前端"
tags: ["性能优化", "React"]
featured: true
---

## 为什么要性能优化

用户对网页加载速度的期望越来越高。研究表明，如果页面加载超过 3 秒，超过 50% 的用户会选择离开。

## 加载性能优化

### 代码分割

使用动态导入实现按需加载：

```javascript
const Component = lazy(() => import('./Component'));
```

### 缓存策略

合理设置 Cache-Control：

```
Cache-Control: max-age=31536000, immutable
```

### 资源压缩

启用 Gzip/Brotli 压缩，减小资源体积。

## 渲染性能优化

### 避免重排和重绘

```javascript
// 避免
element.style.width = '100px';
element.style.height = '100px';

// 推荐：合并 DOM 操作
element.style.cssText = 'width: 100px; height: 100px;';
```

### 使用 CSS 硬件加速

```css
.transform {
  transform: translateZ(0);
  will-change: transform;
}
```

## 交互性能优化

### 事件防抖

对于频繁触发的事件（如 resize、scroll），使用防抖：

```javascript
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
```

## 性能监控

使用 Lighthouse 和 Web Vitals 持续监控性能：

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

性能优化是一个持续的过程，需要不断地测量、分析和改进。
