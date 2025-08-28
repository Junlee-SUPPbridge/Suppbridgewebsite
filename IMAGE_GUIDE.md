# SuppBridge 图片指南

本指南将帮助您了解网站中使用的图片和图标，以及如何替换它们。

## 图片目录结构

```
public/images/
├── logo/                  # 网站Logo
├── hero/                  # 首页Hero区域图片
├── services/              # 服务相关图片
├── team/                  # 团队成员图片
├── testimonials/          # 客户见证图片
├── brands/                # 品牌合作伙伴Logo
├── blog/                  # 博客图片
└── icons/                 # 图标
    ├── social/            # 社交媒体图标
    ├── services/          # 服务图标
    └── ui/                # UI图标
```

## 图片来源

当前的图片是通过以下方式获取的：

1. **占位图**：使用placeholder.com生成的简单占位图
2. **随机图片**：使用Unsplash API获取的随机图片
3. **SVG图标**：手动创建的SVG图标

## 替换图片

### 替换Logo

1. 准备您的Logo文件（建议尺寸：200x60像素）
2. 替换以下文件：
   - `public/images/logo/logo.png`（彩色Logo）
   - `public/images/logo/logo-white.png`（白色Logo）
   - `public/images/favicon.ico`（网站图标）

### 替换Hero图片

1. 准备您的Hero背景图（建议尺寸：1920x1080像素）
2. 替换以下文件：
   - `public/images/hero/hero-bg.jpg`
   - `public/images/hero/hero-product.png`

### 替换服务图片

替换`public/images/services/`目录下的图片（建议尺寸：600x400像素）

### 替换团队成员图片

替换`public/images/team/`目录下的图片（建议尺寸：300x300像素）

### 替换客户见证图片

替换`public/images/testimonials/`目录下的图片（建议尺寸：100x100像素）

### 替换品牌合作伙伴Logo

替换`public/images/brands/`目录下的图片（建议尺寸：150x80像素）

### 替换博客图片

替换`public/images/blog/`目录下的图片（建议尺寸：800x450像素）

## 图片优化建议

为了提高网站性能，建议对图片进行优化：

1. **压缩图片**：使用TinyPNG、ImageOptim等工具
2. **使用适当的格式**：照片用JPEG/WebP，图标用SVG，需要透明度用PNG
3. **响应式图片**：使用Next.js的Image组件

## 生成图片

运行以下命令生成所有必要的图片：

```bash
./generate-images.sh
```

这将下载并创建网站所需的所有图片和图标。