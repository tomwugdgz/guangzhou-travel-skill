# 多语言 MCP Server - 快速配置指南

## 🌍 支持的语言

| 代码 | 语言 | 示例 |
|------|------|------|
| zh | 🇨🇳 中文 | 广州有哪些景点？ |
| en | 🇺🇸 英文 | What are the attractions? |
| fr | 🇫🇷 法文 | Quelles sont les attractions? |
| ru | 🇷🇺 俄文 | Какие есть достопримечательности? |
| es | 🇪🇸 西班牙文 | ¿Cuáles son las atracciones? |
| ar | 🇸🇦 阿拉伯文 | ما هي مناطق الجذب؟ |

---

## ⚡ 30 秒快速配置

### 步骤 1: 安装依赖

```bash
cd d:\xwechat_files\RAW\10-北京路项目\guangzhou-travel-skill
npm install
```

### 步骤 2: 配置 MCP Server

编辑你的 `~/.workbuddy/mcp.json`，添加：

#### 中文版（默认）
```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "zh"
      }
    }
  }
}
```

#### 英文版
```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "en"
      }
    }
  }
}
```

**只需修改 `LANG` 的值即可切换语言！**

### 步骤 3: 重启 Agent

重启你的 AI Agent 以加载新配置

### 步骤 4: 开始使用

- 中文: "广州有哪些好玩的景点？"
- English: "What are the must-visit attractions in Guangzhou?"
- Français: "Quelles sont les attractions incontournables à Guangzhou?"

---

## 🔧 测试多语言功能

```bash
# 运行测试脚本
node test-multilang.js
```

预期输出：
```
✅ 所有测试完成！
支持的语言: zh, en, fr, ru, es, ar
```

---

## 📝 启动不同语言版本

```bash
npm run start:zh   # 中文
npm run start:en   # 英文
npm run start:fr   # 法文
npm run start:ru   # 俄文
npm run start:es   # 西班牙文
npm run start:ar   # 阿拉伯文
```

---

## 🎯 API 接口（多语言）

所有 API 都支持多语言，自动根据 `LANG` 环境变量返回对应语言的工具描述和提示。

### 5 个核心 API
1. `get_attractions` - 获取景点信息
2. `get_food_guide` - 获取美食推荐
3. `get_history` - 获取历史故事
4. `get_culture` - 获取人文风情
5. `get_stories` - 获取城市故事

### 1 个辅助 API
6. `get_supported_languages` - 获取支持的语言列表

---

## 💡 提示

- **默认语言**: 中文 (zh)
- **切换语言**: 修改 `LANG` 环境变量
- **回退机制**: 不支持的语言自动回退到中文
- **数据文件**: 支持多语言字段（见 `attractions-multilang.json`）

---

**配置完成！现在可以为全球用户提供服务！** 🌍✨
