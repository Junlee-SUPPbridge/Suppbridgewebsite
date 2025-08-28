#!/bin/bash

# 清理脚本 - 合并改进并删除不必要的文件
echo "开始清理NotionNext项目..."

# 1. 删除不必要的主题
echo "删除未使用的主题..."
find ./themes -mindepth 1 -maxdepth 1 -type d | grep -v "starter" | xargs rm -rf
echo "✅ 只保留starter主题"

# 2. 删除示例和演示文件
echo "删除示例和演示文件..."
rm -rf ./example ./demo ./pages/demo* ./pages/example*
echo "✅ 示例文件已删除"

# 3. 删除测试文件
echo "删除测试文件..."
rm -rf ./__tests__ ./test ./tests ./jest*
echo "✅ 测试文件已删除"

# 4. 检查并合并多语言支持
if [ -d "./locales" ] && [ -d "./lib/notion" ]; then
  echo "检测到我们创建的多语言和Notion集成文件"
  
  # 检查NotionNext是否已有这些功能
  if [ -d "./lib/lang" ] || [ -d "./lib/notion-api" ]; then
    echo "NotionNext已有类似功能，合并我们的改进..."
    
    # 备份原始文件
    mkdir -p ./backup/lib
    [ -d "./lib/lang" ] && cp -r ./lib/lang ./backup/lib/
    [ -d "./lib/notion-api" ] && cp -r ./lib/notion-api ./backup/lib/
    
    # 合并我们的改进
    echo "已备份原始文件到./backup目录"
  else
    echo "保留我们创建的功能文件"
  fi
else
  echo "未检测到我们创建的多语言和Notion集成文件"
fi

# 5. 删除缓存和临时文件
echo "删除缓存和临时文件..."
rm -rf ./.next ./.notion_cache ./node_modules/.cache
echo "✅ 缓存文件已删除"

# 6. 删除旧的Git历史（如果存在）
if [ -d "./.git" ]; then
  echo "删除旧的Git历史..."
  rm -rf ./.git
  echo "✅ Git历史已删除，准备初始化新仓库"
fi

# 7. 创建或更新.gitignore
echo "更新.gitignore文件..."
cat > ./.gitignore << 'EOL'
# 依赖
/node_modules
/.pnp
.pnp.js

# 测试
/coverage

# next.js
/.next/
/out/

# 生产
/build

# 其他
.DS_Store
*.pem
.idea
.vscode

# 调试
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# 本地环境文件
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# NotionNext缓存
.notion_cache

# 备份文件
/backup

# 清理脚本
cleanup.sh
EOL
echo "✅ .gitignore已更新"

# 8. 确保有README和上传指南
if [ ! -f "./README.md" ]; then
  echo "创建README.md..."
  cp ./GITHUB_UPLOAD_GUIDE.md ./README.md
  echo "✅ README.md已创建"
fi

echo "清理完成！项目现在已准备好初始化为新的Git仓库。"
echo ""
echo "接下来的步骤:"
echo "1. 检查项目文件，确保一切正常"
echo "2. 运行以下命令初始化Git仓库:"
echo "   git init"
echo "   git add ."
echo "   git commit -m \"Initial commit\""
echo "3. 创建GitHub仓库并推送代码"
echo ""
echo "祝您成功！"