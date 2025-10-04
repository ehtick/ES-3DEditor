<template><div><div style="display:flex;justify-content:center;">
<ImageCard
  image="/images/manual/editor/leftSidebar/cad.png"
  title="CAD"
  description="编辑器支持用户上传CAD图纸(.dwg、.dxf)进行解析预览"
  width="300"
  author="ErSan"
  date="2025/04/15"
/>
</div>
<h2 id="简要说明" tabindex="-1"><a class="header-anchor" href="#简要说明"><span>简要说明</span></a></h2>
<p>通过编辑器的CAD解析预览功能，您可以轻松上传并查看多种格式的CAD图纸。<br />
无论是<code v-pre>.dwg</code>还是<code v-pre>.dxf</code>，都能快速解析并在三维视口中直观展示。<br />
这一功能不仅提升了图纸管理的效率，还为三维设计和协作提供了极大的便利。<br /></p>
<p><strong>主要亮点：</strong></p>
<ul>
<li>支持多种图纸格式，满足不同需求。</li>
<li>即时解析与预览，操作简单高效。</li>
<li>历史记录功能，方便快速查找和重新加载。</li>
</ul>
<p>让您的设计流程更加流畅，体验前所未有的便捷与高效！</p>
<h2 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明"><span>功能说明</span></a></h2>
<ul>
<li><strong>图纸列表</strong>：展示用户上传并解析成功的所有图纸。</li>
<li><strong>上传图纸</strong>：点击顶部<mark>历史记录</mark>右侧的<mark>上传按钮</mark>，会打开图纸上传界面。</li>
<li><strong>历史记录</strong>：点击顶部<mark>历史记录</mark>按钮，会弹出历史上传记录列表。</li>
</ul>
<h3 id="图纸列表" tabindex="-1"><a class="header-anchor" href="#图纸列表"><span>图纸列表</span></a></h3>
<ul>
<li><strong>功能描述</strong>：展示用户上传并解析成功的所有图纸。</li>
<li><strong>操作方式</strong>：<br>
如本页面首图，列表以网格形式展示；<br>
从列表中直接<mark>拖动</mark>相应图纸到中间的三维视口 或 <mark>双击</mark>该图纸，都可加载并渲染对应图纸。</li>
</ul>
<h3 id="上传图纸" tabindex="-1"><a class="header-anchor" href="#上传图纸"><span>上传图纸</span></a></h3>
<div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
  image="/images/manual/editor/leftSidebar/cadUpload.png"
  title="上传图纸"
  author="ErSan"
  date="2025/04/15"
/>
</div></div><ul>
<li><strong>支持格式</strong>：<code v-pre>.dwg、.dxf、.png、.jpg(jpeg)</code></li>
<li><strong>解析方式</strong>：
<ul>
<li><code v-pre>.dwg</code>格式图纸由于无法在前端直接解析，会在上传后通过WebSocket发起图纸解析请求。</li>
<li>解析结果通过WebSocket消息返回，并加载渲染展示。</li>
<li>如果<code v-pre>.dwg</code>图纸中包含缩略图，会自动解析为封面图，在<code v-pre>图纸列表</code>中展示。</li>
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
  image="/images/manual/editor/leftSidebar/cadHistory.png"
  title="历史记录"
  author="ErSan"
  date="2025/04/15"
/>
</div></div><ul>
<li><strong>功能描述</strong>：展示用户之前上传的所有图纸记录，方便快速查找和重新加载。</li>
<li><strong>操作方式</strong>：点击顶部<mark>历史记录</mark>按钮，弹出历史上传记录列表。</li>
</ul>
</div></template>


