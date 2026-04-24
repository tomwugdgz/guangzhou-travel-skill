# 腾讯地图 API 集成指南

## 概述

广州旅游 Skill 已集成腾讯地图 API，提供以下功能：

- 🗺️ **地点搜索** - 搜索周边酒店、餐饮、交通等 POI
- 📍 **逆地址解析** - 坐标转地址
- 🔍 **地址解析** - 地址转坐标
- 🏨 **酒店推荐** - 本地酒店数据
- 🚌 **交通信息** - 机场、火车站、地铁、公交
- 🌐 **地图概览** - 广州衣食住行全景

---

## API Key 配置

已配置的腾讯地图 API Key：
```
7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG
```

该 Key 已配置在 `mcp-config-multilang.json` 中，启动时自动加载。

---

## MCP Server 工具列表

### 本地数据工具

#### 1. get_hotels - 获取酒店信息
**描述**: 获取广州酒店推荐

**参数**:
- `category` (可选): 酒店分类（五星级、商务、主题酒店、经济型）
- `keyword` (可选): 搜索关键词

**示例**:
```javascript
// 获取所有酒店
get_hotels()

// 获取五星级酒店
get_hotels({ category: "五星级" })

// 搜索"珠江"相关酒店
get_hotels({ keyword: "珠江" })
```

#### 2. get_transport - 获取交通信息
**描述**: 获取广州交通信息

**参数**:
- `category` (可选): 交通分类（机场、高铁站、地铁、公交）
- `keyword` (可选): 搜索关键词

**示例**:
```javascript
// 获取所有交通信息
get_transport()

// 获取机场信息
get_transport({ category: "机场" })

// 搜索"南站"
get_transport({ keyword: "南站" })
```

#### 3. get_guangzhou_map_overview - 获取广州地图概览
**描述**: 获取广州地图概览（酒店、餐饮、交通、景点）

**参数**:
- `category` (可选): 分类（all、hotel、food、transport、attraction）

**示例**:
```javascript
// 获取全部概览
get_guangzhou_map_overview()

// 只获取酒店
get_guangzhou_map_overview({ category: "hotel" })

// 只获取餐饮
get_guangzhou_map_overview({ category: "food" })
```

---

### 腾讯地图 API 工具

#### 4. tencent_map_search - 腾讯地图地点搜索
**描述**: 使用腾讯地图 API 搜索周边 POI

**参数**:
- `keyword` (必填): 搜索关键词（如：酒店、餐饮、学校、医院）
- `location` (可选): 位置坐标（格式：纬度,经度）
- `region` (可选): 指定地区名称（默认：广州市）
- `page_size` (可选): 每页条目数（最大20，默认10）

**示例**:
```javascript
// 搜索广州的酒店
tencent_map_search({ keyword: "酒店" })

// 搜索指定位置周边的餐饮
tencent_map_search({
  keyword: "餐饮",
  location: "23.1292,113.2689",
  page_size: 20
})

// 搜索广州的学校
tencent_map_search({
  keyword: "学校",
  region: "广州市",
  page_size: 15
})
```

**返回示例**:
```json
{
  "status": "success",
  "count": 10,
  "data": [
    {
      "id": "poi_001",
      "name": "广州花园酒店",
      "address": "广州市越秀区环市东路368号",
      "phone": "020-83338989",
      "category": "酒店",
      "location": {
        "latitude": 23.1372,
        "longitude": 113.2869
      },
      "adcode": "440104"
    }
  ]
}
```

#### 5. tencent_map_reverse_geocoder - 逆地址解析
**描述**: 坐标转地址

**参数**:
- `location` (必填): 位置坐标（格式：纬度,经度）

**示例**:
```javascript
// 解析坐标
tencent_map_reverse_geocoder({
  location: "23.1292,113.2689"
})
```

**返回示例**:
```json
{
  "status": "success",
  "address": "广东省广州市越秀区北京路",
  "location": {
    "lat": 23.1292,
    "lng": 113.2689
  },
  "formatted_addresses": {
    "recommend": "广州市越秀区北京路",
    "rough": "越秀区北京路"
  }
}
```

#### 6. tencent_map_geocoder - 地址解析
**描述**: 地址转坐标

**参数**:
- `address` (必填): 地址文本
- `region` (可选): 指定地区（默认：广州市）

**示例**:
```javascript
// 解析地址
tencent_map_geocoder({
  address: "广州市天河区体育西路"
})
```

**返回示例**:
```json
{
  "status": "success",
  "location": {
    "lat": 23.1352,
    "lng": 113.3245
  },
  "address": "广州市天河区体育西路",
  "title": "体育西路"
}
```

---

## 使用场景

### 场景 1: 查找广州酒店

```
用户: "广州有哪些五星级酒店？"
Agent: 调用 get_hotels({ category: "五星级" })
返回: 白天鹅宾馆、花园酒店、富力丽思卡尔顿等
```

### 场景 2: 搜索周边餐饮

```
用户: "广州塔附近有什么好吃的？"
Agent: 
1. 获取广州塔坐标：23.1075,113.3208
2. 调用 tencent_map_search({ keyword: "餐饮", location: "23.1075,113.3208" })
返回: 周边餐厅列表
```

### 场景 3: 地址转坐标

```
用户: "北京路步行街的坐标是什么？"
Agent: 调用 tencent_map_geocoder({ address: "广州市越秀区北京路" })
返回: { lat: 23.1292, lng: 113.2689 }
```

### 场景 4: 坐标转地址

```
用户: "这个位置 23.1075,113.3208 是哪里？"
Agent: 调用 tencent_map_reverse_geocoder({ location: "23.1075,113.3208" })
返回: "广州市海珠区阅江西路（广州塔）"
```

### 场景 5: 广州地图概览

```
用户: "给我看看广州的衣食住行概览"
Agent: 调用 get_guangzhou_map_overview({ category: "all" })
返回: 酒店、餐饮、交通、景点完整列表
```

---

## 数据文件

### 本地数据文件

| 文件 | 内容 | 数量 |
|------|------|------|
| `src/data/hotels.json` | 酒店数据 | 5 条 |
| `src/data/transport.json` | 交通数据 | 5 条 |
| `src/data/food.json` | 美食数据 | 5 条 |
| `src/data/attractions.json` | 景点数据 | 5 条 |

### 数据格式

#### 酒店数据
```json
{
  "id": "hotel_001",
  "name": "广州白天鹅宾馆",
  "category": "酒店",
  "subcategory": ["五星级", "江景", "历史名店"],
  "location": {
    "address": "广州市荔湾区沙面南街1号",
    "latitude": 23.1065,
    "longitude": 113.2445
  },
  "rating": 4.8,
  "price_range": "¥800-2000/晚",
  "phone": "020-81886968",
  "facilities": ["游泳池", "健身房", "餐厅"],
  "nearby_attractions": ["沙面岛", "上下九步行街"]
}
```

#### 交通数据
```json
{
  "id": "transport_001",
  "name": "广州白云国际机场",
  "category": "交通",
  "subcategory": ["机场", "航空"],
  "location": {
    "address": "广州市白云区白云机场",
    "latitude": 23.3924,
    "longitude": 113.2988
  },
  "phone": "020-96158",
  "metro_lines": ["3号线北延段 - 机场南站"],
  "facilities": ["地铁站", "巴士站", "出租车"]
}
```

---

## 腾讯地图 API 配额

| API | 每日配额 | 说明 |
|-----|---------|------|
| 地点搜索 | 5000 次 | searchPOI |
| 逆地址解析 | 5000 次 | reverseGeocoder |
| 地址解析 | 5000 次 | geocoder |
| 周边推荐 | 5000 次 | getAround |

**注意**: 当前 Key 配额可能有限，如需更高配额，请访问 [腾讯位置服务控制台](https://lbs.qq.com/dev/console/quota/mine) 申请。

---

## 错误处理

### 常见错误码

| 状态码 | 说明 | 解决方法 |
|--------|------|---------|
| 0 | 成功 | - |
| 310 | 请求参数信息有误 | 检查参数格式 |
| 311 | Key 格式错误 | 检查 API Key |
| 306 | 请求有护持信息 | 检查字符串格式 |
| 110 | 请求来源未被授权 | 配置域名白名单 |

### 错误示例

```json
{
  "status": "error",
  "message": "请求参数信息有误",
  "code": 310
}
```

---

## 最佳实践

### 1. 优先使用本地数据
对于常用数据（酒店、交通、景点），优先使用本地 JSON 文件，减少 API 调用。

### 2. 合理使用缓存
对于频繁查询的坐标或地址，建议缓存结果。

### 3. 控制请求频率
避免短时间内大量请求，建议间隔 1-2 秒。

### 4. 错误重试
API 调用失败时，建议重试 1-2 次。

---

## 扩展建议

### 短期
- [ ] 扩充本地酒店数据至 50+
- [ ] 扩充交通数据至 20+
- [ ] 添加路线规划功能

### 中期
- [ ] 添加实时交通查询
- [ ] 添加周边推荐功能
- [ ] 集成腾讯地图小程序

### 长期
- [ ] 添加用户评论
- [ ] 添加预订功能
- [ ] 扩展至其他城市

---

**地图功能已配置完成！现在可以为用户提供完整的广州衣食住行信息！** 🗺️✨
