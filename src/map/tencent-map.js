/**
 * 腾讯地图 API 封装模块
 * 提供地点搜索、逆地址解析、路线规划等功能
 */

const https = require("https");

// 腾讯地图 API Key
const TENCENT_MAP_KEY = process.env.TENCENT_MAP_KEY || "7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG";
const BASE_URL = "https://apis.map.qq.com";

/**
 * 发起 HTTP 请求
 * @param {string} path - API 路径
 * @param {object} params - 查询参数
 * @returns {Promise<object>} API 响应
 */
function request(path, params = {}) {
  return new Promise((resolve, reject) => {
    const queryParams = new URLSearchParams({
      key: TENCENT_MAP_KEY,
      ...params,
    }).toString();

    const url = `${BASE_URL}${path}?${queryParams}`;

    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            const result = JSON.parse(data);
            resolve(result);
          } catch (error) {
            reject(new Error(`解析响应失败: ${error.message}`));
          }
        });
      })
      .on("error", (error) => {
        reject(new Error(`请求失败: ${error.message}`));
      });
  });
}

/**
 * 地点搜索 - 搜索周边 POI
 * @param {object} options - 搜索选项
 * @param {string} options.keyword - 搜索关键词（如：酒店、餐饮、学校）
 * @param {string} options.location - 位置坐标（格式：纬度,经度）
 * @param {string} options.region - 指定地区名称（如：广州市）
 * @param {number} options.page_size - 每页条目数（最大20，默认10）
 * @param {string} options.filter - 分类筛选（如：category=酒店）
 * @returns {Promise<object>} 搜索结果
 */
async function searchPOI(options) {
  const {
    keyword,
    location,
    region = "广州市",
    page_size = 10,
    filter,
  } = options;

  const params = {
    keyword,
    region,
    page_size: String(page_size),
  };

  if (location) {
    params.location = location;
  }

  if (filter) {
    params.filter = filter;
  }

  return await request("/ws/place/v1/suggestion", params);
}

/**
 * 逆地址解析 - 坐标转地址
 * @param {string} location - 位置坐标（格式：纬度,经度）
 * @returns {Promise<object>} 地址信息
 */
async function reverseGeocoder(location) {
  return await request("/ws/geocoder/v1", { location });
}

/**
 * 地址解析 - 地址转坐标
 * @param {string} address - 地址文本
 * @param {string} region - 指定地区（如：广州市）
 * @returns {Promise<object>} 坐标信息
 */
async function geocoder(address, region = "广州市") {
  return await request("/ws/geocoder/v1", { address, region });
}

/**
 * 获取周边推荐
 * @param {string} location - 位置坐标（格式：纬度,经度）
 * @param {number} page_size - 返回数量
 * @returns {Promise<object>} 推荐列表
 */
async function getAround(location, page_size = 10) {
  return await request("/ws/place/v1/getaround", {
    location,
    page_size: String(page_size),
  });
}

/**
 * 计算距离
 * @param {object} from - 起点 {lat, lng}
 * @param {object} to - 终点 {lat, lng}
 * @returns {number} 距离（米）
 */
function calculateDistance(from, to) {
  const R = 6371000; // 地球半径（米）
  const dLat = ((to.lat - from.lat) * Math.PI) / 180;
  const dLng = ((to.lng - from.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((from.lat * Math.PI) / 180) *
      Math.cos((to.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * 格式化 POI 数据
 * @param {object} poi - POI 对象
 * @returns {object} 格式化后的 POI
 */
function formatPOI(poi) {
  return {
    id: poi.id,
    name: poi.title,
    address: poi.address,
    phone: poi.tel || "暂无",
    category: poi.category,
    location: {
      latitude: poi.location.lat,
      longitude: poi.location.lng,
    },
    adcode: poi.ad_info?.adcode || "",
  };
}

module.exports = {
  searchPOI,
  reverseGeocoder,
  geocoder,
  getAround,
  calculateDistance,
  formatPOI,
  TENCENT_MAP_KEY,
};
