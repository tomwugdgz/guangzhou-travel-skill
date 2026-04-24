# 广州旅游 Skill (Guangzhou Travel Skill)

> 广州城市旅游指南 - 景点、美食、历史、人文故事一站式服务 | 支持联合国6大官方语言

## 项目信息

- **项目名称**: guangzhou-travel-skill
- **版本**: v0.2.0 (多语言版)
- **作者**: Tom & 胡允谦
- **创建日期**: 2026-04-24
- **GitHub**: 待创建（第一个父子合作项目）
- **许可协议**: MIT
- **支持语言**: 🇨🇳 中文 | 🇺🇸 English | 🇫🇷 Français | 🇷🇺 Русский | 🇪🇸 Español | 🇸🇦 العربية

## 项目概述

这是一个面向 Web4 Agent 的 MCP (Model Context Protocol) Skill 项目，专注于中国广州城市的旅游信息服务。作为实验性城市 Skill，未来将扩展至全国其他城市。

### 核心功能模块

1. **旅游景点** - 广州必去景点推荐、路线规划
2. **美食指南** - 广府美食、早茶文化、地道小吃
3. **历史故事** - 广州历史沿革、重要历史事件
4. **人文风情** - 岭南文化、广府民俗、生活方式
5. **城市故事** - 广州的城市记忆、人物故事

## 🌍 多语言支持

本项目支持联合国6大官方语言：

- 🇨🇳 **中文** (zh) - 默认语言
- 🇺🇸 **英文** (en) - English
- 🇫🇷 **法文** (fr) - Français
- 🇷🇺 **俄文** (ru) - Русский
- 🇪🇸 **西班牙文** (es) - Español
- 🇸🇦 **阿拉伯文** (ar) - العربية

所有 API 接口、工具描述、数据字段均支持多语言切换。

## 技术架构

```
guangzhou-travel-skill/
├── SKILL.md                    # Skill 核心描述文件
├── README.md                   # 项目说明文档
├── package.json                # 项目配置
├── src/
│   ├── api/                    # API 接口层
│   │   ├── attractions.js      # 景点数据接口
│   │   ├── food.js             # 美食数据接口
│   │   ├── history.js          # 历史数据接口
│   │   ├── culture.js          # 人文数据接口
│   │   └── stories.js          # 故事数据接口
│   ├── mcp/                    # MCP 配置
│   │   └── mcp-config.json     # MCP Server 配置
│   ├── data/                   # 本地数据文件
│   │   ├── attractions.json    # 景点数据
│   │   ├── food.json           # 美食数据
│   │   ├── history.json        # 历史数据
│   │   ├── culture.json        # 人文数据
│   │   └── stories.json        # 故事数据
│   └── utils/                  # 工具函数
│       └── formatter.js        # 数据格式化工具
├── tests/                      # 测试文件
│   └── skill.test.js
└── docs/                       # 文档
    ├── api-docs.md             # API 文档
    └── deployment-guide.md     # 部署指南
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 MCP Server

在 `~/.workbuddy/mcp.json` 中添加：

```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["src/mcp/server.js"],
      "env": {
        "SKILL_NAME": "guangzhou-travel"
      }
    }
  }
}
```

### 3. 使用 Skill

在 Agent 对话中直接调用：
- "广州有哪些好玩的景点？"
- "推荐广州的早茶餐厅"
- "给我讲讲广州的历史"
- "广州有什么有趣的故事？"

## 数据标准

### 景点数据结构

```json
{
  "id": "attraction_001",
  "name": "广州塔",
  "category": "地标建筑",
  "description": "广州标志性建筑，高600米...",
  "location": {
    "address": "广州市海珠区阅江西路",
    "latitude": 23.1075,
    "longitude": 113.3208
  },
  "rating": 4.8,
  "bestTime": "全年",
  "tips": ["建议傍晚前往观赏夜景", "提前网上购票"]
}
```

### 美食数据结构

```json
{
  "id": "food_001",
  "name": "点都德",
  "category": "早茶",
  "description": "老字号茶楼，传统广式点心...",
  "location": "广州市荔湾区",
  "signature_dishes": ["虾饺", "烧卖", "叉烧包"],
  "price_range": "¥50-100/人",
  "rating": 4.7
}
```

## 扩展计划

### Phase 1 (当前)
- [x] 项目框架搭建
- [ ] 基础数据录入（50+ 景点、30+ 美食、20+ 故事）
- [ ] MCP Server 基础功能

### Phase 2
- [ ] API 接口完善
- [ ] Agent 对话优化
- [ ] 用户反馈收集

### Phase 3
- [ ] 扩展至深圳、北京、上海等城市
- [ ] 城市 Skill 标准化模板
- [ ] 发布至 SkillHub 及其他 Skill 商店

## 发布指南

### SkillHub 发布

1. 注册 SkillHub 开发者账号
2. 创建新 Skill 项目
3. 上传 SKILL.md 及核心文件
4. 填写元数据（名称、描述、标签）
5. 提交审核

### 其他 Skill 商店

- **OpenSkills**: 遵循 OpenSkills 规范
- **AgentSkill Marketplace**: 提交至 AgentSkill 商店
- **MCP Registry**: 注册至 MCP 官方注册表

## 贡献指南

欢迎贡献数据、代码或文档！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可协议

本项目采用 MIT 许可协议 - 详见 [LICENSE](LICENSE) 文件

## 联系方式

- **项目维护者**: Tom & 胡允谦
- **Email**: 待配置
- **GitHub Issues**: 待创建

---

**特别鸣谢**: 这是父子合作的首个 GitHub 项目，记录广州城市记忆，传承岭南文化。
