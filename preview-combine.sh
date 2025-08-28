#!/bin/bash

# 合并预览文件
echo "合并预览文件..."

# 创建目录结构
mkdir -p ../../Desktop/未命名文件夹/public/preview

# 创建完整的HTML文件
cat > ../../Desktop/未命名文件夹/public/preview/index.html << EOL
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SuppBridge - Preview</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
EOL

# 提取HTML内容
cat ../../Desktop/未命名文件夹/preview.html | grep -v "<style>" | grep -v "</style>" | grep -v "<!DOCTYPE" | grep -v "<html" | grep -v "</html>" | grep -v "<head>" | grep -v "</head>" | grep -v "<body>" | grep -v "</body>" >> ../../Desktop/未命名文件夹/public/preview/index.html
cat ../../Desktop/未命名文件夹/preview-part2.html | grep -v "<style>" | grep -v "</style>" >> ../../Desktop/未命名文件夹/public/preview/index.html
cat ../../Desktop/未命名文件夹/preview-part3.html | grep -v "<style>" | grep -v "</style>" >> ../../Desktop/未命名文件夹/public/preview/index.html
cat ../../Desktop/未命名文件夹/preview-part4.html | grep -v "<style>" | grep -v "</style>" >> ../../Desktop/未命名文件夹/public/preview/index.html

# 添加结束标签
echo "</body>" >> ../../Desktop/未命名文件夹/public/preview/index.html
echo "</html>" >> ../../Desktop/未命名文件夹/public/preview/index.html

# 提取CSS内容
cat ../../Desktop/未命名文件夹/preview.html | grep -A 1000 "<style>" | grep -B 1000 "</style>" | grep -v "<style>" | grep -v "</style>" > ../../Desktop/未命名文件夹/public/preview/styles.css
cat ../../Desktop/未命名文件夹/preview-part2.html | grep -A 1000 "<style>" | grep -B 1000 "</style>" | grep -v "<style>" | grep -v "</style>" >> ../../Desktop/未命名文件夹/public/preview/styles.css
cat ../../Desktop/未命名文件夹/preview-part3.html | grep -A 1000 "<style>" | grep -B 1000 "</style>" | grep -v "<style>" | grep -v "</style>" >> ../../Desktop/未命名文件夹/public/preview/styles.css
cat ../../Desktop/未命名文件夹/preview-part4.html | grep -A 1000 "<style>" | grep -B 1000 "</style>" | grep -v "<style>" | grep -v "</style>" >> ../../Desktop/未命名文件夹/public/preview/styles.css

echo "预览文件已合并到 public/preview/index.html"