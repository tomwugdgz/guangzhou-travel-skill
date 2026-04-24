/**
 * 多语言功能测试脚本
 * 测试 6 种联合国官方语言的配置
 */

const { getLang, getSupportedLanguages } = require("./src/i18n");

console.log("=".repeat(60));
console.log("广州旅游 Skill - 多语言功能测试");
console.log("=".repeat(60));

// 测试 1: 获取支持的语言列表
console.log("\n✅ 测试 1: 获取支持的语言列表");
const languages = getSupportedLanguages();
console.log(`支持的语言: ${languages.join(", ")}`);
console.log(`语言数量: ${languages.length}`);

// 测试 2: 测试每种语言的配置
console.log("\n✅ 测试 2: 测试每种语言的配置");

const testLangs = ["zh", "en", "fr", "ru", "es", "ar"];

testLangs.forEach((langCode) => {
  const langConfig = getLang(langCode);
  console.log(`\n--- ${langCode.toUpperCase()} ---`);
  console.log(`显示名称: ${langConfig.displayName}`);
  console.log(`描述: ${langConfig.description}`);
  console.log(`工具数量: ${Object.keys(langConfig.tools).length}`);
  console.log(`启动消息: ${langConfig.messages.server_started}`);
});

// 测试 3: 测试默认语言（中文）
console.log("\n✅ 测试 3: 测试默认语言");
const defaultLang = getLang();
console.log(`默认语言显示名称: ${defaultLang.displayName}`);
console.log(`默认语言描述: ${defaultLang.description}`);

// 测试 4: 测试不支持的语言（应回退到中文）
console.log("\n✅ 测试 4: 测试语言回退机制");
const unknownLang = getLang("de"); // 德语（未支持）
console.log(`请求德语 (de)，返回: ${unknownLang.displayName}`);
console.log(`是否回退到中文: ${unknownLang === getLang("zh") ? "✅ 是" : "❌ 否"}`);

// 测试 5: 语言名称映射
console.log("\n✅ 测试 5: 语言名称映射");
const languageNames = {
  zh: "中文 (Chinese)",
  en: "English (英文)",
  fr: "Français (法文)",
  ru: "Русский (俄文)",
  es: "Español (西班牙文)",
  ar: "العربية (阿拉伯文)",
};

Object.entries(languageNames).forEach(([code, name]) => {
  console.log(`${code}: ${name}`);
});

console.log("\n" + "=".repeat(60));
console.log("✅ 所有测试完成！");
console.log("=".repeat(60));

console.log("\n📋 使用示例:");
console.log("  启动中文版: npm run start:zh");
console.log("  启动英文版: npm run start:en");
console.log("  启动法文版: npm run start:fr");
console.log("  启动俄文版: npm run start:ru");
console.log("  启动西班牙文版: npm run start:es");
console.log("  启动阿拉伯文版: npm run start:ar");
