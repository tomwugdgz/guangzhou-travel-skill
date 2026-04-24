# 快速开始指南

## 5 分钟快速体验

### 1. 安装依赖

```bash
cd guangzhou-travel-skill
npm install
```

### 2. 配置 MCP Server

在你的 `~/.workbuddy/mcp.json` 中添加：

```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "SKILL_NAME": "guangzhou-travel"
      }
    }
  }
}
```

### 3. 重启 Agent

重启你的 AI Agent 以加载新的 MCP Server

### 4. 开始对话

尝试以下对话：

- "广州有哪些好玩的景点？"
- "推荐广州的早茶餐厅"
- "给我讲讲广州的历史"
- "广州有什么有趣的故事？"
- "介绍一下广州的饮茶文化"

---

## 测试数据

项目已包含示例数据：

- ✅ 5 个景点（广州塔、陈家祠、白云山、南越王博物院、珠江夜游）
- ✅ 5 个美食推荐（点都德、陶陶居、银记肠粉、宝华面店、广州酒家）
- ✅ 5 个历史故事（建城、海上丝绸之路、鸦片战争、辛亥革命、黄埔军校）
- ✅ 5 个人文风情（饮茶文化、粤剧、西关大屋、广府庙会、粤语文化）
- ✅ 5 个城市故事（五羊传说、十三行、孙中山、老西关、广交会）

---

## 扩展数据

要添加更多数据，编辑 `src/data/` 目录下的 JSON 文件：

- `attractions.json` - 景点数据
- `food.json` - 美食数据
- `history.json` - 历史数据
- `culture.json` - 人文数据
- `stories.json` - 故事数据

### 添加景点示例

```json
{
  "id": "attraction_006",
  "name": "新景点名称",
  "category": "分类",
  "description": "描述...",
  "location": {
    "address": "地址",
    "district": "区",
    "latitude": 23.0,
    "longitude": 113.0
  },
  "rating": 4.5,
  "ticket_price": "¥价格",
  "opening_hours": "营业时间",
  "best_time": "最佳时间",
  "visit_duration": "建议游玩时长",
  "tips": ["提示1", "提示2"],
  "updated_at": "2026-04-24"
}
```

---

## 开发模式

```bash
# 启动开发模式（自动重启）
npm run dev

# 运行测试
npm test
```

---

## 下一步

- [ ] 完善更多数据（目标：50+ 景点、30+ 美食、20+ 故事）
- [ ] 上传至 GitHub
- [ ] 发布至 SkillHub
- [ ] 扩展至其他城市

---

**祝你使用愉快！如有问题，欢迎提 Issue！**
