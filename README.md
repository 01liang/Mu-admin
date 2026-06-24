<div align="center">
    <img alt="react-mu-admin" width="120" height="120" src="./public/vite.svg">
	<p align="center">
		<a href="https://react.docschina.org/" target="_blank">
			<img src="https://img.shields.io/badge/react-^18.2.0-success" alt="react">
		</a>
		<a href="https://4x.ant.design/docs/react/introduce-cn" target="_blank">
			<img src="https://img.shields.io/badge/antd-^4.24.8-blue" alt="antd">
		</a>
		<a href="https://www.tslang.cn/" target="_blank">
	        <img src="https://img.shields.io/badge/typescript-^4.9.3-informational" alt="typescript">
	    </a>
		<a href="https://vitejs.dev/" target="_blank">
		    <img src="https://img.shields.io/badge/vite-^4.2.0-success" alt="vite">
		</a>
		<a href="./LICENSE" target="_blank">
		    <img src="https://img.shields.io/badge/license-MIT-red" alt="license">
		</a>
	</p>
    <h1>React mu admin</h1>
	<p>&nbsp;</p>
</div>

## ⚡ 简介

React mu admin， 基于 `React18`,`TypeScript`,`vite4`,`antd4.x`等相关主流技术开发，一个免费开源的中后台管理系统开箱即用的前端解决方案，也可适用于学习`React`时进行参考或练手的项目。

## 🌈 特性

-   **主题切换**：普通、暗黑主题模式
-   **Mock 数据**： 内置 Mock 数据方案
-   **用户管理**：登录、登出演示、账号管理
-   **权限管理**：路由权限（动态路由）、组件权限（按钮）
-   **组件**： 二次封装常用组件（空状态、表格、表单、弹窗、上传文件、水印）等
-   **错误页面**: 403、404 页面
-   **多代理配置**：开发环境（development）配置多个本地代理
-   **其他内置功能**：伸缩侧边栏、面包屑、全屏等


<p align="center">
    <img alt="MuAdmin Logo" width="100%" src="./src/assets/preview/preview1.png">
    <img alt="MuAdmin Logo" width="100%" src="./src/assets/preview/preview2.png">
    <img alt="MuAdmin Logo" width="100%" src="./src/assets/preview/preview3.png">
    <img alt="MuAdmin Logo" width="100%" src="./src/assets/preview/preview4.png">
</p>

## ⭐ 仓库地址

-   [https://github.com/haojiey/react-mu-admin](https://github.com/haojiey/react-mu-admin)：- GitHub 仓库，⭐ 欢迎 Star，感谢支持

## 🔨 安装

-   克隆项目

```bash
git clone https://github.com/haojiey/react-mu-admin.git
```

-   安装依赖

```bash
cd react-mu-admin

cnpm install
yarn install
//安装失败，请升级 nodejs 到 16 以上
```

-   运行项目

```bash
npm run start
yarn start
```

-   打包项目

```bash
npm run build
yarn build
```

## 🌈 线上接口

本地采用 Mock 数据，线上采用 EasyMock：

-   EasyMock：https://mock.mengxuegu.com/

## 🔨 Git 提交规范

-   `feat` 增加新的功能
-   `fix` 修复 BUG
-   `perf` 优化功能
-   `style` 代码风格调整不影响运行结果的
-   `refactor` 重构代码
-   `revert` 撤销修改
-   `test` 测试相关
-   `docs` 文档和注释相关
-   `chore` 依赖更新/脚手架配置修改等
-   `workflow` 工作流改进
-   `ci` 持续集成
-   `types` 类型定义文件更改
-   `wip` 开发中

