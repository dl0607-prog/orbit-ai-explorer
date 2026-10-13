# Orbit · AI Explorer / AI ATLAS

中文自主进阶 AI 学习空间。没有周计划或统一完成期限，允许按已有能力跳级。

## 本地启动

需要 Node.js 20+，无第三方依赖。

```sh
npm start
```

访问 http://127.0.0.1:4173 。端口占用时使用 `PORT=4174 npm start`。通过 HTTP 访问，不要直接双击 HTML 文件。

## 可以做什么

- 点击知识球上的四个入口，右侧卡片会切换到对应体验；支持拖动视角和旋转按钮。
- 浏览 12 个能力模块与真实先修连线：基础、Prompt、安全、多模态、Python、大模型、API、RAG、Agent、评估、微调、产品。
- 看懂概念、修改交互示例、记录发现、自主标记掌握；没有答题考试或强制学习顺序。
- 提示词操作台实时整理输入并支持复制。其他模块提供可切换的预设场景，清楚标注示例性质。
- 选择四条学习路径，切换方向保留能力和作品记录。
- 实践五个项目：提示词对照、多模态创作、知识库问答、研究 Agent、可选 AI Compass。
- 保存学习笔记和项目成果，JSON 导出与校验导入，中英术语、来源与内容版本记录。

## 分享与部署

```sh
npm run build
```

将 `dist/` 发布到任意静态网站托管服务。全部页面采用 hash 路由，不需要服务器重写，也不需要运行后端。资源使用相对路径，支持 GitHub Pages 的项目子目录。GitHub Actions 的构建检查配置在 `.github/workflows/check.yml`。

网站发布后，访客直接打开网址即可使用；不需要安装 Node.js 或注册账号。每个人的进度只保存在各自浏览器、同一域名和端口中，互不共享。切换设备或网址、清理站点数据前，先在学习记录导出备份；导入会替换当前记录并要求确认。

### GitHub Pages 发布

将项目源文件上传到自己可写的 GitHub 仓库，默认分支设为 `main`。在仓库 Settings → Pages → Build and deployment 中将 Source 设为 GitHub Actions。`.github/workflows/pages.yml` 会先运行测试和构建，再发布 `dist/`；首次配置完成后可在 Actions 手动运行 Publish Orbit website。以成功部署返回的真实网址为准，不要将本地地址或预计地址发给访客。

流程依据：[GitHub 官方发布说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。静态文件也可部署至其他公开托管服务。当前 ChatGPT Sites 地址在匿名 HTTP 检查中遭遇访问拦截，不能当作已验证的通用分享网址。

页面面向支持 ES modules 的现代 Chrome、Edge、Firefox、Safari 和安卓浏览器。进度保存不依赖 structuredClone；知识球在缺少 ResizeObserver 时使用窗口尺寸变化事件。尚未做安卓真机验证，不能保证所有历史版本或内置浏览器。上线验收应在未登录、手机网络、安卓浏览器中检查首页、知识球入口、学习记录保存和刷新恢复。

这是学习与实践管理 MVP，不自动调用大模型，不自动生成图片，不自动审查作品或发证。提示词可复制到自己常用的 AI 工具使用，作品链接和复盘由学习者自行记录。无云同步、账号和线上课程管理后台。

## 检查

```sh
npm test
npm run check
npm run build
```

核心测试覆盖先修引用与环路、能力推荐、自由跳级、备份往返、无效导入拒绝和完成路径。浏览器已确认首页入口、模块示例与旧学习记录显示。独立源码复核确认保存笔记保留已掌握状态、保存项目保留成果状态，以及草稿在页面切换时保留。

## 内容维护

- `data.js`：模块、先修、路径、项目、来源和版本记录。
- `guides.js`：站内概念讲解、示例、中英术语和预设交互场景。
- `app.js` / `core.js`：页面交互、持久化、校验和能力推荐。
- `globe.js`：知识球入口的透视投影、点击与拖动；主体是玻璃球插画。
- `style.css` / `layout.css`：卡片、响应式布局和 Orbit 英文品牌。

维护时保留模块 id；修改内容后更新 version、updated 与 history，运行测试检查引用和环路。存储键保留 `ai-explorer-v1`，兼容旧学习记录。

来源：Google Machine Learning Crash Course、Hugging Face LLM Course、Anthropic Building effective agents。链接核验记录为 2026-10-11；站内讲解是本项目编辑内容，并非完整官方课程。

玻璃知识球由内置 imagegen 生成：透明背景，珍珠玻璃材质、蓝紫与薄荷色折射、两条轨道和神经网络曲线，无文字；作为网页插画使用。Logo 已移除，保留 Orbit 英文名称。

## 独立单文件版本

运行 `npm run build:standalone` 生成 `standalone/index.html`。图片、样式与脚本内嵌，可单独分享该文件。部分手机文件预览器不能运行脚本，需要选择支持网页脚本的浏览器；若永久存储不可用，页面会提示导出备份。这个文件不是公开托管的网址。
