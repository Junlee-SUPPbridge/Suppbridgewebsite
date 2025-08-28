#!/bin/bash

# 更新Logo脚本
echo "开始更新Logo和配色方案..."

# 创建图片目录（如果不存在）
mkdir -p ./public/images/logo

# 复制Logo
echo "复制Logo文件..."
cp /Users/jun/Desktop/supplogo.jpeg ./public/images/logo/original-logo.jpeg

# 创建不同格式和尺寸的Logo
echo "创建不同格式的Logo..."

# 检查是否安装了ImageMagick
if command -v convert &> /dev/null; then
    echo "使用ImageMagick处理图片..."
    
    # 创建标准Logo
    convert /Users/jun/Desktop/supplogo.jpeg -resize 200x60 ./public/images/logo/logo.png
    
    # 创建白色Logo（用于深色背景）
    convert /Users/jun/Desktop/supplogo.jpeg -resize 200x60 -modulate 100,0,100 -brightness-contrast 100,0 ./public/images/logo/logo-white.png
    
    # 创建favicon
    convert /Users/jun/Desktop/supplogo.jpeg -resize 32x32 ./public/images/favicon.ico
    
    echo "Logo处理完成！"
else
    echo "未检测到ImageMagick，仅复制原始Logo..."
    cp /Users/jun/Desktop/supplogo.jpeg ./public/images/logo/logo.png
    cp /Users/jun/Desktop/supplogo.jpeg ./public/images/favicon.ico
    echo "请安装ImageMagick以获得更好的Logo处理效果。"
fi

echo "Logo更新完成！"