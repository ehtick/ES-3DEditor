<template><div><h2 id="_07日" tabindex="-1"><a class="header-anchor" href="#_07日"><span>07日</span></a></h2>
<ul>
<li><kbd>新建Cesium融合场景</kbd> 灵活配置cesium token、底图及底图类型;</li>
</ul>
<h2 id="_08日" tabindex="-1"><a class="header-anchor" href="#_08日"><span>08日</span></a></h2>
<ul>
<li>采用两个Canvas画布的方案成功将Cesium场景与ThreeJS场景融合;</li>
<li>Three摄像机视锥体远端面默认值修改为100,000;</li>
<li>融合场景下引入Three的<kbd>TransformControls</kbd>;</li>
</ul>
<h2 id="_09日" tabindex="-1"><a class="header-anchor" href="#_09日"><span>09日</span></a></h2>
<ul>
<li>Cesium融合场景下,<kbd>Three TransformControls</kbd> 拖动时锁定cesium场景渲染;</li>
<li>Cesium融合场景下,解决<kbd>Three Scene</kbd> 与 <kbd>Three SceneHelper</kbd>场景中心点重叠时，<kbd>TransformControls</kbd>绑定物体后自身定位偏移的BUG;</li>
</ul>
<h2 id="_10日" tabindex="-1"><a class="header-anchor" href="#_10日"><span>10日</span></a></h2>
<ul>
<li>解决<kbd>EsInputNumber</kbd>数值组件不随Object3D属性改变的BUG;</li>
<li>添加 - 环境光 功能默认环境光颜色改为 <kbd>0xffffff</kbd>;</li>
<li>解决材质组件下颜色选择器触发修改颜色后值永远为<kbd>0(黑色)</kbd>的BUG (需要使用十六进制值Hex色值);</li>
<li>解决材质组件下设置面报错 <kbd>Uncaught (in promise) RangeError: Maximum call stack size exceeded</kbd> 的BUG;</li>
<li>解决 场景ID/场景标题/场景描述/场景版本 设置保存后回显不存在的BUG;</li>
<li>解决 场景ID/场景标题/场景描述/场景版本 网络拉取场景后执行 <kbd>editor.clear()</kbd> 被清空的BUG;</li>
<li>解决 文件-发布 功能生成的项目文件不可用的问题；添加该功能演示环境不可用的提示；</li>
</ul>
<h2 id="_13日" tabindex="-1"><a class="header-anchor" href="#_13日"><span>13日</span></a></h2>
<ul>
<li>Cesium融合场景保存至服务器时添加Loading效果;</li>
<li>删除示例菜单(网络-&gt;从服务器获取工程 功能与示例功能效用相似);</li>
<li>帮助菜单下添加此项目文档链接;</li>
<li>去除菜单选中效果;</li>
</ul>
<h2 id="_20日" tabindex="-1"><a class="header-anchor" href="#_20日"><span>20日</span></a></h2>
<ul>
<li>本地indexDB存储为支持大模型场景存储，拆分为basic、images、geometry、models多表；</li>
</ul>
<h2 id="_22日" tabindex="-1"><a class="header-anchor" href="#_22日"><span>22日</span></a></h2>
<ul>
<li>解决侧边场景面板下修改背景、环境、雾不生效的BUG;</li>
<li>解决本地IndexDB存储无贴图场景失败的BUG;</li>
</ul>
<h2 id="_29日" tabindex="-1"><a class="header-anchor" href="#_29日"><span>29日</span></a></h2>
<ul>
<li>场景树拖放功能开发;</li>
<li>解决sceneJson解析有报错时notice.destroy()不执行的BUG;</li>
</ul>
</div></template>


