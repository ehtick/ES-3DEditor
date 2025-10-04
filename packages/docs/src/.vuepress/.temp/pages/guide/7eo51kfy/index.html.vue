<template><div><div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
  image="/images/manual/editor/viewport/drawing.png"
  title="2D图纸"
  description="拖入(双击)添加至场景中的图纸会自动占据中心视口一半的位置，其与3D视图中间的垂直分割线可以左右拖动以改变占据视口的大小"
  author="ErSan"
  date="2025/04/16"
/>
</div></div><h2 id="简要说明" tabindex="-1"><a class="header-anchor" href="#简要说明"><span>简要说明</span></a></h2>
<p><mark>拖入(双击)</mark> 添加至场景中的图纸会自动占据中心视口一半的位置，其与3D视图中间的 <mark>垂直分割线</mark> 可以左右拖动以改变占据视口的大小。<br />
图纸可以与3D视图联动，提供更直观的设计体验。<br />
这一功能不仅提升了图纸的可视化效果，还为设计和协作提供了极大的便利。<br /></p>
<p><strong>主要亮点：</strong></p>
<ul>
<li>使用OffscreenCanvas技术在Worker线程中对图纸内容进行渲染，不会阻塞主线程3D场景的渲染。</li>
<li>图纸与3D视图联动，操作简单高效。</li>
<li>灵活调整视口分割线，优化工作空间。</li>
</ul>
<h2 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明"><span>功能说明</span></a></h2>
<ul>
<li><strong>图纸加载</strong>：支持将图纸拖入或双击添加至场景。</li>
<li><strong>视口分割</strong>：通过拖动分割线调整2D图纸与3D视图的占比。</li>
<li><strong>图纸复位</strong>：将图纸的显示区域恢复为初始状态。</li>
<li><strong>图层显隐</strong>：查看图纸的图层列表，并显示/隐藏任意图层。</li>
<li><strong>新增标记</strong>：在3D视图中选中模型后，便可以在图纸中新增对应的标记框。</li>
<li><strong>删除标记</strong>：删除当前选中的标记。</li>
</ul>
<h3 id="图纸加载" tabindex="-1"><a class="header-anchor" href="#图纸加载"><span>图纸加载</span></a></h3>
<ul>
<li><strong>功能描述</strong>：将图纸拖入或双击添加至场景后，图纸会自动占据中心视口的一半位置。</li>
<li><strong>操作方式</strong>：
<ul>
<li>在左侧CAD图纸列表中双击目标图纸，快速加载到场景中。</li>
</ul>
</li>
</ul>
<h3 id="视口分割" tabindex="-1"><a class="header-anchor" href="#视口分割"><span>视口分割</span></a></h3>
<ul>
<li><strong>功能描述</strong>：调整2D图纸与3D视图的占比，优化工作空间。</li>
<li><strong>操作方式</strong>：
<ul>
<li>拖动2D图纸与3D视图中间的垂直分割线，调整两者的占比。</li>
</ul>
<!-- - 分割线位置会自动保存，方便下次使用。 -->
</li>
</ul>
<h3 id="图纸复位" tabindex="-1"><a class="header-anchor" href="#图纸复位"><span>图纸复位</span></a></h3>
<ul>
<li><strong>功能描述</strong>：将图纸的显示区域恢复为初始状态。</li>
<li><strong>操作方式</strong>：
<ul>
<li>点击图纸菜单栏中的复位按钮（第一个）。</li>
</ul>
</li>
</ul>
<h3 id="图层显隐" tabindex="-1"><a class="header-anchor" href="#图层显隐"><span>图层显隐</span></a></h3>
<div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
  image="/images/manual/editor/viewport/drawingLayer.png"
  title="CAD图层"
  author="ErSan"
  date="2025/04/16"
/>
</div></div><ul>
<li><strong>功能描述</strong>：查看图纸的图层列表，并显示/隐藏任意图层。</li>
<li><strong>操作方式</strong>：
<ul>
<li>点击图纸菜单栏中的图层按钮（第二个）。</li>
<li>弹出的图层列表中，点击任一个图层前面的小眼睛图标即可隐藏对应图层，反正显示对应图层。</li>
<li>图层列表顶部的<mark>全部图层</mark>节点可以同时显示/隐藏所有图层。</li>
</ul>
</li>
</ul>
<h3 id="新增标记" tabindex="-1"><a class="header-anchor" href="#新增标记"><span>新增标记</span></a></h3>
<ul>
<li><strong>功能描述</strong>：在图纸中新增3D场景中所选中模型的对应的标记框。</li>
<li><strong>操作方式</strong>：
<ul>
<li>在右侧3D场景中选中需要标注的模型。</li>
<li>点击图纸菜单栏中的新增标记按钮（第三个）。</li>
<li>在图纸需要标记的位置按住鼠标左键拖动，即可绘制出长方形标记框。</li>
<li>只会只要在图纸中点击该标记，右侧3D场景便会自动聚焦并选中相应模型。</li>
</ul>
</li>
</ul>
<h3 id="删除标记" tabindex="-1"><a class="header-anchor" href="#删除标记"><span>删除标记</span></a></h3>
<ul>
<li><strong>功能描述</strong>：删除当前选中的标记。</li>
<li><strong>操作方式</strong>：
<ul>
<li>在图纸上选中需要删除的标记。</li>
<li>点击图纸菜单栏中的删除按钮（第四个）。</li>
<li>标记及其与模型的关联关系将被移除。</li>
</ul>
</li>
</ul>
</div></template>


