<template><div><CardGrid>
  <ImageCard
  image="/images/manual/editor/leftSidebar/sceneTree.png"
  title="场景树"
  description="场景树是 Astral3D 编辑器中用于管理场景中所有对象的工具。它以树状结构展示场景中的层级关系，便于用户快速定位和操作对象"
  author="ErSan"
  date="2025/04/14"
/>
  <ImageCard
    image="/images/manual/editor/leftSidebar/sceneTreeContextMenu.png"
    title="场景节点右键菜单"
    description="聚焦、删除、拷贝"
    author="ErSan"
    date="2025/04/14"
  />
</CardGrid>
<h2 id="简要说明" tabindex="-1"><a class="header-anchor" href="#简要说明"><span>简要说明</span></a></h2>
<p>场景树是 Astral3D 编辑器中用于管理场景中所有对象的工具。它以树状结构展示场景中的层级关系，便于用户快速定位和操作对象。</p>
<h2 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明"><span>功能说明</span></a></h2>
<ul>
<li><strong>节点搜索</strong>：顶部搜索栏用于快速查找节点，模糊查询到的节点父级会自动展开，并在改节点下添加下划线。</li>
<li><strong>层级管理</strong>：通过拖拽操作，可以调整对象的父子关系。</li>
<li><strong>对象选择</strong>：点击场景树中的对象名称，可以在场景中选中对应的对象（不会自动聚焦）。</li>
<li><strong>聚焦对象</strong>：右键菜单中提供聚焦选项，用以在视口中定位模型（更推荐使用快捷键，默认是<code v-pre>F</code>）。</li>
<li><strong>删除对象</strong>：右键菜单中提供删除选项，方便移除不需要的对象（更推荐使用快捷键，默认是<code v-pre>Del</code>）。</li>
<li><strong>拷贝对象</strong>：右键菜单中提供拷贝选项，方便快速复制对象（同<VPLink href="/guide/f7smai4w/">顶栏</VPLink>基础操作区中的拷贝）。</li>
</ul>
<!-- - **对象隐藏/显示**：通过点击对象名称旁的图标，可以快速隐藏或显示对象。
- **重命名**：双击对象名称可以对其进行重命名。 --></div></template>


