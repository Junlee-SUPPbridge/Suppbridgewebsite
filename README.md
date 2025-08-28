# SuppBridge - Flexible Supply Chain Solutions

基于 NotionNext 构建的专业供应链解决方案平台，专门为创新营养品牌提供灵活的供应链服务，包括配方制作、原料采购、生产商匹配以及物流清关。

## 🚀 项目特色

- **简洁大气的设计** - 现代化的 UI/UX 设计，突出专业性和可信度
- **响应式布局** - 完美适配各种设备尺寸
- **Notion 集成** - 通过 NotionNext 实现内容管理，方便随时发布文章
- **创新企业导向** - 专门针对创新企业和新品测试需求设计
- **完整功能** - 包含所有必要的页面和功能组件

## 🎯 目标受众

- 创新营养品牌
- 需要定制化配方的企业
- 寻求优质原料和制造商的公司
- 需要端到端供应链解决方案的品牌
- 初创营养品牌和创业者

## 📱 页面结构

- **Home** - 主页，展示核心价值和服务
- **Services** - 服务页面，详细介绍供应链解决方案
- **Solutions** - 解决方案页面，展示针对性的供应链服务
- **Blog** - 博客页面，分享行业洞察和成功案例
- **Contact Us** - 联系我们页面，包含联系表单和咨询功能

## 🛠️ 技术栈

- **框架**: Next.js 13
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **内容管理**: NotionNext (集成)
- **部署**: Vercel

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
```

### 2. 配置环境变量

创建 `.env.local` 文件：

```env
NOTION_TOKEN=your_notion_token
NOTION_DATABASE_ID=your_database_id
NEXT_PUBLIC_SITE_URL=your_site_url
```

### 3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

### 4. 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 📁 项目结构

```
├── components/          # 可复用组件
│   ├── Header.tsx      # 导航栏组件
│   ├── Footer.tsx      # 页脚组件
│   └── Layout.tsx      # 布局组件
├── pages/              # 页面文件
│   ├── index.tsx       # 主页
│   ├── services/       # 服务页面
│   ├── solutions/      # 解决方案页面
│   ├── blog/           # 博客页面
│   └── contact/        # 联系我们页面
├── styles/             # 样式文件
│   └── globals.css     # 全局样式
├── public/             # 静态资源
└── package.json        # 项目配置
```

## 🎨 自定义配置

### 颜色主题

在 `tailwind.config.js` 中修改颜色配置：

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... 更多颜色
  },
  secondary: {
    // ... 次要颜色
  }
}
```

### 内容更新

通过 Notion 数据库更新内容，网站会自动同步最新信息。

## 📱 响应式设计

- 移动端优先设计
- 支持平板和桌面设备
- 优化的触摸交互体验

## 🚀 部署

### Vercel 部署

1. 连接 GitHub 仓库
2. 配置环境变量
3. 自动部署

### 其他平台

支持部署到任何支持 Next.js 的平台。

## 📈 SEO 优化

- 完整的 meta 标签
- 结构化数据
- 优化的页面标题和描述
- 图片 alt 标签

## 🔧 维护和更新

- 定期更新依赖包
- 监控性能指标
- 根据用户反馈优化体验

## 📞 支持

如有问题或需要定制，请联系开发团队。

## 📄 许可证

MIT License

---

**SuppBridge** - 为创新营养品牌提供灵活的供应链解决方案
