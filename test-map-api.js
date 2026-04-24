/**
 * 腾讯地图 API 测试脚本
 * 测试地点搜索、逆地址解析、地址解析等功能
 */

const {
  searchPOI,
  reverseGeocoder,
  geocoder,
  getAround,
  calculateDistance,
  formatPOI,
} = require("./src/map/tencent-map");

console.log("=".repeat(60));
console.log("腾讯地图 API 测试");
console.log("=".repeat(60));

// 测试 1: 地点搜索 - 广州酒店
async function test1_searchHotels() {
  console.log("\n✅ 测试 1: 搜索广州酒店");
  try {
    const result = await searchPOI({
      keyword: "酒店",
      region: "广州市",
      page_size: 5,
    });

    if (result.status === 0) {
      console.log(`找到 ${result.data.length} 个酒店:`);
      result.data.slice(0, 3).forEach((poi, index) => {
        console.log(`  ${index + 1}. ${poi.title}`);
        console.log(`     地址: ${poi.address}`);
        console.log(`     电话: ${poi.tel || "暂无"}`);
        console.log(`     坐标: ${poi.location.lat},${poi.location.lng}`);
      });
    } else {
      console.log(`错误: ${result.message}`);
    }
  } catch (error) {
    console.log(`异常: ${error.message}`);
  }
}

// 测试 2: 地点搜索 - 广州餐饮
async function test2_searchRestaurants() {
  console.log("\n✅ 测试 2: 搜索广州餐饮");
  try {
    const result = await searchPOI({
      keyword: "餐饮",
      region: "广州市",
      page_size: 5,
    });

    if (result.status === 0) {
      console.log(`找到 ${result.data.length} 个餐厅:`);
      result.data.slice(0, 3).forEach((poi, index) => {
        console.log(`  ${index + 1}. ${poi.title}`);
        console.log(`     地址: ${poi.address}`);
        console.log(`     分类: ${poi.category}`);
      });
    } else {
      console.log(`错误: ${result.message}`);
    }
  } catch (error) {
    console.log(`异常: ${error.message}`);
  }
}

// 测试 3: 逆地址解析
async function test3_reverseGeocoder() {
  console.log("\n✅ 测试 3: 逆地址解析（广州塔坐标）");
  try {
    const result = await reverseGeocoder("23.1075,113.3208");

    if (result.status === 0) {
      console.log(`地址: ${result.result.address}`);
      console.log(`坐标: ${result.result.location.lat},${result.result.location.lng}`);
    } else {
      console.log(`错误: ${result.message}`);
    }
  } catch (error) {
    console.log(`异常: ${error.message}`);
  }
}

// 测试 4: 地址解析
async function test4_geocoder() {
  console.log("\n✅ 测试 4: 地址解析（北京路）");
  try {
    const result = await geocoder("广州市越秀区北京路");

    if (result.status === 0) {
      console.log(`坐标: ${result.result.location.lat},${result.result.location.lng}`);
      console.log(`地址: ${result.result.address}`);
      console.log(`标题: ${result.result.title}`);
    } else {
      console.log(`错误: ${result.message}`);
    }
  } catch (error) {
    console.log(`异常: ${error.message}`);
  }
}

// 测试 5: 计算距离
function test5_calculateDistance() {
  console.log("\n✅ 测试 5: 计算距离（广州塔到北京路）");
  const from = { lat: 23.1075, lng: 113.3208 }; // 广州塔
  const to = { lat: 23.1292, lng: 113.2689 }; // 北京路

  const distance = calculateDistance(from, to);
  console.log(`距离: ${distance} 米 (${(distance / 1000).toFixed(2)} 公里)`);
}

// 测试 6: 格式化 POI
function test6_formatPOI() {
  console.log("\n✅ 测试 6: 格式化 POI 数据");
  const poi = {
    id: "test_001",
    title: "测试酒店",
    address: "广州市天河区",
    tel: "020-12345678",
    category: "酒店",
    location: { lat: 23.1352, lng: 113.3245 },
    ad_info: { adcode: "440106" },
  };

  const formatted = formatPOI(poi);
  console.log("格式化结果:");
  console.log(JSON.stringify(formatted, null, 2));
}

// 运行所有测试
async function runAllTests() {
  await test1_searchHotels();
  await test2_searchRestaurants();
  await test3_reverseGeocoder();
  await test4_geocoder();
  test5_calculateDistance();
  test6_formatPOI();

  console.log("\n" + "=".repeat(60));
  console.log("✅ 所有测试完成！");
  console.log("=".repeat(60));
}

runAllTests().catch(console.error);
