<p align="center">
  <img width="320" src="https://wpimg.wallstcn.com/ecc53a42-d79b-42e2-8852-5126b810a4c8.svg">
</p>

## 简介

[vue-element-admin](https://github.com/Buzaisonghua/vue-element-admin) 是一个后台前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element-plus](https://github.com/element-plus/element-plus)实现。它使用了最新的前端技术栈，内置了 i18n 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

- [预览地址](https://buzaisonghua.github.io/vue-element-admin)
- 换肤（暗夜模式）
- 主题色
- 国际化
- 动态路由
- 导航搜索
- 内置 icons 组件
- 使用 mock 数据
- eslint + prettier 验证格式
- stylelint 验证 style
- git-cz 验证 git commmit

**该项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill [详情](https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill)**

\*\*目前基于 `vite` 进行构建，若发现问题，欢迎提[issue](https://github.com/Buzaisonghua/vue-element-admin/issues)。

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于[vue](https://cn.vuejs.org/index.html)、[pinia](https://pinia.vuejs.org/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vite](https://cn.vite.dev/) 、[axios](https://github.com/axios/axios) 和 [element-plus](https://github.com/element-plus/element-plus)，所有的请求数据都使用[vite-plugin-mock-dev-server](https://github.com/pengzhanbo/vite-plugin-mock-dev-server)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - dev
  - sit
  - stage
  - prod

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
- Markdown2html
```

## 开发

```bash
# 克隆项目
git clone git@github.com:Buzaisonghua/vue-element-admin.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
pnpm i


# 启动服务
npm run dev
```

浏览器访问

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
