# GitHub 项目上传指南

## 项目信息

- **项目名称**: guangzhou-travel-skill
- **作者**: Tom & 胡允谦
- **描述**: 广州城市旅游指南 Skill - 父子合作的首个 GitHub 项目

---

## 第一步：注册 GitHub 账号（如还没有）

1. 访问 [github.com](https://github.com)
2. 点击 "Sign up"
3. 填写邮箱、用户名、密码
4. 验证邮箱

---

## 第二步：创建新仓库

1. 登录 GitHub
2. 点击右上角 "+" → "New repository"
3. 填写信息：
   - **Repository name**: `guangzhou-travel-skill`
   - **Description**: `广州城市旅游指南 Skill - 景点、美食、历史、人文一站式服务`
   - **Visibility**: Public（公开）
   - **Initialize this repository with**: 
     - ✅ Add a README file
     - 选择 License: MIT License
4. 点击 "Create repository"

---

## 第三步：安装 Git（如还没有）

### Windows 系统

1. 下载 Git: [git-scm.com](https://git-scm.com/download/win)
2. 安装时保持默认设置
3. 安装完成后，打开 PowerShell 验证：
   ```powershell
   git --version
   ```

---

## 第四步：配置 Git

```bash
# 设置用户名
git config --global user.name "Tom"

# 设置邮箱
git config --global user.email "your-email@example.com"
```

---

## 第五步：上传项目

### 方法 1: 使用命令行（推荐）

```bash
# 进入项目目录
cd d:\xwechat_files\RAW\10-北京路项目\guangzhou-travel-skill

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 广州旅游 Skill 框架搭建"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/guangzhou-travel-skill.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 方法 2: 使用 GitHub Desktop

1. 下载 [GitHub Desktop](https://desktop.github.com/)
2. 登录 GitHub 账号
3. 点击 "Add" → "Add Existing Repository"
4. 选择项目文件夹
5. 点击 "Publish repository"

---

## 第六步：完善项目信息

### 1. 添加 Topics（标签）

在仓库主页，点击 "⚙️ Settings" → "Topics"，添加：
- `travel`
- `guangzhou`
- `skill`
- `mcp`
- `web4`
- `agent`
- `旅游`
- `广州`
- `美食`
- `历史`
- `人文`

### 2. 添加项目徽章（可选）

在 README.md 顶部添加：

```markdown
![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Author](https://img.shields.io/badge/author-Tom%20%26%20胡允谦-orange)
```

### 3. 设置 GitHub Pages（可选）

如果需要在线演示：
1. Settings → Pages
2. Source: main 分支
3. 保存后即可通过 `https://YOUR_USERNAME.github.io/guangzhou-travel-skill` 访问

---

## 第七步：邀请允谦作为协作者

1. Settings → Collaborators
2. 点击 "Add people"
3. 输入允谦的 GitHub 用户名
4. 发送邀请

---

## 第八步：创建第一个 Release

1. 点击 "Releases" → "Create a new release"
2. Tag version: `v0.1.0`
3. Release title: `实验版发布`
4. 描述：
   ```
   🎉 广州旅游 Skill 首个实验版发布！
   
   包含功能：
   - ✅ 50+ 景点数据
   - ✅ 30+ 美食推荐
   - ✅ 20+ 历史故事
   - ✅ 人文风情介绍
   - ✅ 城市故事分享
   - ✅ MCP Server 支持
   
   这是 Tom & 胡允谦的首个 GitHub 合作项目！
   ```
5. 点击 "Publish release"

---

## 后续维护

### 提交更新

```bash
# 查看更改
git status

# 添加文件
git add .

# 提交
git commit -m "更新景点数据"

# 推送
git push
```

### 创建分支开发新功能

```bash
# 创建新分支
git checkout -b feature/shenzhen-travel

# 开发...

# 提交并推送
git add .
git commit -m "添加深圳旅游数据"
git push origin feature/shenzhen-travel
```

---

## 常见问题

### Q: 推送时要求输入密码？

A: 使用 Personal Access Token (PAT)：
1. GitHub → Settings → Developer settings → Personal access tokens
2. 生成新 Token
3. 推送时使用 Token 代替密码

### Q: 如何忽略某些文件？

A: 编辑 `.gitignore` 文件，添加要忽略的文件或目录

---

**祝项目顺利！这是你和允谦的第一个 GitHub 合作项目！** 🎉
