<template><div><h2 id="_03日" tabindex="-1"><a class="header-anchor" href="#_03日"><span>03日</span></a></h2>
<ul>
<li>全局配置项与全局常量归档；</li>
</ul>
<h2 id="_07日" tabindex="-1"><a class="header-anchor" href="#_07日"><span>07日</span></a></h2>
<ul>
<li>使用<code v-pre>TypeScript</code>重写<code v-pre>Viewport</code>;</li>
</ul>
<h2 id="_09日" tabindex="-1"><a class="header-anchor" href="#_09日"><span>09日</span></a></h2>
<ul>
<li><code v-pre>ToolBar</code> 加入 <code v-pre>Shading</code> 渲染模式选择；</li>
<li><code v-pre>ThreeJS</code> 版本升级至<code v-pre>r163</code>;</li>
<li>色彩空间变更,全局替换(R152版本提出，R162版本废弃)： <br />
Texture：将 <code v-pre>.encoding</code> 替换为 <code v-pre>.colorSpace</code>;
WebGLRenderTarget: 将 <code v-pre>.outputEnding</code> 替换为 <code v-pre>.outputColorSpace</code>;</li>
<li><code v-pre>Scene Background</code> 为 <code v-pre>Equirectangular</code> 类型时，增加 <code v-pre>Intensity &amp;&amp; Rotation</code>数值设置项；</li>
</ul>
<h2 id="_12日" tabindex="-1"><a class="header-anchor" href="#_12日"><span>12日</span></a></h2>
<ul>
<li><code v-pre>ktx2Loader.setTranscoderPath</code>对应所需文件存储至又拍云；</li>
<li>修复 <code v-pre>ThreeJS</code> 升级 <code v-pre>r163</code> 后CAD文件加载报错的BUG(<code v-pre>r163</code>版本<code v-pre>OrbitControls</code>调用了新函数<code v-pre>getRootNode</code>,需要在使用<code v-pre>OffscreenCanvas</code>渲染CAD文件的虚拟dom元素代理上实现);</li>
</ul>
<h2 id="_15日" tabindex="-1"><a class="header-anchor" href="#_15日"><span>15日</span></a></h2>
<ul>
<li>重写场景运行预览相关内容；</li>
<li>右侧边栏新增脚本组件；</li>
<li>右侧边栏新增动画组件；</li>
</ul>
<h2 id="_18日" tabindex="-1"><a class="header-anchor" href="#_18日"><span>18日</span></a></h2>
<ul>
<li>去除AR支持，添加XR支持；</li>
<li>解决导入glb模型报错 <code v-pre>Couldn't load texture blob:http://xxxx</code> 的问题（<code v-pre>GLTFLoader</code>参数<code v-pre>manager</code>需要为<code v-pre>THREE.LoadingManager || undefined</code>,不能为<code v-pre>null</code>）；</li>
</ul>
<h2 id="_23日" tabindex="-1"><a class="header-anchor" href="#_23日"><span>23日</span></a></h2>
<ul>
<li>修改脚本默认内容；</li>
<li>脚本新增内置变量、事件、生命周期；</li>
</ul>
<h2 id="_24日" tabindex="-1"><a class="header-anchor" href="#_24日"><span>24日</span></a></h2>
<ul>
<li>脚本默认内容更新，新增变量，新增Helper类；</li>
<li>新增 预览 功能；</li>
</ul>
<h2 id="_28日" tabindex="-1"><a class="header-anchor" href="#_28日"><span>28日</span></a></h2>
<ul>
<li>新增补间动画管理器；</li>
<li>弃用viewHelper，使用viewCube代替(右下角XYZ轴指示器改用Cube)；</li>
</ul>
<h2 id="_29日" tabindex="-1"><a class="header-anchor" href="#_29日"><span>29日</span></a></h2>
<ul>
<li>更改Header功能布局;</li>
<li>History 移动至右侧功能区；</li>
<li>替换Logo;</li>
</ul>
<h2 id="_30日" tabindex="-1"><a class="header-anchor" href="#_30日"><span>30日</span></a></h2>
<ul>
<li>增加全局主色调修改功能（提供颜色选择弹窗）；</li>
<li>全部工程列表新增预览操作；</li>
<li>新增设置弹窗；</li>
</ul>
</div></template>


