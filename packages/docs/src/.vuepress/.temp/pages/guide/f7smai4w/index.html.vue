<template><div><div class="demo-wrapper only-img no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<p><img src="/images/manual/editor/header.png" alt="顶栏"></p>
</div></div><div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p><code v-pre>顶栏</code>部分为左中右布局，左侧为<code v-pre>基础操作区</code>，中间仅展示<code v-pre>场景名称</code>，右侧为<code v-pre>多功能区域</code></p>
</div>
<h2 id="基础操作区" tabindex="-1"><a class="header-anchor" href="#基础操作区"><span>基础操作区</span></a></h2>
<blockquote>
<p>图标/按钮 从左到右依次是 <mark>Logo、撤回、重做、删除、清空、拷贝、全屏、导出、导入</mark></p>
</blockquote>
<Tabs id="18" :data='[{"id":"Logo"},{"id":"撤回"},{"id":"重做"},{"id":"删除"},{"id":"清空"},{"id":"拷贝"},{"id":"全屏"},{"id":"导出"},{"id":"导入"}]'>
<template #title0="{ value, isActive }">Logo</template><template #title1="{ value, isActive }">撤回</template><template #title2="{ value, isActive }">重做</template><template #title3="{ value, isActive }">删除</template><template #title4="{ value, isActive }">清空</template><template #title5="{ value, isActive }">拷贝</template><template #title6="{ value, isActive }">全屏</template><template #title7="{ value, isActive }">导出</template><template #title8="{ value, isActive }">导入</template><template #tab0="{ value, isActive }"><p>方寸藏寰宇，虚实映乾坤</p>
</template><template #tab1="{ value, isActive }"><p>撤销上一步操作。</p>
</template><template #tab2="{ value, isActive }"><p>恢复被撤销的操作。</p>
</template><template #tab3="{ value, isActive }"><p>删除当前选中的对象。</p>
</template><template #tab4="{ value, isActive }"><p>清空场景中的所有内容并重置所有模块。</p>
</template><template #tab5="{ value, isActive }"><p>复制当前选中的对象。</p>
</template><template #tab6="{ value, isActive }"><p>切换编辑器的全屏模式，全屏后会变为退出全屏图标，点击可退出全屏。</p>
</template><template #tab7="{ value, isActive }"><CardGrid>
  <ImageCard
    image="/images/manual/editor/header/exportObject.png"
    title="导出选中对象"
    author="ErSan"
    date="2025/04/14"
  />
  <ImageCard
    image="/images/manual/editor/header/exportScene.png"
    title="导出场景"
    author="ErSan"
    date="2025/04/14"
  />
</CardGrid>
<p>导出功能分为两类，一是导出选中的物体，二是导出整个场景。<br />
两者所支持的导出格式一致，分别是<mark>JSON、GLB、GLTF、OBJ、PLY、PLY(二进制)、STL、STL(二进制)、USDZ</mark></p>
</template><template #tab8="{ value, isActive }"><p>从文件系统导入模型/场景文件，允许多选，支持在此处导入的文件格式如下：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> glb</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> gltf</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> fbx</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> json (Three JSON / Astral3D JSON)</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> zip <Annotation label="zip" :total="1"><template #item-0><p>导入zip包时，系统会自动解析处理，分为下面几种情况：</p>
<ul>
<li>同时包含<code v-pre>model.obj</code>和<code v-pre>materials.mtl</code>，会按照<code v-pre>.obj</code>解析</li>
<li>遍历解析zip包中的<code v-pre>fbx</code>、<code v-pre>glb</code>、<code v-pre>gltf</code></li>
</ul>
</template></Annotation></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> obj</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> mtl</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> ifc</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 3dm</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 3ds</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 3mf</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> amf</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> dae</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> drc</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> kmz</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> ldr</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> mpd</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> md2</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> pcd</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> ply</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> stl</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> svg</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> usdz</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> vox</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-24" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-24"> vtk</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-25" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-25"> vtp</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-26" disabled="disabled"><label class="task-list-item-label" for="task-item-26"> vtu</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-27" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-27"> wrl</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-28" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-28"> xyz</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-29" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-29"> js</label></li>
</ul>
</template></Tabs><h2 id="多功能区域" tabindex="-1"><a class="header-anchor" href="#多功能区域"><span>多功能区域</span></a></h2>
<blockquote>
<p>图标/按钮 从左到右依次是 <mark>保存、预览、国际化、主题、主色调、设置</mark></p>
</blockquote>
<Tabs id="226" :data='[{"id":"保存"},{"id":"预览"},{"id":"国际化"},{"id":"主题"},{"id":"主色调"},{"id":"设置"}]'>
<template #title0="{ value, isActive }">保存</template><template #title1="{ value, isActive }">预览</template><template #title2="{ value, isActive }">国际化</template><template #title3="{ value, isActive }">主题</template><template #title4="{ value, isActive }">主色调</template><template #title5="{ value, isActive }">设置</template><template #tab0="{ value, isActive }"><p>打包当前场景，并保存至服务器。</p>
</template><template #tab1="{ value, isActive }"><p>打开新的<VPLink href="/guide/chhmeza7/">预览页</VPLink>窗口进行场景预览。</p>
</template><template #tab2="{ value, isActive }"><p>切换编辑器的语言，默认支持语言如下：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-30" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-30"> 简体中文</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-31" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-31"> English</label></li>
</ul>
</template><template #tab3="{ value, isActive }"><p>切换编辑器的主题风格。<br />
切换顺序为<code v-pre>深色</code>--&gt;<code v-pre>跟随系统</code>--&gt;<code v-pre>浅色</code>--&gt;<code v-pre>深色</code> <br />
系统默认为<code v-pre>深色</code>风格</p>
</template><template #tab4="{ value, isActive }"><ImageCard
  image="/images/manual/editor/header/mainColor.png"
  title="主色调"
  description="调整编辑器的主色,系统会自动生成相应的浅色、深色色阶，用于鼠标经过以及选中等效果"
  author="ErSan"
  date="2025/04/14"
/>
<p>调整编辑器的主色,系统会自动生成相应的浅色、深色色阶，用于鼠标经过以及选中等效果。</p>
<p></p>
</template><template #tab5="{ value, isActive }"><ImageCard
  image="/images/manual/editor/header/setting.png"
  title="系统设置"
  author="ErSan"
  date="2025/04/14"
/>
<p>打开编辑器的设置面板。</p>
</template></Tabs></div></template>


