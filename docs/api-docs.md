# API 文档

## 概述

广州旅游 Skill 提供 5 个核心 API 接口，用于获取广州旅游相关信息。

## 接口列表

### 1. get_attractions - 获取景点信息

**描述**: 获取广州景点列表及详情

**参数**:
- `category` (可选): 景点分类
  - 可选值：地标建筑、历史文化、自然风光、观光体验
- `keyword` (可选): 搜索关键词

**返回**: 景点数据数组

**示例**:
```javascript
// 获取所有景点
get_attractions()

// 获取历史文化类景点
get_attractions({ category: "历史文化" })

// 搜索包含"塔"的景点
get_attractions({ keyword: "塔" })
```

---

### 2. get_food_guide - 获取美食推荐

**描述**: 获取广州美食推荐

**参数**:
- `category` (可选): 美食分类
  - 可选值：早茶、地道小吃、粤菜正餐
- `keyword` (可选): 搜索关键词

**返回**: 美食数据数组

**示例**:
```javascript
// 获取所有美食
get_food_guide()

// 获取早茶推荐
get_food_guide({ category: "早茶" })

// 搜索"虾饺"
get_food_guide({ keyword: "虾饺" })
```

---

### 3. get_history - 获取历史故事

**描述**: 获取广州历史故事

**参数**:
- `category` (可选): 历史分类
  - 可选值：古代历史、近代历史
- `keyword` (可选): 搜索关键词

**返回**: 历史数据数组

**示例**:
```javascript
// 获取所有历史故事
get_history()

// 获取近代历史
get_history({ category: "近代历史" })

// 搜索"黄埔军校"
get_history({ keyword: "黄埔军校" })
```

---

### 4. get_culture - 获取人文风情

**描述**: 获取广州人文风情

**参数**:
- `category` (可选): 文化分类
  - 可选值：生活方式、传统艺术、建筑文化、民俗文化、语言文化
- `keyword` (可选): 搜索关键词

**返回**: 人文数据数组

**示例**:
```javascript
// 获取所有人文风情
get_culture()

// 获取饮食文化
get_culture({ category: "生活方式" })

// 搜索"粤语"
get_culture({ keyword: "粤语" })
```

---

### 5. get_stories - 获取城市故事

**描述**: 获取广州城市故事

**参数**:
- `category` (可选): 故事分类
  - 可选值：城市传说、商业故事、人物故事、市井故事、当代故事
- `keyword` (可选): 搜索关键词

**返回**: 故事数据数组

**示例**:
```javascript
// 获取所有城市故事
get_stories()

// 获取人物故事
get_stories({ category: "人物故事" })

// 搜索"孙中山"
get_stories({ keyword: "孙中山" })
```

---

## 数据结构

### 景点数据结构

```json
{
  "id": "attraction_001",
  "name": "广州塔",
  "name_en": "Canton Tower",
  "category": "地标建筑",
  "subcategory": ["观光塔", "夜景"],
  "description": "广州标志性建筑...",
  "location": {
    "address": "广州市海珠区阅江西路222号",
    "district": "海珠区",
    "latitude": 23.1075,
    "longitude": 113.3208,
    "metro": "APM线/3号线 - 广州塔站"
  },
  "rating": 4.8,
  "ticket_price": "¥150-390",
  "opening_hours": "09:30-22:30",
  "best_time": "全年，傍晚至夜间最佳",
  "visit_duration": "2-3小时",
  "tips": ["建议提前网上购票避免排队"],
  "images": ["https://example.com/canton-tower-1.jpg"],
  "updated_at": "2026-04-24"
}
```

### 美食数据结构

```json
{
  "id": "food_001",
  "name": "点都德",
  "category": "早茶",
  "subcategory": ["老字号", "茶楼"],
  "description": "广州老字号茶楼...",
  "location": {
    "address": "广州市荔湾区龙津中路588号",
    "district": "荔湾区",
    "latitude": 23.1239,
    "longitude": 113.2453
  },
  "signature_dishes": ["金牌虾饺皇", "蜜汁叉烧包"],
  "price_range": "¥60-100/人",
  "rating": 4.7,
  "opening_hours": "07:00-21:00",
  "tips": ["早上8-10点是用茶高峰"],
  "updated_at": "2026-04-24"
}
```

### 历史数据结构

```json
{
  "id": "history_001",
  "title": "广州建城：2200多年的历史名城",
  "category": "古代历史",
  "period": "公元前214年",
  "summary": "公元前214年，秦始皇统一岭南...",
  "content": "秦始皇三十三年（公元前214年）...",
  "related_attractions": ["南越王博物院", "越秀公园"],
  "images": ["https://example.com/history-1.jpg"],
  "updated_at": "2026-04-24"
}
```

### 人文数据结构

```json
{
  "id": "culture_001",
  "title": "广府饮茶文化：一盅两件的生活哲学",
  "category": "生活方式",
  "subcategory": ["饮茶文化", "民俗"],
  "summary": "广州人的早茶文化不仅是饮食习惯...",
  "content": "在广州，'饮茶'不是简单的喝茶...",
  "related_food": ["点都德", "陶陶居", "广州酒家"],
  "images": ["https://example.com/culture-1.jpg"],
  "updated_at": "2026-04-24"
}
```

### 故事数据结构

```json
{
  "id": "story_001",
  "title": "五羊传说：广州为何叫'羊城'？",
  "category": "城市传说",
  "period": "古代传说",
  "summary": "相传古代有五位仙人骑着五只羊降临广州...",
  "content": "相传在周朝时期...",
  "related_attractions": ["越秀公园五羊石像"],
  "images": ["https://example.com/story-1.jpg"],
  "updated_at": "2026-04-24"
}
```

---

## 错误处理

所有接口在数据加载失败时会返回空数组，并在控制台输出错误日志。

## 更新频率

- 景点信息：每月更新
- 美食推荐：每季度更新
- 历史故事：固定内容，定期校对
- 人文风情：固定内容，定期校对
- 城市故事：持续收集

---

**维护者**: Tom & 胡允谦  
**版本**: 0.1.0  
**更新日期**: 2026-04-24
