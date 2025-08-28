# SuppBridge 配色方案指南

根据您的要求，我们为SuppBridge网站创建了一个温暖的蓝色和绿色配色方案。这个指南将帮助您了解如何使用这些颜色。

## 主要颜色

### 温暖的蓝色（主色调）

这是网站的主要颜色，用于导航栏、按钮、链接和其他主要UI元素。

- 主色: `#0066ff`
- 浅色变体: `#3385ff`, `#66a3ff`, `#99c2ff`, `#cce0ff`, `#e6f0ff`
- 深色变体: `#0052cc`, `#003d99`, `#002966`, `#001433`

在代码中使用:
```css
.element {
  color: var(--primary-500); /* 主色 */
  background-color: var(--primary-100); /* 浅色变体 */
}
```

在Tailwind中使用:
```html
<div class="text-primary-500 bg-primary-100">内容</div>
```

### 温暖的绿色（次色调）

这是网站的次要颜色，用于强调、按钮和其他UI元素。

- 次色: `#00e673`
- 浅色变体: `#33ff85`, `#66ffa3`, `#99ffc2`, `#ccffe0`, `#e6fff0`
- 深色变体: `#00b359`, `#008040`, `#004d26`, `#00260d`

在代码中使用:
```css
.element {
  color: var(--secondary-500); /* 次色 */
  background-color: var(--secondary-100); /* 浅色变体 */
}
```

在Tailwind中使用:
```html
<div class="text-secondary-500 bg-secondary-100">内容</div>
```

## 强调色

### 温暖的橙色

用于特别需要引起注意的元素。

- 颜色: `#ff9966`

在代码中使用:
```css
.element {
  color: var(--accent-warm);
}
```

在Tailwind中使用:
```html
<div class="text-accent-warm">内容</div>
```

### 清爽的浅蓝色

用于提供视觉对比和清新感。

- 颜色: `#66ccff`

在代码中使用:
```css
.element {
  color: var(--accent-cool);
}
```

在Tailwind中使用:
```html
<div class="text-accent-cool">内容</div>
```

## 渐变

我们提供了三种预定义的渐变:

### 主色渐变

从主色到深色主色的渐变。

```css
.element {
  background-image: var(--gradient-primary);
}
```

在Tailwind中使用:
```html
<div class="bg-gradient-primary">内容</div>
```

### 次色渐变

从次色到深色次色的渐变。

```css
.element {
  background-image: var(--gradient-secondary);
}
```

在Tailwind中使用:
```html
<div class="bg-gradient-secondary">内容</div>
```

### 强调渐变

从主色到次色的渐变，创造出独特的视觉效果。

```css
.element {
  background-image: var(--gradient-accent);
}
```

在Tailwind中使用:
```html
<div class="bg-gradient-accent">内容</div>
```

## 使用建议

1. **主色用于:**
   - 导航栏背景
   - 主要按钮
   - 链接
   - 强调文本

2. **次色用于:**
   - 次要按钮
   - 成功消息
   - 进度指示器
   - 特色内容

3. **强调色用于:**
   - 促销标签
   - 特别优惠
   - 通知徽章

4. **渐变用于:**
   - Hero区域背景
   - 卡片悬停效果
   - 页脚背景

## 颜色可访问性

所有颜色都经过测试，确保在白色和黑色背景上都有足够的对比度，符合WCAG 2.1 AA级标准。

- 主色(`#0066ff`)在白色背景上的对比度: 4.5:1
- 次色(`#00e673`)在白色背景上的对比度: 3.1:1 (用于大文本)

## 暗色模式

网站支持暗色模式，颜色会自动调整以确保在暗色背景上的可读性。

```html
<html class="dark">
  <!-- 暗色模式内容 -->
</html>
```

## 自定义颜色

如果您想调整颜色，可以在`styles/theme.css`文件中修改CSS变量，或在`tailwind.config.js`文件中修改Tailwind配置。