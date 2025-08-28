#!/bin/bash

# 合并我们的改进到NotionNext项目
echo "开始合并改进到NotionNext项目..."

# 1. 确保目录存在
mkdir -p ./components
mkdir -p ./lib/notion
mkdir -p ./lib/translation
mkdir -p ./locales
mkdir -p ./pages/blog
mkdir -p ./hooks
mkdir -p ./styles

# 2. 复制我们创建的组件
echo "复制组件..."
cp -r ./components/TableOfContents.tsx ./components/
cp -r ./components/ShareButtons.tsx ./components/
cp -r ./components/RelatedPosts.tsx ./components/

# 3. 复制Notion集成
echo "复制Notion集成..."
cp -r ./lib/notion/index.js ./lib/notion/

# 4. 复制翻译服务
echo "复制翻译服务..."
cp -r ./lib/translation/index.js ./lib/translation/
cp -r ./lib/translation/providers.js ./lib/translation/

# 5. 复制语言包
echo "复制语言包..."
cp -r ./locales/en.ts ./locales/
cp -r ./locales/zh.ts ./locales/
cp -r ./locales/es.ts ./locales/

# 6. 复制博客页面
echo "复制博客页面..."
cp -r ./pages/blog/index.tsx ./pages/blog/
cp -r ./pages/blog/[slug].tsx ./pages/blog/

# 7. 复制钩子函数
echo "复制钩子函数..."
cp -r ./hooks/useLocale.ts ./hooks/

# 8. 复制工具函数
echo "复制工具函数..."
cp -r ./lib/utils.ts ./lib/

# 9. 更新package.json
echo "更新package.json..."
if [ -f "./package.json.new" ]; then
  mv ./package.json.new ./package.json
  echo "✅ package.json已更新"
else
  echo "⚠️ package.json.new不存在，跳过更新"
fi

# 10. 确保环境变量示例文件存在
if [ ! -f "./.env.example" ]; then
  echo "创建.env.example..."
  touch ./.env.example
  echo "# Notion配置" >> ./.env.example
  echo "NOTION_PAGE_ID=your_notion_page_id_here" >> ./.env.example
  echo "NOTION_ACCESS_TOKEN=your_notion_access_token_here" >> ./.env.example
  echo "" >> ./.env.example
  echo "# 网站配置" >> ./.env.example
  echo "NEXT_PUBLIC_SITE_URL=https://your-website.com" >> ./.env.example
  echo "NEXT_PUBLIC_SITE_NAME=SuppBridge" >> ./.env.example
  echo "" >> ./.env.example
  echo "# 翻译服务配置" >> ./.env.example
  echo "TRANSLATION_SERVICE=google" >> ./.env.example
  echo "GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key_here" >> ./.env.example
  echo "✅ .env.example已创建"
fi

# 11. 更新Logo
echo "更新Logo..."
if [ -f "./update-logo.sh" ]; then
  ./update-logo.sh
  echo "✅ Logo已更新"
else
  echo "⚠️ update-logo.sh不存在，跳过Logo更新"
  echo "请运行 ./update-logo.sh 来更新Logo"
fi

# 12. 复制主题配色文件
echo "复制主题配色文件..."
if [ -f "./styles/theme.css" ]; then
  cp -r ./styles/theme.css ./styles/
  echo "✅ 主题配色文件已复制"
else
  echo "⚠️ styles/theme.css不存在，跳过复制"
fi

# 13. 更新tailwind配置
echo "更新tailwind配置..."
if [ -f "./tailwind.config.js" ]; then
  cp -r ./tailwind.config.js ./
  echo "✅ tailwind配置已更新"
else
  echo "⚠️ tailwind.config.js不存在，跳过更新"
fi

# 14. 生成网站所需图片
echo "生成网站所需图片..."
if [ -f "./generate-images.sh" ]; then
  ./generate-images.sh
  echo "✅ 图片已生成"
else
  echo "⚠️ generate-images.sh不存在，跳过图片生成"
  echo "请运行 ./generate-images.sh 来创建网站所需图片"
fi

echo "合并完成！"
echo ""
echo "接下来的步骤:"
echo "1. 运行 'npm install' 安装依赖"
echo "2. 运行 'npm run dev' 启动开发服务器"
echo "3. 检查网站功能是否正常"
echo ""
echo "祝您成功！"