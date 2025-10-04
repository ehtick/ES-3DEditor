<template><div><div style="display:flex;justify-content:center;">
<ImageCard
  image="/images/manual/editor/leftSidebar/bim.png"
  title="BIM"
  description="通过将BIM工程文件（.rvt）转换为glTF文件，在保留BIM构件属性的同时压缩优化模型，以达到web端解析BIM并且轻量化的目的。"
  width="300"
  author="ErSan"
  date="2025/04/15"
/>
</div>
<h2 id="简要说明" tabindex="-1"><a class="header-anchor" href="#简要说明"><span>简要说明</span></a></h2>
<p>通过编辑器的BIM轻量化功能，您可以将复杂的BIM工程文件（如<code v-pre>.rvt</code>）转换为轻量化的<code v-pre>.glTF</code>文件。<br>
转换过程中保留了BIM构件的属性信息，同时对模型进行了压缩优化，方便在Web端进行高效解析与展示。</p>
<p><strong>主要亮点：</strong></p>
<ul>
<li>支持BIM文件的轻量化转换，优化模型大小。</li>
<li>保留构件属性，便于后续操作与分析。</li>
<li>界面设计与<VPLink href="/guide/u1631nwk/">CAD解析预览</VPLink>类似，操作直观易用。</li>
</ul>
<h2 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明"><span>功能说明</span></a></h2>
<ul>
<li><strong>模型列表</strong>：展示用户上传转换的所有BIM模型。</li>
<li><strong>上传模型</strong>：点击顶部<mark>历史记录</mark>右侧的<mark>上传按钮</mark>，会打开模型上传界面。</li>
<li><strong>历史记录</strong>：点击顶部<mark>历史记录</mark>按钮，会弹出历史上传记录列表。</li>
</ul>
<h3 id="模型列表" tabindex="-1"><a class="header-anchor" href="#模型列表"><span>模型列表</span></a></h3>
<ul>
<li><strong>功能描述</strong>：展示用户上传并转换成功的所有BIM模型。</li>
<li><strong>操作方式</strong>：<br>
如本页面首图，列表以网格形式展示；<br>
从列表中直接<mark>拖动</mark>相应模型到中间的三维视口 或 <mark>双击</mark>该模型，都可加载并渲染对应模型。</li>
</ul>
<h3 id="上传模型" tabindex="-1"><a class="header-anchor" href="#上传模型"><span>上传模型</span></a></h3>
<div style="display:flex;justify-content:center;">
<ImageCard
  image="/images/manual/editor/leftSidebar/bimUpload.png"
  title="上传模型"
  width="400"
  author="ErSan"
  date="2025/04/15"
/>
</div>
<ul>
<li><strong>支持格式</strong>：<code v-pre>.rvt、.rfa</code></li>
<li><strong>转换方式</strong>：
<ul>
<li>文件会在上传后通过WebSocket发起轻量化转换请求。</li>
<li>转换结果通过WebSocket消息返回，并加载渲染展示。</li>
</ul>
</li>
<li><strong>转换配置</strong>：
<ul>
<li>极致轻量化：模型会在转换过程中执行<mark>网格优化、材质贴图压缩并转换格式为WebP、网格实例化、网格合并</mark>等模型优化操作，以确保输出的BIM轻量化模型是最小体积及最小渲染损耗的glTF模型。过程中可能执行的具体优化项可参考<VPLink href="/guide/plugin/builtin/jo87cfk0/">glTF处理器</VPLink>章节；</li>
<li>导出属性：生成的glTF模型中是否包含构件属性；</li>
<li>转换视图：一个BIM文件中可能会包含多个3D视图，如果用户有确切的转换视图目标，可选择<code v-pre>按名称</code>并输入视图名称以转换；否则将自动以<code v-pre>默认3D视图</code>为目标转换；
-视觉样式：此设置影响最终输出的模型材质。<code v-pre>着色</code>模式基本不包含任何材质贴图，以纯色材质方式输出；<code v-pre>真实</code>模式会包含用户建模时的材质贴图，输出材质更真实；</li>
<li>坐标参考：一般情况下，一个BIM工程模型会由多工程师完成，便会存在多个单体BIM文件。此设置会决定最终输出模型与笛卡尔坐标系原点的相对位置信息。关于<mark>原点、项目基点、测量点</mark>的详细说明，可以参考这篇文章：<a href="https://zhuanlan.zhihu.com/p/220113797" target="_blank" rel="noopener noreferrer">详解Revit坐标系</a></li>
</ul>
</li>
</ul>
<h3 id="历史记录" tabindex="-1"><a class="header-anchor" href="#历史记录"><span>历史记录</span></a></h3>
<div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
  image="/images/manual/editor/leftSidebar/bimHistory.png"
  title="历史记录"
  author="ErSan"
  date="2025/04/15"
/>
</div></div><ul>
<li><strong>功能描述</strong>：展示用户之前上传的所有BIM模型记录，方便快速查找和重新加载。</li>
<li><strong>操作方式</strong>：点击顶部<mark>历史记录</mark>按钮，弹出历史上传记录列表。</li>
</ul>
</div></template>


