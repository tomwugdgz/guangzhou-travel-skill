const { geocoder } = require('./src/map/tencent-map');

const hotels = [
  '广州新旺宾馆北京路',
  '凯悦宾馆广州北京路天河城店',
  '逸米酒店广州北京路地铁站天河城店万福路',
  '逸米酒店广州北京路地铁站店文德南路',
  '柏高酒店广州沿江路团一大地铁站店',
  '广州港润东亚大酒店新中国大厦十三行店',
  '广州新东方宾馆',
  '7天连锁酒店北京路店',
  '愉舍酒店北京路',
  '文星酒店北京路',
  '宜致酒店广州北京路步行街海珠广场地铁站店',
  '柏高雅酒店广州北京路步行街地铁站店',
  '喆啡酒店广州北京路地铁站步行街店',
  '广州华厦大酒店海珠广场地铁站店',
  '广州岭南五号酒店',
  '广州大厦酒店北京路',
  '广州诺盟酒店北京路店文明路',
  '广州雅致酒店珠江新城店',
  '广州万富希尔顿酒店',
  '北京路新寓民宿',
  '北京路186号民宿',
  '贝贝民宿北京路',
  '壹号行公寓北京路',
  'G家公寓北京路天字码头'
];

(async () => {
  for (const hotel of hotels) {
    try {
      const result = await geocoder(hotel, '广州市');
      if (result.status === 0) {
        console.log(`OK: ${hotel} | ${result.result.location.lat},${result.result.location.lng}`);
      } else {
        console.log(`FAIL: ${hotel} | ${result.message}`);
      }
    } catch (e) {
      console.log(`ERROR: ${hotel} | ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 300));
  }
})();
