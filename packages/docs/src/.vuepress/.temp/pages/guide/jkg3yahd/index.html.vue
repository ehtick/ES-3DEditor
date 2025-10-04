<template><div><div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
  image="/images/manual/editor/viewport/viewer.png"
  title="3D场景"
  description="编辑器的核心视口，展示用户所编辑的场景内容。"
  author="ErSan"
  date="2025/04/16"
/>
</div></div><h2 id="简要说明" tabindex="-1"><a class="header-anchor" href="#简要说明"><span>简要说明</span></a></h2>
<p>编辑器的核心视口，展示用户所编辑的场景内容。</p>
<p><strong>主要亮点：</strong></p>
<ul>
<li>提供六视角切换/主相机切换功能，方便用户观察3D场景。</li>
<li>自适应视口。</li>
<li>支持多种渲染模式，满足不同场景需求。</li>
<li>提供丰富的变换控制工具，便于编辑和调整模型。</li>
</ul>
<h2 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明"><span>功能说明</span></a></h2>
<ul>
<li><strong>主相机切换</strong>：支持在默认的透视相机和其他添加进场景的相机之间切换，满足不同场景的观察需求。</li>
<li><strong>六视图</strong>：快速切换到<mark>前、后、左、右、上、下</mark>六个标准视角，便于精确调整模型。</li>
<li><strong>渲染模式</strong>：提供<mark>真实、原色、法线、线框</mark>四种渲染模式，适应不同的设计需求。</li>
<li><strong>变换控制</strong>：支持平移、旋转、缩放三种变换操作，用户可以通过鼠标或快捷键快速调整模型。</li>
<li><strong>坐标参考</strong>：可以切换<mark>世界坐标、本地坐标</mark>，以查看不同坐标系下的轴情况，帮助用户明确模型的方向和位置。</li>
<li><strong>场景统计信息</strong>：实时显示场景中的模型数量、顶点数、三角面数、帧时等信息，便于性能优化。</li>
<li><strong>视角辅助</strong>：提供视角导航工具，帮助用户快速调整观察方向。</li>
<li><strong>操作快捷键</strong>：内置聚焦、删除等快捷键操作，便于快速设计。</li>
</ul>
<h3 id="主相机切换-六视图" tabindex="-1"><a class="header-anchor" href="#主相机切换-六视图"><span>主相机切换/六视图</span></a></h3>
<div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
  image="/images/manual/editor/viewport/viewerCamera.png"
  title="场景相机/六视图"
  author="ErSan"
  date="2025/04/16"
/>
</div></div><h3 id="渲染模式" tabindex="-1"><a class="header-anchor" href="#渲染模式"><span>渲染模式</span></a></h3>
<div style="display:flex;justify-content:center;">
<ImageCard
  image="/images/manual/editor/viewport/viewerRenderMode.png"
  title="渲染模式"
  width="400"
  author="ErSan"
  date="2025/04/16"
/>
</div>
<p>提供以下渲染模式：</p>
<ul>
<li><strong>真实模式</strong>：显示模型的材质效果，并进行实时采样，以产生类似光线追踪的效果。</li>
<li><strong>原色模式</strong>：显示模型的材质效果，便于检查纹理和光影。</li>
<li><strong>法线模式</strong>：</li>
<li><strong>线框模式</strong>：仅显示模型的边框线条，便于查看内部结构。</li>
</ul>
<h3 id="变换控制" tabindex="-1"><a class="header-anchor" href="#变换控制"><span>变换控制</span></a></h3>
<div style="display:flex;justify-content:center;">
<ImageCard
  image="/images/manual/editor/viewport/viewerTransform.png"
  title="变换控制"
  width="400"
  author="ErSan"
  date="2025/04/16"
/>
</div>
支持以下变换操作：
- **平移**：拖动模型在平面内移动。
- **旋转**：绕指定轴旋转模型。
- **缩放**：调整模型的大小比例。
<h3 id="坐标参考" tabindex="-1"><a class="header-anchor" href="#坐标参考"><span>坐标参考</span></a></h3>
<p>变换控制右边的按钮，点击后会在<mark>世界坐标/本地坐标</mark>之间切换。<br />
用于表明场景中显示的坐标轴（X、Y、Z）所使用的参考坐标系。<br />
比如：A模型在世界坐标下Y轴向上，但是本地坐标下却是Z轴向上。确定轴向可以辅助用户快速定位一些矩阵变换错误的原因。<br /></p>
<h3 id="场景统计信息" tabindex="-1"><a class="header-anchor" href="#场景统计信息"><span>场景统计信息</span></a></h3>
<p>在界面左下角显示场景的实时统计信息，包括：</p>
<ul>
<li>模型数量</li>
<li>顶点数</li>
<li>三角面数</li>
<li>帧时（帧率 = 1000/帧时）</li>
</ul>
<h3 id="视角辅助" tabindex="-1"><a class="header-anchor" href="#视角辅助"><span>视角辅助</span></a></h3>
<p>在界面右下角提供了视角辅助器，方便用户快速切换视角，共支持22个视角。
其颜色会跟随编辑器主题变换（深色/浅色）。</p>
<h3 id="操作快捷键" tabindex="-1"><a class="header-anchor" href="#操作快捷键"><span>操作快捷键</span></a></h3>
<p>支持以下快捷键操作：</p>
<ul>
<li><strong>W</strong>：切换到平移模式。</li>
<li><strong>E</strong>：切换到旋转模式。</li>
<li><strong>R</strong>：切换到缩放模式。</li>
<li><strong>F</strong>：聚焦选中模型。</li>
<li><strong>Del</strong>：删除选中模型。</li>
<li><strong>Ctrl + Z</strong>：撤销上一步操作。</li>
<li><strong>Ctrl + Shift +Z</strong>：重做被撤销的操作。</li>
</ul>
<p>如果在设置中修改了对应快捷键，则请使用对应快捷键操作。</p>
</div></template>


