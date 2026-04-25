const { geocoder } = require('./src/map/tencent-map');

const addresses = [
  '广州市越秀区文明路',
  '广州市越秀区惠福东路',
  '广州市越秀区北京南路',
  '广州市越秀区大南路'
];

(async () => {
  for (const addr of addresses) {
    try {
      const result = await geocoder(addr, '广州市');
      if (result.status === 0) {
        console.log(`OK: ${addr} | ${result.result.location.lat},${result.result.location.lng}`);
      } else {
        console.log(`FAIL: ${addr} | ${result.message}`);
      }
    } catch (e) {
      console.log(`ERROR: ${addr} | ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 300));
  }
})();
