<template><div><div class="hint-container tip">
<p class="hint-container-title">这个月的任务突然就很繁重</p>
<p>而且还要兼顾其他工作，真是一件很辛苦的事情。</p>
</div>
<h2 id="_5-6日" tabindex="-1"><a class="header-anchor" href="#_5-6日"><span>🎉 5-6日 🎉</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>重点功能实现</p>
</div>
<ul>
<li>修改工程打包方式，默认使用分批切块打包，一个场景存储为数十乃至数千资源包（取决于打包递归深度，递归深度默认为3层。后期增加用户可配置项：可选择整体打包/分批切块打包，分批切块打包可自定义递归深度）</li>
<li>相应的，修改场景包加载还原方式，现在支持分批切块加载，即渐进式加载；</li>
<li>涉及的多部分代码重构（工程打包、场景加载、工程预览...）</li>
</ul>
<h2 id="_7日" tabindex="-1"><a class="header-anchor" href="#_7日"><span>7日</span></a></h2>
<ul>
<li>场景编辑器顶部布局修改，去除菜单项，增加标题，导入导出改为按钮追加在各功能操作图标后方；</li>
</ul>
<h2 id="_8日" tabindex="-1"><a class="header-anchor" href="#_8日"><span>8日</span></a></h2>
<ul>
<li>完成封面图相关工作；</li>
</ul>
<h2 id="_21日" tabindex="-1"><a class="header-anchor" href="#_21日"><span>21日</span></a></h2>
<ul>
<li>新增fly组件，控制相机飞行的补间动画；</li>
<li>修复模型树展开的节点在在加载内容后会关闭的Bug;</li>
<li>大大降低模型树组件更新频率；</li>
<li>预览态新增模型树；</li>
<li>预览态改用<kbd>EffectComposer</kbd>渲染，新增模型选中时的<kbd>Outline</kbd>效果；</li>
</ul>
<h2 id="_22日" tabindex="-1"><a class="header-anchor" href="#_22日"><span>22日</span></a></h2>
<ul>
<li>新增预览态底部操作栏；</li>
<li>完成预览态底部操作栏-返回主视角功能；</li>
<li>完成预览态底部操作栏-自动旋转功能；</li>
<li>完成预览态底部操作栏-全屏/退出全屏功能；</li>
</ul>
<h2 id="_23日" tabindex="-1"><a class="header-anchor" href="#_23日"><span>23日</span></a></h2>
<ul>
<li>完成预览态底部操作栏-剖切功能；</li>
<li>完成预览态底部操作栏-测量功能；</li>
<li>完成预览态底部操作栏-小地图功能（不满意，半成品）；</li>
</ul>
<h2 id="_26日" tabindex="-1"><a class="header-anchor" href="#_26日"><span>26日</span></a></h2>
<ul>
<li>修复模型选中后右侧操作面板无法查看对应属性的BUG <a href="https://github.com/mlt131220/ES-3DEditor/issues/12" target="_blank" rel="noopener noreferrer">Issues #12</a>;</li>
<li>贴图新增repeat相关设置，可设置贴图重复模式、UV方向重复次数；</li>
<li>解决场景不存在脚本时点击模型报错的BUG;</li>
</ul>
<h2 id="_28日" tabindex="-1"><a class="header-anchor" href="#_28日"><span>28日</span></a></h2>
<ul>
<li>解决打包错误造成的无法删除场景的BUG；</li>
<li>预览态增加漫游功能；</li>
</ul>
<h2 id="_29日" tabindex="-1"><a class="header-anchor" href="#_29日"><span>29日</span></a></h2>
<ul>
<li>完成预览态漫游功能；</li>
</ul>
<h2 id="_30日" tabindex="-1"><a class="header-anchor" href="#_30日"><span>30日</span></a></h2>
<ul>
<li>漫游新增动画状态机，新增奔跑动画；</li>
</ul>
</div></template>


