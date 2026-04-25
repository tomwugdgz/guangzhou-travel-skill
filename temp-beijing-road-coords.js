const { geocoder } = require('./src/map/tencent-map');

const places = [
  '广州南越国宫署遗址',
  '广州北京路千年古道遗址',
  '广州大佛寺',
  '广州城隍庙',
  '广州天字码头',
  '广州光明广场南越国木构水闸遗址',
  '广州广府学宫',
  '广州新大新百货',
  '广州市越秀区北京路步行街',
  '广州越秀山镇海楼'
];

(async () => {
  for (const place of places) {
    try {
      const result = await geocoder(place, '广州市');
      if (result.status === 0) {
        console.log(`OK: ${place} | ${result.result.location.lat},${result.result.location.lng}`);
      } else {
        console.log(`FAIL: ${place} | ${result.message}`);
      }
    } catch (e) {
      console.log(`ERROR: ${place} | ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 300));
  }
})();
