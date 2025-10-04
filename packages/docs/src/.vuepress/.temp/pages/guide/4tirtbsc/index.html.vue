<template><div><div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
image="/images/manual/home/assets/assets-page.png"
title="资源中心"
description="多级分类，精细控制"
author="ErSan"
date="2025/08/01"
/>
</div></div><h2 id="上传资源" tabindex="-1"><a class="header-anchor" href="#上传资源"><span>上传资源</span></a></h2>
<div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
image="/images/manual/home/assets/asset-upload.png"
title="上传资源"
description="多级分类，精细控制"
author="ErSan"
date="2025/08/01"
/>
</div></div><ul>
<li><strong>类型</strong>：可上传资源类型默认为：<mark>模型、材质、纹理、广告牌、HDR</mark>;</li>
<li><strong>分类</strong>：从树节点中选择资源所属的详细类别;</li>
<li><strong>标签</strong>：为资源添加特定的标签，比如 <mark>“有动画、有骨骼”</mark> 之类的，便于在资源列表顶部勾选标签快速搜索；</li>
<li><strong>缩略图</strong>：可以从本地选择，或者在选择资源文件后，点击 <mark>通过预览截图</mark> 生成。</li>
</ul>
<Tabs id="31" :data='[{"id":"通过预览截图"}]'>
<template #title0="{ value, isActive }">通过预览截图</template><template #tab0="{ value, isActive }"><blockquote>
<p>假设在<code v-pre>模型</code>类型下我先选择了一个飞机模型，然后点击按钮<code v-pre>通过预览截图</code></p>
</blockquote>
<ImageCard
image="/images/manual/home/assets/asset-preview-screenshot.png"
title="通过预览截图"
description="点击截图按钮，将自动截取当前画布填充至表单缩略图字段，并关闭此预览弹窗"
author="ErSan"
date="2025/08/01"
/>
</template></Tabs><ul>
<li><strong>文件</strong>：不同类型的资源具有不同的文件格式支持。</li>
</ul>
<Tabs id="48" :data='[{"id":"模型"},{"id":"材质"},{"id":"纹理"},{"id":"广告牌"},{"id":"HDR"}]'>
<template #title0="{ value, isActive }">模型</template><template #title1="{ value, isActive }">材质</template><template #title2="{ value, isActive }">纹理</template><template #title3="{ value, isActive }">广告牌</template><template #title4="{ value, isActive }">HDR</template><template #tab0="{ value, isActive }"><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> glb</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> gltf</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> fbx</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> obj</label></li>
</ul>
</template><template #tab1="{ value, isActive }"><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> zip</label></li>
</ul>
<blockquote>
<p>默认解析为<mark>PBR材质</mark>。<br>
上传的ZIP包内文件应依照特定规则（以下两种之一）：</p>
<ul>
<li>
<Badge type="tip" text="推荐" /> 一. zip包中包含一个<code v-pre>material.json</code>的文件，其中指明各类贴图使用的纹理文件及材质属性，示例如下：</li>
</ul>
<div class="code-block-title" data-title="material.json"><div class="code-block-title-bar"><span class="title"><VPIcon provider="iconify" name="vscode-icons:file-type-json"/>material.json</span></div><div class="language-json" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">     textures</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         baseColor</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         normal</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         bump</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         displacement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         roughness</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         metalness</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         ao</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         emissive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         alpha</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         env</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         light</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic"> xxx.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">png/jpg/webp/tga/hdr/exr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">     },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">     properties</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         metalness</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         roughness</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">         ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">     }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div></div><ul>
<li>二. zip包中不包含<code v-pre>material.json</code>文件，此时包中的各纹理文件应语义化命名，如下(文件名均为按照关键字模糊匹配)：
::: file-tree</li>
</ul>
<ul>
<li>*.zip
<ul>
<li>%baseColor%.[png/jpg/webp/tga/hdr/exr]  // 基础颜色贴图(高光反射/光泽度工作流:diffuse, 金属/粗糙度工作流:baseColor)</li>
<li>%normal%.[png/jpg/webp/tga/hdr/exr]  // 法线贴图</li>
<li>%bump%.[png/jpg/webp/tga/hdr/exr]  // 凹凸贴图,如果定义了法线贴图，则将忽略该贴图</li>
<li>%displacement%.[png/jpg/webp/tga/hdr/exr]  // 置换贴图(位移贴图)</li>
<li>%roughness%.[png/jpg/webp/tga/hdr/exr]  // 粗糙度贴图(使用该纹理的绿色通道)</li>
<li>%metalness%.[png/jpg/webp/tga/hdr/exr]  // 金属度贴图(使用该纹理的蓝色通道)</li>
<li>%ao%.[png/jpg/webp/tga/hdr/exr]  // 环境遮挡贴图(该纹理的红色通道)</li>
<li>%emissive%.[png/jpg/webp/tga/hdr/exr]  // 自发光贴图(放射贴图)</li>
<li>%alpha%.[png/jpg/webp/tga/hdr/exr]  // 透明贴图(一张灰度纹理，用于控制整个表面的不透明度：黑色：完全透明；白色：完全不透明)</li>
<li>%env%.[png/jpg/webp/tga/hdr/exr]  // 环境贴图(一般不会设置，因为会使用scene.environment)</li>
<li>%light%.[png/jpg/webp/tga/hdr/exr]  // 光照贴图(需要第二组UV)
:::</li>
</ul>
</li>
</ul>
</blockquote>
</template><template #tab2="{ value, isActive }"><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> png</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> jpg/jpeg</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> webp</label></li>
</ul>
</template><template #tab3="{ value, isActive }"><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> png</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> jpg/jpeg</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> webp</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> svg</label></li>
</ul>
</template><template #tab4="{ value, isActive }"><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> hdr</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> exr</label></li>
</ul>
</template></Tabs><ul>
<li><strong>名称</strong>：默认会在上传资源文件后自动获取文件名填充；</li>
<li><strong>大小</strong>：会在上传资源文件后自动计算，无需填写。</li>
</ul>
<h2 id="预览资源" tabindex="-1"><a class="header-anchor" href="#预览资源"><span>预览资源</span></a></h2>
<div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
image="/images/manual/home/assets/asset-preview.png"
title="预览资源"
description="点击资源卡片/资源卡片操作栏的预览按钮进行资源预览。 预览弹窗左侧为可操作画布，右侧为资源详情及操作。"
author="ErSan"
date="2025/08/01"
/>
</div></div><h2 id="编辑资源" tabindex="-1"><a class="header-anchor" href="#编辑资源"><span>编辑资源</span></a></h2>
<div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<ImageCard
image="/images/manual/home/assets/asset-edit.png"
title="编辑资源"
description="点击资源卡片操作栏的编辑选项进行资源编辑。 编辑时无法修改资源类型和资源文件。"
author="ErSan"
date="2025/08/01"
/>
</div></div></div></template>


