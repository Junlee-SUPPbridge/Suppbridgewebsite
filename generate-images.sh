#!/bin/bash

# 图片生成和下载脚本
echo "开始创建网站所需图片..."

# 创建图片目录
mkdir -p ./public/images
mkdir -p ./public/images/logo
mkdir -p ./public/images/hero
mkdir -p ./public/images/services
mkdir -p ./public/images/team
mkdir -p ./public/images/testimonials
mkdir -p ./public/images/brands
mkdir -p ./public/images/blog
mkdir -p ./public/images/icons

# 下载免费图片
echo "下载免费图片资源..."

# 使用Unsplash API下载图片
# 注意：这里使用curl命令下载图片，如果您的系统没有curl，请先安装

# Logo占位图
echo "创建Logo占位图..."
curl -o ./public/images/logo/logo.png "https://via.placeholder.com/200x60?text=SuppBridge"
curl -o ./public/images/logo/logo-white.png "https://via.placeholder.com/200x60/0066cc/ffffff?text=SuppBridge"
curl -o ./public/images/favicon.ico "https://via.placeholder.com/32x32/0066cc/ffffff?text=SB"

# Hero背景图
echo "下载Hero背景图..."
curl -o ./public/images/hero/hero-bg.jpg "https://source.unsplash.com/random/1920x1080/?nutrition,supplement"
curl -o ./public/images/hero/hero-product.png "https://source.unsplash.com/random/600x800/?supplement,bottle"

# 服务图标
echo "下载服务相关图片..."
curl -o ./public/images/services/brand-development.jpg "https://source.unsplash.com/random/600x400/?branding"
curl -o ./public/images/services/distribution.jpg "https://source.unsplash.com/random/600x400/?distribution,logistics"
curl -o ./public/images/services/marketing.jpg "https://source.unsplash.com/random/600x400/?marketing,digital"
curl -o ./public/images/services/product-development.jpg "https://source.unsplash.com/random/600x400/?laboratory,research"

# 团队成员图片
echo "下载团队成员图片..."
curl -o ./public/images/team/ceo.jpg "https://source.unsplash.com/random/300x300/?executive,man"
curl -o ./public/images/team/cmo.jpg "https://source.unsplash.com/random/300x300/?marketing,woman"
curl -o ./public/images/team/cto.jpg "https://source.unsplash.com/random/300x300/?technology,man"
curl -o ./public/images/team/manager.jpg "https://source.unsplash.com/random/300x300/?manager,woman"

# 客户见证图片
echo "下载客户见证图片..."
curl -o ./public/images/testimonials/client1.jpg "https://source.unsplash.com/random/100x100/?portrait,man"
curl -o ./public/images/testimonials/client2.jpg "https://source.unsplash.com/random/100x100/?portrait,woman"
curl -o ./public/images/testimonials/client3.jpg "https://source.unsplash.com/random/100x100/?portrait,business"

# 品牌合作伙伴Logo
echo "下载品牌合作伙伴Logo..."
curl -o ./public/images/brands/brand1.png "https://via.placeholder.com/150x80?text=Brand+1"
curl -o ./public/images/brands/brand2.png "https://via.placeholder.com/150x80?text=Brand+2"
curl -o ./public/images/brands/brand3.png "https://via.placeholder.com/150x80?text=Brand+3"
curl -o ./public/images/brands/brand4.png "https://via.placeholder.com/150x80?text=Brand+4"
curl -o ./public/images/brands/brand5.png "https://via.placeholder.com/150x80?text=Brand+5"

# 博客图片
echo "下载博客图片..."
curl -o ./public/images/blog/post1.jpg "https://source.unsplash.com/random/800x450/?nutrition,health"
curl -o ./public/images/blog/post2.jpg "https://source.unsplash.com/random/800x450/?supplement,fitness"
curl -o ./public/images/blog/post3.jpg "https://source.unsplash.com/random/800x450/?wellness,lifestyle"
curl -o ./public/images/blog/post4.jpg "https://source.unsplash.com/random/800x450/?protein,workout"
curl -o ./public/images/blog/post5.jpg "https://source.unsplash.com/random/800x450/?vitamin,natural"
curl -o ./public/images/blog/post6.jpg "https://source.unsplash.com/random/800x450/?organic,nutrition"

# 默认图片
echo "下载默认图片..."
curl -o ./public/images/default-avatar.png "https://via.placeholder.com/150x150?text=User"
curl -o ./public/images/default-cover.jpg "https://source.unsplash.com/random/1200x630/?abstract,blue"
curl -o ./public/images/about-us.jpg "https://source.unsplash.com/random/1200x800/?team,office"
curl -o ./public/images/contact-us.jpg "https://source.unsplash.com/random/1200x800/?office,modern"

# 图标（SVG格式）
echo "创建SVG图标..."

# 创建社交媒体图标
mkdir -p ./public/images/icons/social

# Facebook图标
cat > ./public/images/icons/social/facebook.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
EOL

# Twitter图标
cat > ./public/images/icons/social/twitter.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
EOL

# Instagram图标
cat > ./public/images/icons/social/instagram.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
EOL

# LinkedIn图标
cat > ./public/images/icons/social/linkedin.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
EOL

# 服务图标
mkdir -p ./public/images/icons/services

# 品牌开发图标
cat > ./public/images/icons/services/brand.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
EOL

# 分销网络图标
cat > ./public/images/icons/services/distribution.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4a2 2 0 0 0-2 2v11h2a3 3 0 0 0 3 3 3 3 0 0 0 3-3h6a3 3 0 0 0 3 3 3 3 0 0 0 3-3h2v-5l-3-4h-3V4m-7 2l4 4-4 4v-3H4V9h6m7 .5h2.5l1.96 2.5H17m-11 6A1.5 1.5 0 0 1 7.5 17 1.5 1.5 0 0 1 6 18.5 1.5 1.5 0 0 1 4.5 17 1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/></svg>
EOL

# 营销策略图标
cat > ./public/images/icons/services/marketing.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4l-5 4m9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4z"/></svg>
EOL

# 产品开发图标
cat > ./public/images/icons/services/product.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m1 3v10h-2V7h2z"/></svg>
EOL

# UI图标
mkdir -p ./public/images/icons/ui

# 电话图标
cat > ./public/images/icons/ui/phone.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
EOL

# 邮件图标
cat > ./public/images/icons/ui/email.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
EOL

# 位置图标
cat > ./public/images/icons/ui/location.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
EOL

# 时钟图标
cat > ./public/images/icons/ui/clock.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
EOL

echo "图片和图标创建完成！"
echo ""
echo "注意：这些图片是从Unsplash随机获取的占位图，用于开发和测试。"
echo "在生产环境中，您应该替换为您自己的品牌图片。"