# GitHub 上传指南

本指南将帮助您将 SuppBridge 网站项目上传到 GitHub 并进行部署。

## 准备工作

1. 确保您已经安装了 Git。如果没有，请从 [git-scm.com](https://git-scm.com/) 下载并安装。
2. 确保您有一个 GitHub 账户。如果没有，请在 [github.com](https://github.com/) 注册。

## 步骤 1: 创建新的 GitHub 仓库

1. 登录您的 GitHub 账户。
2. 点击右上角的 "+" 图标，然后选择 "New repository"。
3. 为您的仓库命名，例如 "suppbridge"。
4. 添加描述（可选）。
5. 选择仓库可见性（公开或私有）。
6. 不要初始化仓库，因为我们将推送现有代码。
7. 点击 "Create repository"。

## 步骤 2: 准备本地项目

1. 打开终端或命令提示符。
2. 导航到您的项目目录：

```bash
cd /Users/jun/Desktop/未命名文件夹
```

3. 初始化 Git 仓库（如果尚未初始化）：

```bash
git init
```

4. 添加 .gitignore 文件以排除不必要的文件：

```bash
echo "node_modules\n.next\n.env.local\n.DS_Store" > .gitignore
```

## 步骤 3: 提交代码

1. 添加所有文件到暂存区：

```bash
git add .
```

2. 提交更改：

```bash
git commit -m "Initial commit"
```

## 步骤 4: 连接到 GitHub 仓库

1. 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）：

```bash
git remote add origin https://github.com/YOUR_USERNAME/suppbridge.git
```

2. 推送代码到 GitHub：

```bash
git push -u origin main
```

注意：如果您的默认分支是 "master" 而不是 "main"，请使用：

```bash
git push -u origin master
```

## 步骤 5: 验证上传

1. 刷新您的 GitHub 仓库页面。
2. 您应该能看到所有项目文件已经上传。

## 部署到 Vercel（可选）

SuppBridge 网站可以轻松部署到 Vercel：

1. 访问 [vercel.com](https://vercel.com/) 并使用 GitHub 账户登录。
2. 点击 "New Project"。
3. 从列表中选择您的 "suppbridge" 仓库。
4. 配置项目（大多数情况下可以使用默认设置）。
5. 点击 "Deploy"。

部署完成后，Vercel 将提供一个 URL，您可以通过该 URL 访问您的网站。

## 更新网站

当您对网站进行更改后，可以使用以下命令将更改推送到 GitHub：

```bash
git add .
git commit -m "描述您的更改"
git push
```

如果您已经设置了 Vercel 部署，它将自动重新部署您的网站。

## 注意事项

- 确保不要将敏感信息（如 API 密钥）直接提交到 GitHub。始终使用环境变量或 .env.local 文件（已在 .gitignore 中排除）。
- 定期备份您的代码。
- 考虑使用分支进行功能开发，而不是直接在主分支上工作。