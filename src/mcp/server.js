const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const fs = require("fs");
const path = require("path");
const { getLang, getSupportedLanguages } = require("./i18n");
const {
  searchPOI,
  reverseGeocoder,
  geocoder,
  getAround,
  calculateDistance,
  formatPOI,
} = require("../map/tencent-map");

// 创建 MCP Server 实例
const server = new McpServer({
  name: "guangzhou-travel",
  version: "0.2.0",
});

// 数据文件路径
const dataDir = path.join(__dirname, "data");

// 获取语言设置（从环境变量或默认中文）
const lang = process.env.LANG || "zh";
const t = getLang(lang);

// 加载数据
function loadData(filename) {
  const filePath = path.join(dataDir, filename);
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`${t.messages.data_load_error} ${filename}:`, error.message);
    return [];
  }
}

// 工具 1: 获取景点信息
server.tool(
  t.tools.get_attractions.name,
  t.tools.get_attractions.description,
  {
    category: {
      type: "string",
      description: t.tools.get_attractions.category_desc,
      optional: true,
    },
    keyword: {
      type: "string",
      description: t.tools.get_attractions.keyword_desc,
      optional: true,
    },
    lang: {
      type: "string",
      description: `Language: ${getSupportedLanguages().join(", ")}`,
      optional: true,
    },
  },
  async ({ category, keyword, lang: requestLang }) => {
    const selectedLang = requestLang || lang;
    const attractions = loadData("attractions.json");
    let results = attractions;

    if (category) {
      results = results.filter((a) => a.category === category);
    }

    if (keyword) {
      results = results.filter(
        (a) =>
          a.name.includes(keyword) ||
          a.description.includes(keyword) ||
          a.category.includes(keyword) ||
          (a.name_en && a.name_en.toLowerCase().includes(keyword.toLowerCase()))
      );
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// 工具 2: 获取美食推荐
server.tool(
  t.tools.get_food_guide.name,
  t.tools.get_food_guide.description,
  {
    category: {
      type: "string",
      description: t.tools.get_food_guide.category_desc,
      optional: true,
    },
    keyword: {
      type: "string",
      description: t.tools.get_food_guide.keyword_desc,
      optional: true,
    },
    lang: {
      type: "string",
      description: `Language: ${getSupportedLanguages().join(", ")}`,
      optional: true,
    },
  },
  async ({ category, keyword, lang: requestLang }) => {
    const food = loadData("food.json");
    let results = food;

    if (category) {
      results = results.filter((f) => f.category === category);
    }

    if (keyword) {
      results = results.filter(
        (f) =>
          f.name.includes(keyword) ||
          f.description.includes(keyword) ||
          f.category.includes(keyword)
      );
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// 工具 3: 获取历史故事
server.tool(
  t.tools.get_history.name,
  t.tools.get_history.description,
  {
    category: {
      type: "string",
      description: t.tools.get_history.category_desc,
      optional: true,
    },
    keyword: {
      type: "string",
      description: t.tools.get_history.keyword_desc,
      optional: true,
    },
    lang: {
      type: "string",
      description: `Language: ${getSupportedLanguages().join(", ")}`,
      optional: true,
    },
  },
  async ({ category, keyword, lang: requestLang }) => {
    const history = loadData("history.json");
    let results = history;

    if (category) {
      results = results.filter((h) => h.category === category);
    }

    if (keyword) {
      results = results.filter(
        (h) =>
          h.title.includes(keyword) ||
          h.content.includes(keyword) ||
          h.category.includes(keyword)
      );
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// 工具 4: 获取人文风情
server.tool(
  t.tools.get_culture.name,
  t.tools.get_culture.description,
  {
    category: {
      type: "string",
      description: t.tools.get_culture.category_desc,
      optional: true,
    },
    keyword: {
      type: "string",
      description: t.tools.get_culture.keyword_desc,
      optional: true,
    },
    lang: {
      type: "string",
      description: `Language: ${getSupportedLanguages().join(", ")}`,
      optional: true,
    },
  },
  async ({ category, keyword, lang: requestLang }) => {
    const culture = loadData("culture.json");
    let results = culture;

    if (category) {
      results = results.filter((c) => c.category === category);
    }

    if (keyword) {
      results = results.filter(
        (c) =>
          c.title.includes(keyword) ||
          c.content.includes(keyword) ||
          c.category.includes(keyword)
      );
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// 工具 5: 获取城市故事
server.tool(
  t.tools.get_stories.name,
  t.tools.get_stories.description,
  {
    category: {
      type: "string",
      description: t.tools.get_stories.category_desc,
      optional: true,
    },
    keyword: {
      type: "string",
      description: t.tools.get_stories.keyword_desc,
      optional: true,
    },
    lang: {
      type: "string",
      description: `Language: ${getSupportedLanguages().join(", ")}`,
      optional: true,
    },
  },
  async ({ category, keyword, lang: requestLang }) => {
    const stories = loadData("stories.json");
    let results = stories;

    if (category) {
      results = results.filter((s) => s.category === category);
    }

    if (keyword) {
      results = results.filter(
        (s) =>
          s.title.includes(keyword) ||
          s.content.includes(keyword) ||
          s.category.includes(keyword)
      );
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// 工具 6: 获取支持的语言列表
server.tool(
  "get_supported_languages",
  "Get list of supported languages / 获取支持的语言列表",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              languages: getSupportedLanguages(),
              current: lang,
              languageNames: {
                zh: "中文 (Chinese)",
                en: "English (英文)",
                fr: "Français (法文)",
                ru: "Русский (俄文)",
                es: "Español (西班牙文)",
                ar: "العربية (阿拉伯文)",
              },
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

// 工具 7: 获取酒店信息
server.tool(
  "get_hotels",
  "获取广州酒店推荐 / Get Guangzhou hotel recommendations",
  {
    category: {
      type: "string",
      description: "酒店分类：五星级、商务、主题酒店、经济型",
      optional: true,
    },
    keyword: {
      type: "string",
      description: "搜索关键词",
      optional: true,
    },
  },
  async ({ category, keyword }) => {
    const hotels = loadData("hotels.json");
    let results = hotels;

    if (category) {
      results = results.filter((h) => h.subcategory.includes(category));
    }

    if (keyword) {
      results = results.filter(
        (h) =>
          h.name.includes(keyword) ||
          h.description.includes(keyword) ||
          h.name_en.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// 工具 8: 获取交通信息
server.tool(
  "get_transport",
  "获取广州交通信息 / Get Guangzhou transport information",
  {
    category: {
      type: "string",
      description: "交通分类：机场、高铁站、地铁、公交",
      optional: true,
    },
    keyword: {
      type: "string",
      description: "搜索关键词",
      optional: true,
    },
  },
  async ({ category, keyword }) => {
    const transport = loadData("transport.json");
    let results = transport;

    if (category) {
      results = results.filter((t) => t.subcategory.includes(category));
    }

    if (keyword) {
      results = results.filter(
        (t) =>
          t.name.includes(keyword) ||
          t.description.includes(keyword) ||
          t.name_en.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// 工具 9: 腾讯地图 POI 搜索
server.tool(
  "tencent_map_search",
  "腾讯地图地点搜索 / Search POI using Tencent Map API",
  {
    keyword: {
      type: "string",
      description: "搜索关键词（如：酒店、餐饮、学校、医院）",
    },
    location: {
      type: "string",
      description: "位置坐标（格式：纬度,经度，例：23.1292,113.2689）",
      optional: true,
    },
    region: {
      type: "string",
      description: "指定地区名称（默认：广州市）",
      optional: true,
    },
    page_size: {
      type: "number",
      description: "每页条目数（最大20，默认10）",
      optional: true,
    },
  },
  async ({ keyword, location, region, page_size }) => {
    try {
      const result = await searchPOI({
        keyword,
        location,
        region: region || "广州市",
        page_size: page_size || 10,
      });

      if (result.status === 0) {
        const pois = result.data.map(formatPOI);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "success",
                  count: pois.length,
                  data: pois,
                },
                null,
                2
              ),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "error",
                  message: result.message,
                  code: result.status,
                },
                null,
                2
              ),
            },
          ],
        };
      }
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                status: "error",
                message: error.message,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  }
);

// 工具 10: 腾讯地图逆地址解析
server.tool(
  "tencent_map_reverse_geocoder",
  "腾讯地图逆地址解析（坐标转地址）/ Reverse geocoder using Tencent Map API",
  {
    location: {
      type: "string",
      description: "位置坐标（格式：纬度,经度，例：23.1292,113.2689）",
    },
  },
  async ({ location }) => {
    try {
      const result = await reverseGeocoder(location);

      if (result.status === 0) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "success",
                  address: result.result.address,
                  location: result.result.location,
                  formatted_addresses: result.result.formatted_addresses,
                },
                null,
                2
              ),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "error",
                  message: result.message,
                  code: result.status,
                },
                null,
                2
              ),
            },
          ],
        };
      }
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                status: "error",
                message: error.message,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  }
);

// 工具 11: 腾讯地图地址解析
server.tool(
  "tencent_map_geocoder",
  "腾讯地图地址解析（地址转坐标）/ Geocoder using Tencent Map API",
  {
    address: {
      type: "string",
      description: "地址文本（如：广州市天河区体育西路）",
    },
    region: {
      type: "string",
      description: "指定地区（默认：广州市）",
      optional: true,
    },
  },
  async ({ address, region }) => {
    try {
      const result = await geocoder(address, region || "广州市");

      if (result.status === 0) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "success",
                  location: result.result.location,
                  address: result.result.address,
                  title: result.result.title,
                },
                null,
                2
              ),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "error",
                  message: result.message,
                  code: result.status,
                },
                null,
                2
              ),
            },
          ],
        };
      }
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                status: "error",
                message: error.message,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  }
);

// 工具 12: 获取广州地图概览
server.tool(
  "get_guangzhou_map_overview",
  "获取广州地图概览（酒店、餐饮、交通、景点）/ Get Guangzhou map overview",
  {
    category: {
      type: "string",
      description: "分类：all（全部）、hotel（酒店）、food（餐饮）、transport（交通）、attraction（景点）",
      optional: true,
    },
  },
  async ({ category }) => {
    const overview = {
      city: "广州",
      city_en: "Guangzhou",
      center: {
        latitude: 23.1292,
        longitude: 113.2689,
      },
      categories: {},
    };

    if (!category || category === "all" || category === "hotel") {
      overview.categories.hotel = loadData("hotels.json").map((h) => ({
        name: h.name,
        location: h.location,
        rating: h.rating,
        price_range: h.price_range,
      }));
    }

    if (!category || category === "all" || category === "food") {
      overview.categories.food = loadData("food.json").map((f) => ({
        name: f.name,
        location: f.location,
        rating: f.rating,
        category: f.category,
      }));
    }

    if (!category || category === "all" || category === "transport") {
      overview.categories.transport = loadData("transport.json").map((t) => ({
        name: t.name,
        location: t.location,
        category: t.subcategory[0],
      }));
    }

    if (!category || category === "all" || category === "attraction") {
      overview.categories.attraction = loadData("attractions.json").map((a) => ({
        name: a.name,
        location: a.location,
        rating: a.rating,
        category: a.category,
      }));
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(overview, null, 2),
        },
      ],
    };
  }
);

// 启动服务器
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`${t.messages.server_started} [${lang.toUpperCase()}]`);
  console.error(`Supported languages: ${getSupportedLanguages().join(", ")}`);
}

main().catch(console.error);
