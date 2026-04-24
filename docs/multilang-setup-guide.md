# 多语言 MCP Server 配置指南

## 概述

广州旅游 Skill 现已支持 **联合国6大官方语言**：

| 语言代码 | 语言名称 | 语言本地名 |
|---------|---------|-----------|
| zh | 中文 | 中文 |
| en | 英文 | English |
| fr | 法文 | Français |
| ru | 俄文 | Русский |
| es | 西班牙文 | Español |
| ar | 阿拉伯文 | العربية |

---

## 配置方式

### 方式 1: 单语言配置（推荐）

如果你只需要一种语言，在 `~/.workbuddy/mcp.json` 中添加：

#### 中文版
```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "zh",
        "SKILL_NAME": "guangzhou-travel"
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
        "LANG": "en",
        "SKILL_NAME": "guangzhou-travel"
      }
    }
  }
}
```

#### 法文版
```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "fr",
        "SKILL_NAME": "guangzhou-travel"
      }
    }
  }
}
```

#### 俄文版
```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "ru",
        "SKILL_NAME": "guangzhou-travel"
      }
    }
  }
}
```

#### 西班牙文版
```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "es",
        "SKILL_NAME": "guangzhou-travel"
      }
    }
  }
}
```

#### 阿拉伯文版
```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "ar",
        "SKILL_NAME": "guangzhou-travel"
      }
    }
  }
}
```

---

### 方式 2: 多语言同时配置

如果你需要同时支持多种语言，可以配置多个实例：

```json
{
  "mcpServers": {
    "guangzhou-travel-zh": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "zh"
      }
    },
    "guangzhou-travel-en": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "en"
      }
    },
    "guangzhou-travel-fr": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "fr"
      }
    }
  }
}
```

---

## 使用示例

### 中文对话
```
用户: 广州有哪些好玩的景点？
Agent: [调用 get_attractions 工具，返回中文结果]
```

### 英文对话
```
User: What are the must-visit attractions in Guangzhou?
Agent: [Calls get_attractions tool, returns English results]
```

### 法文对话
```
Utilisateur: Quelles sont les attractions à visiter à Guangzhou?
Agent: [Appelle l'outil get_attractions, retourne des résultats en français]
```

---

## API 接口（多语言）

所有 5 个核心 API 都支持多语言参数：

### 1. get_attractions - 获取景点信息
- **中文**: 获取广州景点列表及详情
- **English**: Get Guangzhou attractions list and details
- **Français**: Obtenir la liste des attractions de Guangzhou
- **Русский**: Получить список достопримечательностей Гуанчжоу
- **Español**: Obtener lista de atracciones de Guangzhou
- **العربية**: الحصول على قائمة مناطق الجذب في قوانغتشو

### 2. get_food_guide - 获取美食推荐
- **中文**: 获取广州美食推荐
- **English**: Get Guangzhou food recommendations
- **Français**: Obtenir des recommandations culinaires de Guangzhou
- **Русский**: Получить рекомендации по еде в Гуанчжоу
- **Español**: Obtener recomendaciones de comida de Guangzhou
- **العربية**: الحصول على توصيات الطعام في قوانغتشو

### 3. get_history - 获取历史故事
- **中文**: 获取广州历史故事
- **English**: Get Guangzhou historical stories
- **Français**: Obtenir des histoires historiques de Guangzhou
- **Русский**: Получить исторические рассказы о Гуанчжоу
- **Español**: Obtener historias históricas de Guangzhou
- **العربية**: الحصول على القصص التاريخية لقوانغتشو

### 4. get_culture - 获取人文风情
- **中文**: 获取广州人文风情
- **English**: Get Guangzhou cultural information
- **Français**: Obtenir des informations culturelles de Guangzhou
- **Русский**: Получить культурную информацию о Гуанчжоу
- **Español**: Obtener información cultural de Guangzhou
- **العربية**: الحصول على معلومات ثقافية عن قوانغتشو

### 5. get_stories - 获取城市故事
- **中文**: 获取广州城市故事
- **English**: Get Guangzhou city stories
- **Français**: Obtenir des histoires de la ville de Guangzhou
- **Русский**: Получить истории города Гуанчжоу
- **Español**: Obtener historias de la ciudad de Guangzhou
- **العربية**: الحصول على قصص مدينة قوانغتشو

### 6. get_supported_languages - 获取支持的语言列表
- 返回当前支持的所有语言代码和名称

---

## 数据文件多语言支持

### 景点数据
文件：`src/data/attractions-multilang.json`

每个景点包含 6 种语言的数据：
```json
{
  "name": "广州塔",
  "name_en": "Canton Tower",
  "name_fr": "Tour de Canton",
  "name_ru": "Кантонская башня",
  "name_es": "Torre de Cantón",
  "name_ar": "برج كانتون",
  "description": "中文描述...",
  "description_en": "English description...",
  "description_fr": "Description française...",
  "description_ru": "Русское описание...",
  "description_es": "Descripción en español...",
  "description_ar": "الوصف بالعربية..."
}
```

---

## 扩展多语言数据

### 步骤 1: 复制模板文件
```bash
cp src/data/attractions.json src/data/attractions.json.bak
cp src/data/attractions-multilang.json src/data/attractions.json
```

### 步骤 2: 编辑数据文件
为每条数据添加 6 种语言字段

### 步骤 3: 重启 MCP Server
```bash
# 停止当前服务
# 重新启动
npm start
```

---

## 测试多语言功能

### 测试命令

```bash
# 设置语言环境变量
export LANG=en  # Linux/macOS
$env:LANG="en"  # Windows PowerShell

# 启动服务器
npm start
```

### 预期输出

```
Guangzhou Travel MCP Server started [EN]
Supported languages: zh, en, fr, ru, es, ar
```

---

## 语言切换

### 方法 1: 环境变量
在启动时设置 `LANG` 环境变量

### 方法 2: API 参数
在调用 API 时传入 `lang` 参数：
```javascript
get_attractions({ lang: "en" })
```

---

## 注意事项

### 1. 阿拉伯文 RTL 支持
阿拉伯文是从右到左书写的语言，确保终端和显示设备支持 RTL。

### 2. 字符编码
所有数据文件使用 UTF-8 编码，确保编辑器正确识别。

### 3. 字体支持
某些语言（如俄文、阿拉伯文）需要系统安装对应字体。

### 4. 数据完整性
建议先完善中文数据，再逐步翻译其他语言。

---

## 下一步

- [ ] 完善所有景点的多语言数据
- [ ] 完善美食、历史、人文、故事的多语言数据
- [ ] 添加自动翻译功能（可选）
- [ ] 支持更多语言（日语、德语、韩语等）

---

**多语言配置完成！现在可以为全球用户提供服务！** 🌍
