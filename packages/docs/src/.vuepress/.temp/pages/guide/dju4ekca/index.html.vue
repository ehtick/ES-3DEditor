<template><div><div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
  image="/images/manual/editor/extras/resource.png"
  title="资源中心"
  author="ErSan"
  date="2025/04/17"
/>
</div></div><h2 id="简要说明" tabindex="-1"><a class="header-anchor" href="#简要说明"><span>简要说明</span></a></h2>
<p>在扩展栏左上角下拉菜单中可将扩展面板切换到资源中心模块。<br />
资源共分为<mark>模型、材质、粒子、广告牌、Html面板、灯光、相机</mark>。<br />
编辑器已内置大多通用资源，也可在扩展栏右上角切换资源来源：<mark>内置资源/公共资源</mark>。</p>
<p><strong>主要亮点：</strong></p>
<ul>
<li><strong>资源分类清晰</strong>：支持多种资源类型，方便用户快速查找和使用。</li>
<li><strong>资源来源灵活</strong>：可切换内置资源和公共资源，满足不同场景需求。</li>
<li><strong>高效管理</strong>：支持资源的快速预览、搜索和分类管理。</li>
<li><strong>扩展性强</strong>：用户可自定义资源并上传到公共资源库。</li>
</ul>
<h2 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明"><span>功能说明</span></a></h2>
<ul>
<li><strong>资源搜索</strong>：按名称模糊搜索已选择分类下的资源。</li>
<li><strong>模型</strong>：内置多种类型的模型，用户可快速预览模型并拖拽到场景中使用。</li>
<li><strong>材质</strong>：提供丰富的材质库，用户可实时预览材质效果并应用至模型。</li>
<li><strong>粒子</strong>：内置多种粒子效果模板，支持参数调整和自定义粒子效果创建。</li>
<li><strong>广告牌</strong>：支持图片和文字广告牌的快速创建，适用于场景标注和装饰。</li>
<li><strong>Html面板</strong>：允许嵌入自定义HTML内容，支持动态交互和样式调整。</li>
<li><strong>灯光</strong>：提供多种灯光类型（如点光源、聚光灯等），支持实时调整光照参数。</li>
<li><strong>相机</strong>：内置透视相机与正交相机，满足不同场景需求。</li>
</ul>
<h3 id="资源搜索" tabindex="-1"><a class="header-anchor" href="#资源搜索"><span>资源搜索</span></a></h3>
<p>搜索框位于扩展栏顶部中间。
输入搜索内容，将根据当前所选取资源类型进行模糊查询。</p>
<h3 id="模型" tabindex="-1"><a class="header-anchor" href="#模型"><span>模型</span></a></h3>
<p>如本页首图，内置了多种类型的模型，用户可通过<mark>拖拽/双击</mark>方式将模型添加到场景中。</p>
<ul>
<li><mark>拖拽</mark>：模型将放置在鼠标放开的屏幕位置</li>
<li><mark>双击</mark>：模型将放置在场景中心</li>
</ul>
<h3 id="材质" tabindex="-1"><a class="header-anchor" href="#材质"><span>材质</span></a></h3>
<p>内置了多类型的PBR材质、Shader材质，用户可通过<mark>拖拽/双击</mark>方式将材质应用到模型上; <br />
成功应用的材质可在 右侧边栏-<VPLink href="/guide/l1df4723/">材质</VPLink> 进行参数配置及修改。</p>
<ul>
<li><mark>右键</mark>：预览材质</li>
<li><mark>拖拽</mark>：材质将应用至鼠标放开位置选取到的模型上</li>
<li><mark>双击</mark>：材质将应用至所选取的模型上</li>
</ul>
<p><strong>注意</strong>：材质只能应用至Mesh节点，不能应用于Group、广告牌、粒子、Html面板等节点。即材质只能应用于本身就包含材质属性的模型节点。</p>
<h3 id="粒子" tabindex="-1"><a class="header-anchor" href="#粒子"><span>粒子</span></a></h3>
<p>内置火焰、烟雾、萤火虫等常见粒子效果模板，用户可通过<mark>拖拽/双击</mark>方式将粒子添加到场景中; <br />
成功添加的粒子可在 右侧边栏-<VPLink href="/guide/siz46vj0/">粒子</VPLink> 调整粒子发射器参数及粒子行为。</p>
<ul>
<li><mark>拖拽</mark>：粒子将放置在鼠标放开的屏幕位置</li>
<li><mark>双击</mark>：粒子将放置在场景中心</li>
</ul>
<h3 id="广告牌" tabindex="-1"><a class="header-anchor" href="#广告牌"><span>广告牌</span></a></h3>
<p>内置图标、文本广告牌，用户可通过<mark>拖拽/双击</mark>方式将广告牌添加到场景中; <br />
成功添加的广告牌可在 右侧边栏-<VPLink href="/guide/18al65zg/">广告牌</VPLink> 进行参数配置及修改。</p>
<ul>
<li><mark>拖拽</mark>：广告牌将放置在鼠标放开的屏幕位置</li>
<li><mark>双击</mark>：广告牌将放置在场景中心</li>
</ul>
<h3 id="html面板" tabindex="-1"><a class="header-anchor" href="#html面板"><span>Html面板</span></a></h3>
<p>内置多个Html面板模板，用户可通过<mark>拖拽/双击</mark>方式将Html面板添加到场景中; <br />
该功能允许用户在场景中嵌入HTML内容，如视频播放器、交互式表单、数据图表等，支持动态更新; <br />
成功添加的Html面板可在 右侧边栏-<VPLink href="/guide/kk5cv2ij/">Html面板</VPLink> 进行参数配置及内容修改。</p>
<ul>
<li><mark>拖拽</mark>：Html面板将放置在鼠标放开的屏幕位置</li>
<li><mark>双击</mark>：Html面板将放置在场景中心</li>
</ul>
<h3 id="灯光" tabindex="-1"><a class="header-anchor" href="#灯光"><span>灯光</span></a></h3>
<p>内置<mark>环境光、平行光、半球光、点光源、聚光灯</mark>五种灯光类型，用户可通过<mark>拖拽/双击</mark>方式将灯光添加到场景中; <br />
成功添加的灯光（选中后）可在 右侧边栏-<VPLink href="/guide/2xlh6nrf/">对象</VPLink> 进行参数配置及修改。</p>
<ul>
<li><mark>拖拽</mark>：灯光将放置在鼠标放开的屏幕位置</li>
<li><mark>双击</mark>：灯光将放置在场景中心</li>
</ul>
<h3 id="相机" tabindex="-1"><a class="header-anchor" href="#相机"><span>相机</span></a></h3>
<p>内置<mark>透视相机、正交相机</mark>，用户可通过<mark>拖拽/双击</mark>方式将相机添加到场景中; <br />
相机添加后可在<VPLink href="/guide/jkg3yahd/">3D视口</VPLink>左上角进行主相机切换；<br />
成功添加的相机（选中后）可在 右侧边栏-<VPLink href="/guide/2xlh6nrf/">对象</VPLink> 进行参数配置及修改。</p>
<ul>
<li><mark>拖拽</mark>：相机将放置在鼠标放开的屏幕位置</li>
<li><mark>双击</mark>：相机将放置在场景中心</li>
</ul>
</div></template>


