# <img src="https://editor.astraljs.com/static/images/logo/logo.png" width="30" height="30"> Astral 3D Editor

🌍 简体中文 | [English](README.en.md)

[![Online Demo](https://img.shields.io/badge/Online_Demo-Astral_3D_Editor-8732D7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://editor.astraljs.com)

> 基于 Vue3 + Three.js 的现代 Web 3D 编辑器

<div align="center">
  <img src="http://editor-doc.astraljs.com/images/home/thumbnailDark.png?t=20250518" width="800" alt="Editor City Preview">
  <img src="http://editor-doc.astraljs.com/images/home/industryDark.png?t=20250318" width="800" alt="Editor Preview">
</div>

## 💬 加入社区

通过以下方式获取最新动态和技术支持：

| ![QQ Group](https://img.shields.io/badge/QQ交流群-1040320579-07C160?logo=wechat&logoColor=white) | ![Contact Author](https://img.shields.io/badge/联系作者-个人微信(仅商务)-07C160?logo=wechat&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="https://fs.mhbdng.cn/astral3d/4851677b-661d-4e60-884d-414316290425.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=NQQLQF1YWRT2TJD5FA27%2F20251004%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251004T155028Z&X-Amz-Expires=3600&X-Amz-Security-Token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwYXJlbnQiOiJtbHQxMzEyMjAiLCJleHAiOjE3NTk2MjQ5MTJ9.j5yb8tpX9-NR38EzzO3TCYKkTy8gvDMV8KaLNIsqMiHdxrIgmE8TKQspHvnRhRJPrcOMJyYGnT_4AVPlAdZLyw&X-Amz-Signature=3f3f323627ece52ddc5b47d05a673363b0403540edaf1cc9bf6a2ff225738ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" width="200">                                                                         | <img src="https://fs.mhbdng.cn/astral3d/c1c7ecef-d655-4bb3-97e8-54402e3a48ef.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=NQQLQF1YWRT2TJD5FA27%2F20251004%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251004T154710Z&X-Amz-Expires=3600&X-Amz-Security-Token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwYXJlbnQiOiJtbHQxMzEyMjAiLCJleHAiOjE3NTk2MjQ5MTJ9.j5yb8tpX9-NR38EzzO3TCYKkTy8gvDMV8KaLNIsqMiHdxrIgmE8TKQspHvnRhRJPrcOMJyYGnT_4AVPlAdZLyw&X-Amz-Signature=88d0a04a67c06812258d6cd60bea6875b993008b859b51e6c0c83395ccf41aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" width="200"> |




## 🚀 核心能力

### 核心功能
- ✅ 多格式支持：[30+ 模型格式（GLTF/OBJ/FBX/GLB/RVT/IFC等）](http://editor-doc.astraljs.com/guide/f7smai4w/#%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C%E5%8C%BA)
- ✅ BIM模型轻量化展示（RVT/IFC）
- ✅ CAD图纸解析（DWG/DXF）
- ✅ 场景分包存储与加载
- ✅ 动画编辑器

### 扩展能力
- 🧩 插件系统
- 📜 脚本运行时
- 💫 粒子系统
- ❄️ 天气系统
- ☁️ 云存储集成（又拍云 USS）
- 🎠 资源中心

### 即将到来
- 🚧 物理引擎支持
- 🚧 WebGPU 支持
- 🚧 数据组件（API/WebSocket）
- 🚧 低代码数据大屏
- 🚧 WebSocket 多人协作

## 🛠️ 技术栈

![Vue3](https://img.shields.io/badge/Vue-3.5.22-4FC08D?logo=vuedotjs)
![Three.js](https://img.shields.io/badge/Three.js-r176-000000?logo=threedotjs)
![Cesium](https://img.shields.io/badge/Cesium-1.107.0-0133B4?logo=cesium)
![NaiveUI](https://img.shields.io/badge/Naive_UI-2.43.1-66C060?logo=vue.js)
![UnoCSS](https://img.shields.io/badge/UnoCSS-0.46.5-333333?logo=unocss)

## ⚡ 快速开始

### 前置需求
- Node.js ≥ 23.11.x
- PNPM

### 本地运行
```bash
    git clone https://github.com/mlt131220/Astral3D.git

    cd Astral3D
    pnpm install
    pnpm run sdk:build
    pnpm run editor:dev
```

### 生产构建
```bash
    pnpm run editor:build
```

## 📚 生态相关

### 后端实现
[![Java Backend](https://img.shields.io/badge/后端实现-AstralService-00ADD8)](https://github.com/yx8663/astral-service)

### 文档中心
[![Documentation](https://img.shields.io/badge/文档中心-Astral_Docs-8732D7?logo=gitbook)](http://editor-doc.astraljs.com/)

## ☕ 支持项目

如果本项目对您有帮助，欢迎：

1. 在 [用户案例墙](https://github.com/mlt131220/Astral3D/issues/2) 留下您的使用场景
2. 扫码支持开发者：

| 支付宝                                                                       | 微信                                                                           |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------|
| <img src="https://editor-doc.astraljs.com/images/AliPay.png" width="200"> | <img src="https://editor-doc.astraljs.com/images/WeChatPay.png" width="200"> |

## ⚖️ 许可协议

本项目采用 [![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE) 开源协议，使用时请遵守协议条款及以下补充条款：

- ✅ 允许：个人学习/二次开发    
- ⚠️ 需要版权声明    
- ⚠️ 商业用途需要授权    
- ❌ 禁止：将本项目用于与**杭州星孪数字科技**有竞争性的业务或非法用途    

**[完整法律声明](LEGAL.md)** | **[贡献指南](CONTRIBUTING.md)**

## 🌟 Star 趋势

[![Star History Chart](https://api.star-history.com/svg?repos=mlt131220/Astral3D&type=Date)](https://star-history.com/#mlt131220/Astral3D&Date)