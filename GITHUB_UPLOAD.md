# 🚀 GitHub 上传指南

## 📋 需要上传的文件

### ✅ **必须上传的核心文件**

```
├── pages/                    # 页面文件
├── components/               # 组件文件
├── styles/                   # 样式文件
├── themes/                   # 主题文件
├── lib/                      # 核心库文件
├── hooks/                    # React Hooks
├── conf/                     # 配置文件
├── public/                   # 静态资源
├── package.json              # 项目依赖配置
├── next.config.js            # Next.js 配置
├── tailwind.config.js        # Tailwind CSS 配置
├── postcss.config.js         # PostCSS 配置
├── tsconfig.json             # TypeScript 配置
├── blog.config.js            # NotionNext 博客配置
├── .gitignore                # Git 忽略文件
├── README.md                 # 项目说明
└── DEPLOYMENT.md             # 部署指南
```

### ❌ **不需要上传的文件**

```
├── node_modules/             # 依赖包（npm install 会重新生成）
├── .next/                    # 构建输出（会自动生成）
├── .env.local                # 环境变量（包含敏感信息）
├── .DS_Store                 # macOS 系统文件
├── yarn.lock                 # Yarn 锁定文件（可选）
└── 其他临时文件和缓存
```

## 🚀 上传步骤

### 1. 初始化 Git 仓库

```bash
# 初始化 Git 仓库
git init

# 添加远程仓库
git remote add origin https://github.com/your-username/your-repo-name.git
```

### 2. 添加文件到暂存区

```bash
# 添加所有必要文件
git add .

# 或者选择性添加
git add pages/ components/ styles/ themes/ lib/ hooks/ conf/ public/
git add package.json next.config.js tailwind.config.js postcss.config.js
git add tsconfig.json blog.config.js .gitignore README.md DEPLOYMENT.md
```

### 3. 提交更改

```bash
# 首次提交
git commit -m "Initial commit: SuppBridge supply chain solutions website"

# 后续提交
git commit -m "Update: [描述你的更改]"
```

### 4. 推送到 GitHub

```bash
# 推送到主分支
git push -u origin main

# 或者如果你使用 master 分支
git push -u origin master
```

## ⚠️ 重要提醒

### **环境变量文件**
- **不要上传** `.env.local` 文件
- 在 GitHub 仓库的 Settings > Secrets 中添加环境变量
- 在 Vercel 部署时配置环境变量

### **依赖包**
- **不要上传** `node_modules/` 目录
- 其他开发者可以通过 `npm install` 安装依赖

### **构建文件**
- **不要上传** `.next/` 等构建输出目录
- 这些文件会在部署时自动生成

## 🔧 部署后配置

### Vercel 环境变量
在 Vercel 项目设置中添加：
```
NOTION_PAGE_ID=your_notion_page_id
NOTION_TOKEN=your_notion_integration_token
NEXT_PUBLIC_THEME=starter
NEXT_PUBLIC_LANG=en-US
```

### 域名设置
- 在 Vercel 中配置自定义域名
- 更新 `blog.config.js` 中的 `LINK` 配置

## 📝 文件说明

### **核心配置文件**
- `blog.config.js` - NotionNext 博客配置
- `themes/starter/config.js` - Starter 主题配置
- `next.config.js` - Next.js 框架配置
- `tailwind.config.js` - Tailwind CSS 样式配置

### **页面文件**
- `pages/index.tsx` - 主页
- `pages/services/index.tsx` - 服务页面
- `pages/solutions/index.tsx` - 解决方案页面
- `pages/blog/index.tsx` - 博客页面
- `pages/contact/index.tsx` - 联系我们页面

### **组件文件**
- `components/Header.tsx` - 导航栏组件
- `components/Footer.tsx` - 页脚组件
- `components/Layout.tsx` - 布局组件

## 🎯 上传检查清单

- [ ] 创建 `.gitignore` 文件
- [ ] 检查没有敏感信息（如 API 密钥）
- [ ] 确保所有必要文件都已添加
- [ ] 测试本地构建是否正常
- [ ] 推送到 GitHub
- [ ] 在 Vercel 中导入项目
- [ ] 配置环境变量
- [ ] 部署成功

---

**注意**: 这个指南确保您只上传必要的源代码文件，保护敏感信息，并保持仓库的整洁。
