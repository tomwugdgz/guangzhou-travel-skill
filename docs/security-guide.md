# 安全配置指南 - API Key 管理

## 🔒 API Key 安全策略

### 已完成的安全措施

✅ **移除硬编码的 API Key**
- 腾讯地图 API Key 已从代码中移除
- 改用环境变量 `TENCENT_MAP_KEY` 管理
- `.env` 文件已添加到 `.gitignore`，不会被提交到 GitHub

✅ **配置文件更新**
- `mcp-config-multilang.json` - 已移除 API Key
- `mcp-config.example.json` - 示例配置（不含 Key）
- `.env.example` - 环境变量模板

---

## 📝 配置步骤

### 方式 1: 使用 .env 文件（本地开发）

1. 复制模板文件：
   ```bash
   cp .env.example .env
   ```

2. 编辑 `.env` 文件，填入你的 API Key：
   ```env
   TENCENT_MAP_KEY=7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG
   LANG=zh
   SKILL_NAME=guangzhou-travel
   ```

3. `.env` 文件已被 `.gitignore` 忽略，不会被提交到 GitHub

### 方式 2: 在 MCP 配置中设置

编辑 `~/.workbuddy/mcp.json`：

```json
{
  "mcpServers": {
    "guangzhou-travel": {
      "command": "node",
      "args": ["d:/xwechat_files/RAW/10-北京路项目/guangzhou-travel-skill/src/mcp/server.js"],
      "env": {
        "LANG": "zh",
        "TENCENT_MAP_KEY": "你的腾讯地图API Key"
      }
    }
  }
}
```

### 方式 3: 系统环境变量

**Windows**:
```powershell
# 临时设置（当前会话有效）
$env:TENCENT_MAP_KEY="7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG"

# 永久设置（需要管理员权限）
[System.Environment]::SetEnvironmentVariable("TENCENT_MAP_KEY", "7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG", "User")
```

**Linux/macOS**:
```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
export TENCENT_MAP_KEY="7HKBZ-HQBEM-XS56X-6DBAT-ITXUZ-IDFNG"
```

---

## 🔐 安全最佳实践

### 1. 永远不要提交 .env 文件

`.gitignore` 已配置：
```
.env
.env.local
.env.*.local
```

### 2. 使用 .env.example 作为模板

提交 `.env.example` 文件，但不包含真实的 API Key：
```env
TENCENT_MAP_KEY=your_api_key_here
LANG=zh
SKILL_NAME=guangzhou-travel
```

### 3. 定期轮换 API Key

建议每 3-6 个月更换一次 API Key。

### 4. 限制 API Key 权限

在腾讯位置服务控制台：
- 设置域名白名单
- 设置 IP 白名单
- 限制每日调用次数

---

## ⚠️ 如果 API Key 泄露

### 立即操作

1. **登录腾讯位置服务控制台**
   - 访问：https://lbs.qq.com/dev/console/key/manage

2. **删除泄露的 Key**
   - 找到对应的 Key
   - 点击"删除"

3. **创建新的 Key**
   - 重新生成 API Key
   - 更新 `.env` 文件和 MCP 配置

4. **检查使用记录**
   - 查看是否有异常调用
   - 确认没有被滥用

---

## 📋 检查清单

在提交代码前，确认：

- [ ] `.env` 文件没有被提交
- [ ] 代码中没有硬编码的 API Key
- [ ] `.gitignore` 包含 `.env` 规则
- [ ] 使用环境变量读取 API Key
- [ ] `README.md` 包含配置说明

---

## 🛠️ 验证配置

### 测试 API Key 是否生效

```bash
# 启动 MCP Server
npm start

# 应该看到类似输出：
# 广州旅游 MCP Server 已启动 [ZH]
# Supported languages: zh, en, fr, ru, es, ar
```

### 检查环境变量

```bash
# Windows PowerShell
echo $env:TENCENT_MAP_KEY

# Linux/macOS
echo $TENCENT_MAP_KEY
```

---

**API Key 安全管理完成！** 🔒
