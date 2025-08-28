# 🚀 SuppBridge 部署指南

## 📋 项目概述

SuppBridge 是一个基于 NotionNext 的供应链解决方案平台，专门为创新营养品牌提供灵活的供应链服务，包括配方制作、原料采购、生产商匹配以及物流清关。

## 🛠️ 技术栈

- **框架**: Next.js 13
- **主题**: NotionNext Starter Theme
- **样式**: Tailwind CSS
- **内容管理**: Notion API
- **部署**: Vercel (推荐)

## 📁 项目结构

```
├── themes/starter/          # Starter 主题配置
├── conf/                   # NotionNext 配置文件
├── lib/                    # 核心库文件
├── hooks/                  # React Hooks
├── pages/                  # 页面文件
├── components/             # 自定义组件
├── styles/                 # 样式文件
├── blog.config.js          # 博客配置
├── next.config.js          # Next.js 配置
└── .env.local              # 环境变量
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
```

### 2. 配置环境变量

确保 `.env.local` 文件包含以下配置：

```env
NOTION_PAGE_ID=your_notion_page_id
NOTION_TOKEN=your_notion_integration_token
NEXT_PUBLIC_THEME=starter
NEXT_PUBLIC_LANG=en-US
```

### 3. 启动开发服务器

```bash
npm run dev
# 或使用启动脚本
./start.sh
```

## ⚙️ 主题配置

### Starter 主题自定义

编辑 `themes/starter/config.js` 文件来自定义：

- **Hero 区域**: 标题、描述、按钮
- **特性区块**: 供应链服务介绍、链接
- **关于我们**: 创始人介绍、专业背景
- **团队信息**: 创始人信息
- **联系信息**: 联系方式、表单
- **页脚**: 链接、标语

### 主要配置项

```javascript
// Hero 区域
STARTER_HERO_TITLE_1: 'Flexible Supply Chain Solutions'
STARTER_HERO_TITLE_2: 'For innovative brands seeking customized nutrition solutions...'

// 特性区块
STARTER_FEATURE_1_TITLE_1: 'Product Formulation'
STARTER_FEATURE_2_TITLE_1: 'Raw Material Sourcing'
STARTER_FEATURE_3_TITLE_1: 'Manufacturer Matching'
STARTER_FEATURE_4_TITLE_1: 'Logistics & Customs'

// 联系信息
STARTER_CONTACT_EMAIL_TEXT: 'info@suppbridge.com'
```

## 🌐 部署到 Vercel

### 1. 连接 GitHub

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 配置环境变量

### 2. 环境变量配置

在 Vercel 项目设置中添加：

- `NOTION_PAGE_ID`
- `NOTION_TOKEN`
- `NEXT_PUBLIC_THEME`
- `NEXT_PUBLIC_LANG`

### 3. 自动部署

- 每次推送到 main 分支会自动触发部署
- 支持预览部署 (Pull Request)

## 📝 内容管理

### Notion 集成

1. **创建 Notion 集成**
   - 访问 [Notion Integrations](https://www.notion.so/my-integrations)
   - 创建新的集成
   - 获取集成令牌

2. **配置数据库**
   - 在 Notion 中创建数据库
   - 添加必要的属性 (Title, Status, Date 等)
   - 分享数据库给集成

3. **更新配置**
   - 将数据库 ID 添加到 `.env.local`
   - 将集成令牌添加到环境变量

### 发布文章

1. 在 Notion 中创建新的 Post 类型页面
2. 设置状态为 "Published"
3. 内容会自动同步到网站

## 🎨 自定义样式

### Tailwind CSS

- 编辑 `tailwind.config.js` 自定义颜色和字体
- 在 `styles/globals.css` 中添加全局样式
- 使用 Tailwind 类名快速构建界面

### 主题样式

- 修改 `themes/starter/style.js` 自定义主题样式
- 调整颜色、字体、间距等设计元素

## 🔧 维护和更新

### 定期更新

```bash
# 更新依赖
npm update

# 检查安全漏洞
npm audit

# 运行测试
npm test
```

### 性能优化

- 启用图片优化
- 配置缓存策略
- 监控 Core Web Vitals

## 📞 支持

### 常见问题

1. **Notion 内容不同步**
   - 检查 NOTION_PAGE_ID 是否正确
   - 确认集成权限设置
   - 清除 Vercel 缓存

2. **部署失败**
   - 检查环境变量配置
   - 查看 Vercel 部署日志
   - 验证 Notion API 连接

3. **样式问题**
   - 清除浏览器缓存
   - 检查 Tailwind 配置
   - 验证 CSS 文件路径

### 获取帮助

- 查看 [NotionNext 文档](https://docs.tangly1024.com/)
- 访问 [GitHub Issues](https://github.com/tangly1024/NotionNext/issues)
- 加入 [Discord 社区](https://discord.gg/notionnext)

## 📄 许可证

MIT License - 详见 LICENSE 文件

---

**SuppBridge** - 为创新营养品牌提供灵活的供应链解决方案 🚀
