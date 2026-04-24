# SkillHub 及其他 Skill 商店发布指南

## 一、SkillHub 发布

### 1. 注册开发者账号

1. 访问 [SkillHub 官网](https://skillhub.ai)（假设地址）
2. 点击 "Sign Up" 注册开发者账号
3. 验证邮箱
4. 完善个人资料

### 2. 创建 Skill 项目

1. 登录后进入 Dashboard
2. 点击 "Create New Skill"
3. 填写信息：
   - **Skill Name**: `guangzhou-travel`
   - **Display Name**: `广州旅游指南`
   - **Description**: `广州城市旅游指南 - 景点、美食、历史、人文一站式服务`
   - **Category**: Travel & Lifestyle
   - **Version**: `0.1.0`
   - **License**: MIT

### 3. 上传文件

需要上传的核心文件：
- `SKILL.md` - Skill 核心描述
- `src/data/*.json` - 数据文件
- `src/mcp/server.js` - MCP Server
- `package.json` - 项目配置
- `README.md` - 使用说明

### 4. 配置元数据

```yaml
name: guangzhou-travel
display_name: 广州旅游指南
version: 0.1.0
description: 广州城市旅游指南 - 景点、美食、历史、人文一站式服务
author: Tom & 胡允谦
category: travel
tags:
  - 广州
  - 旅游
  - 美食
  - 历史
  - 人文
  - guangzhou
  - travel
  - food
  - culture
language: zh-CN
license: MIT
```

### 5. 提交审核

1. 填写 Skill 详细信息
2. 上传文件
3. 点击 "Submit for Review"
4. 等待审核（通常 1-3 个工作日）

### 6. 发布后维护

- 定期更新数据
- 回应用户反馈
- 发布新版本

---

## 二、OpenSkills 发布

### 1. 访问 OpenSkills

访问 [OpenSkills Registry](https://openskills.dev)

### 2. 提交 Skill

1. Fork OpenSkills Registry 仓库
2. 在 `skills/` 目录下创建 `guangzhou-travel/` 目录
3. 添加 `SKILL.md` 和核心文件
4. 提交 Pull Request

### 3. PR 模板

```markdown
## Skill Submission

**Name**: guangzhou-travel  
**Display Name**: 广州旅游指南  
**Version**: 0.1.0  
**Category**: Travel  
**Description**: 广州城市旅游指南 - 景点、美食、历史、人文一站式服务  
**Author**: Tom & 胡允谦  
**License**: MIT  

### Features
- 50+ 景点推荐
- 30+ 美食指南
- 20+ 历史故事
- 人文风情介绍
- 城市故事分享

### MCP Support
✅ Yes, includes MCP Server configuration
```

---

## 三、AgentSkill Marketplace 发布

### 1. 注册开发者账号

访问 AgentSkill Marketplace 注册页面

### 2. 创建 Skill

1. 登录 Dashboard
2. 点击 "New Skill"
3. 填写信息（同 SkillHub）

### 3. 上传包

打包项目文件：
```bash
# 创建压缩包
tar -czf guangzhou-travel-skill-v0.1.0.tar.gz \
  SKILL.md \
  README.md \
  package.json \
  src/
```

### 4. 提交审核

上传压缩包，等待审核

---

## 四、MCP Registry 注册

### 1. 访问 MCP Registry

访问 [MCP Official Registry](https://modelcontextprotocol.io/registry)

### 2. 注册 Server

1. 点击 "Register Server"
2. 填写信息：
   - **Server Name**: `guangzhou-travel`
   - **Description**: 广州旅游 MCP Server
   - **Repository URL**: GitHub 仓库地址
   - **Package**: npm 包名（如发布到 npm）

### 3. 发布到 npm（可选）

```bash
# 登录 npm
npm login

# 发布包
npm publish
```

---

## 五、多平台发布清单

| 平台 | 状态 | 备注 |
|------|------|------|
| SkillHub | ⏳ 待发布 | 主要发布平台 |
| OpenSkills | ⏳ 待发布 | 开源 Skill 注册表 |
| AgentSkill Marketplace | ⏳ 待发布 | Agent 技能市场 |
| MCP Registry | ⏳ 待发布 | MCP 官方注册表 |
| npm | ⏳ 可选 | Node.js 包管理 |
| GitHub | ✅ 准备中 | 代码托管 |

---

## 六、发布后推广

### 1. 社交媒体

- Twitter/X: 发布项目介绍推文
- 微信公众号: 撰写项目介绍文章
- 知乎: 回答相关问题并提及项目

### 2. 社区推广

- V2EX: 发布项目介绍帖
- 掘金: 撰写技术文章
- GitHub Discussions: 参与讨论

### 3. 文档完善

- 添加使用示例
- 撰写教程
- 录制演示视频

---

## 七、版本更新流程

### 1. 更新数据

```bash
# 修改数据文件
# 更新版本号（package.json、SKILL.md）
```

### 2. 提交更新

```bash
git add .
git commit -m "更新景点数据至 v0.2.0"
git push
```

### 3. 创建 Release

```bash
git tag v0.2.0
git push origin v0.2.0
```

### 4. 同步到各平台

- SkillHub: 上传新版本
- OpenSkills: 更新 PR
- npm: `npm publish`

---

## 八、注意事项

### 1. 版权

- 确保所有数据为原创或已获授权
- 图片使用免费图库或自己拍摄
- 遵守各平台内容政策

### 2. 隐私

- 不包含个人隐私信息
- 商家信息为公开信息
- 遵守数据保护法规

### 3. 维护

- 定期检查数据准确性
- 及时回应用户反馈
- 保持活跃维护状态

---

**祝发布顺利！期待广州旅游 Skill 帮助更多人了解广州！** 🎉
