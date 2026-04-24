# 广州旅游 Skill - 完整配置指南

## 🌟 功能概览

广州旅游 Skill 现已集成以下功能：

- 🗺️ **腾讯地图 API** - 地点搜索、地址解析、逆地址解析
- 🏨 **酒店推荐** - 广州星级酒店数据
- 🍜 **美食指南** - 广府美食、早茶、地道小吃
- 🚌 **交通信息** - 机场、火车站、地铁、公交
- 🏛️ **景点推荐** - 广州必去景点
- 📚 **历史人文** - 广州历史故事、人文风情
- 🌍 **多语言支持** - 联合国6大官方语言

---

## ⚡ 30 秒快速配置

### 步骤 1: 安装依赖

```bash
cd d:\xwechat_files\RAW\10-北京路项目\guangzhou-travel-skill
npm install
```

### 步骤 2: 配置 MCP Server

编辑你的 `~/.workbuddy/mcp.json`，添加：

```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "zh",
        "TENCENT_MAP_KEY": "7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG"
      }
    }
  }
}
```

### 步骤 3: 重启 Agent

重启你的 AI Agent 以加载新配置

### 步骤 4: 开始使用

尝试以下对话：

- "广州有哪些五星级酒店？"
- "广州塔附近有什么好吃的？"
- "给我看看广州的衣食住行概览"
- "搜索广州的学校"
- "北京路步行街的坐标是什么？"

---

## 📦 完整 MCP 工具列表

### 本地数据工具（6 个）

| 工具名 | 描述 | 参数 |
|--------|------|------|
| `get_attractions` | 获取景点信息 | category, keyword, lang |
| `get_food_guide` | 获取美食推荐 | category, keyword, lang |
| `get_history` | 获取历史故事 | category, keyword, lang |
| `get_culture` | 获取人文风情 | category, keyword, lang |
| `get_stories` | 获取城市故事 | category, keyword, lang |
| `get_supported_languages` | 获取支持的语言列表 | 无 |

### 新增工具（6 个）

| 工具名 | 描述 | 参数 |
|--------|------|------|
| `get_hotels` | 获取酒店推荐 | category, keyword |
| `get_transport` | 获取交通信息 | category, keyword |
| `get_guangzhou_map_overview` | 获取广州地图概览 | category |
| `tencent_map_search` | 腾讯地图地点搜索 | keyword, location, region, page_size |
| `tencent_map_reverse_geocoder` | 逆地址解析（坐标转地址） | location |
| `tencent_map_geocoder` | 地址解析（地址转坐标） | address, region |

---

## 🗺️ 腾讯地图 API 使用示例

### 示例 1: 搜索广州酒店

```javascript
tencent_map_search({
  keyword: "酒店",
  region: "广州市",
  page_size: 10
})
```

### 示例 2: 搜索周边餐饮

```javascript
tencent_map_search({
  keyword: "餐饮",
  location: "23.1075,113.3208",  // 广州塔坐标
  page_size: 20
})
```

### 示例 3: 地址转坐标

```javascript
tencent_map_geocoder({
  address: "广州市天河区体育西路"
})
```

### 示例 4: 坐标转地址

```javascript
tencent_map_reverse_geocoder({
  location: "23.1075,113.3208"
})
```

### 示例 5: 获取广州地图概览

```javascript
get_guangzhou_map_overview({
  category: "all"  // all/hotel/food/transport/attraction
})
```

---

## 📊 数据文件清单

| 文件 | 内容 | 数量 | 状态 |
|------|------|------|------|
| `src/data/attractions.json` | 景点数据 | 5 条 | ✅ |
| `src/data/food.json` | 美食数据 | 5 条 | ✅ |
| `src/data/history.json` | 历史数据 | 5 条 | ✅ |
| `src/data/culture.json` | 人文数据 | 5 条 | ✅ |
| `src/data/stories.json` | 故事数据 | 5 条 | ✅ |
| `src/data/hotels.json` | 酒店数据 | 5 条 | ✅ 新增 |
| `src/data/transport.json` | 交通数据 | 5 条 | ✅ 新增 |
| `src/data/attractions-multilang.json` | 多语言景点数据 | 3 条 | ✅ |

---

## 🌍 多语言配置

### 支持的语言

| 代码 | 语言 | 启动命令 |
|------|------|---------|
| zh | 🇨🇳 中文 | `npm run start:zh` |
| en | 🇺🇸 英文 | `npm run start:en` |
| fr | 🇫🇷 法文 | `npm run start:fr` |
| ru | 🇷🇺 俄文 | `npm run start:ru` |
| es | 🇪🇸 西班牙文 | `npm run start:es` |
| ar | 🇸🇦 阿拉伯文 | `npm run start:ar` |

### MCP 配置（多语言）

使用 `mcp-config-multilang.json` 配置多语言实例：

```json
{
  "mcpServers": {
    "guangzhou-travel-zh": {
      "command": "node",
      "args": ["src/mcp/server.js"],
      "env": {
        "LANG": "zh",
        "TENCENT_MAP_KEY": "7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG"
      }
    },
    "guangzhou-travel-en": {
      "command": "node",
      "args": ["src/mcp/server.js"],
      "env": {
        "LANG": "en",
        "TENCENT_MAP_KEY": "7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG"
      }
    }
  }
}
```

---

## 🧪 测试命令

### 测试多语言功能

```bash
node test-multilang.js
```

### 测试腾讯地图 API

```bash
node test-map-api.js
```

---

## 📝 项目结构

```
guangzhou-travel-skill/
├── SKILL.md                              # Skill 核心描述
├── README.md                             # 项目说明
├── package.json                          # 项目配置
├── LICENSE                               # MIT 许可
├── .gitignore                            # Git 配置
├── mcp-config.example.json               # MCP 配置示例（单语言）
├── mcp-config-multilang.json             # MCP 配置示例（多语言）
├── MULTILANG-QUICKSTART.md               # 多语言快速配置
├── test-multilang.js                     # 多语言测试
├── test-map-api.js                       # 地图 API 测试
├── TODO.md                               # 任务清单
├── docs/                                 # 文档目录
│   ├── api-docs.md                       # API 文档
│   ├── quickstart.md                     # 快速开始
│   ├── multilang-setup-guide.md          # 多语言配置指南
│   ├── map-api-guide.md                  # 地图 API 指南
│   ├── github-setup-guide.md             # GitHub 上传指南
│   └── skillhub-publish-guide.md         # SkillHub 发布指南
└── src/
    ├── i18n.js                           # 多语言配置模块
    ├── map/
    │   └── tencent-map.js                # 腾讯地图 API 封装
    ├── data/                             # 数据文件
    │   ├── attractions.json              # 景点数据
    │   ├── attractions-multilang.json    # 多语言景点数据
    │   ├── food.json                     # 美食数据
    │   ├── history.json                  # 历史数据
    │   ├── culture.json                  # 人文数据
    │   ├── stories.json                  # 故事数据
    │   ├── hotels.json                   # 酒店数据 ⭐ 新增
    │   └── transport.json                # 交通数据 ⭐ 新增
    └── mcp/
        └── server.js                     # MCP Server（12 个工具）
```

---

## 🎯 使用场景示例

### 场景 1: 规划广州行程

```
用户: "我想去广州玩 3 天，帮我规划一下行程"
Agent: 
1. 调用 get_guangzhou_map_overview({ category: "all" })
2. 获取景点、酒店、餐饮、交通信息
3. 生成 3 天行程规划
```

### 场景 2: 查找住宿

```
用户: "广州有哪些五星级酒店？"
Agent: 调用 get_hotels({ category: "五星级" })
返回: 白天鹅宾馆、花园酒店、富力丽思卡尔顿等
```

### 场景 3: 搜索周边美食

```
用户: "广州塔附近有什么好吃的？"
Agent: 
1. 获取广州塔坐标：23.1075,113.3208
2. 调用 tencent_map_search({ keyword: "餐饮", location: "23.1075,113.3208" })
返回: 周边餐厅列表
```

### 场景 4: 交通查询

```
用户: "从广州南站到白云机场怎么走？"
Agent: 
1. 调用 get_transport({ keyword: "南站" })
2. 调用 get_transport({ keyword: "机场" })
3. 提供交通方案
```

### 场景 5: 地址查询

```
用户: "北京路步行街的坐标是什么？"
Agent: 调用 tencent_map_geocoder({ address: "广州市越秀区北京路" })
返回: { lat: 23.116866, lng: 113.27046 }
```

---

## 💡 最佳实践

### 1. 优先使用本地数据
对于常用数据（酒店、交通、景点），优先使用本地 JSON 文件。

### 2. 合理使用腾讯地图 API
- 地点搜索：用于查找周边 POI
- 地址解析：用于地址转坐标
- 逆地址解析：用于坐标转地址

### 3. 控制 API 调用频率
避免短时间内大量请求，建议间隔 1-2 秒。

### 4. 错误处理
API 调用失败时，返回友好的错误信息。

---

## 🚀 下一步

### 短期
- [ ] 扩充本地酒店数据至 50+
- [ ] 扩充交通数据至 20+
- [ ] 添加更多景点数据

### 中期
- [ ] 添加路线规划功能
- [ ] 添加实时交通查询
- [ ] 集成腾讯地图小程序

### 长期
- [ ] 扩展至深圳、北京、上海等城市
- [ ] 添加用户评论和评分
- [ ] 添加预订功能

---

**配置完成！现在可以为用户提供完整的广州旅游服务！** 🎉
