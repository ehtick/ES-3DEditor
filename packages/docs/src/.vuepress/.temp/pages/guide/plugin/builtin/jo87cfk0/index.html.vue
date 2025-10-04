<template><div><blockquote>
<p>此插件提供了在 Web 端处理 glTF 文件的能力，主要能力如下：</p>
<ul>
<li>优化 glTF 文件：
<ul>
<li>a. 压缩模型数据(包括贴图材质与几何数据)，减少文件大小;</li>
<li>b. 网格顶点优化，减少顶点数量，提升渲染性能;</li>
<li>c. 实例化网格，减少渲染 DrawCall，提升渲染性能;</li>
<li>d. 压缩裁剪纹理贴图，减少内存占用，提升渲染性能;</li>
</ul>
</li>
</ul>
</blockquote>
<!-- > - 查看glTF文件构成：
>   - a. 显示glTF文件的结构，包括文件头、场景、节点、动画、材质、几何体等;
>   - b. 显示glTF文件中的贴图、几何体、动画等资源的属性信息; -->
<h2 id="面板" tabindex="-1"><a class="header-anchor" href="#面板"><span>面板</span></a></h2>
<p><img src="/images/plugin/glTFHandler/plane.jpg" alt="glTF处理器"></p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<h4 id="_1-点击面板顶部上传区域-选择-gltf-文件-相关文件不会上传至服务器-仅用于本地处理" tabindex="-1"><a class="header-anchor" href="#_1-点击面板顶部上传区域-选择-gltf-文件-相关文件不会上传至服务器-仅用于本地处理"><span>1. 点击面板顶部上传区域，选择 glTF 文件（相关文件不会上传至服务器，仅用于本地处理）；</span></a></h4>
<h4 id="_2-修改配置选项或直接使用默认配置" tabindex="-1"><a class="header-anchor" href="#_2-修改配置选项或直接使用默认配置"><span>2. 修改配置选项或直接使用默认配置；</span></a></h4>
<h4 id="_3-点击-优化-按钮-开始处理-gltf-文件-优化日志会实时显示在面板顶部-原上传文件区域" tabindex="-1"><a class="header-anchor" href="#_3-点击-优化-按钮-开始处理-gltf-文件-优化日志会实时显示在面板顶部-原上传文件区域"><span>3. 点击“优化”按钮，开始处理 glTF 文件，优化日志会实时显示在面板顶部（原上传文件区域）；</span></a></h4>
<h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明"><span>配置说明</span></a></h2>
<table>
<thead>
<tr>
<th>配置项</th>
<th>描述</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>压缩方式</td>
<td>网格浮点压缩方法<br/>Draco 压缩 geometry;<br/>Meshopt &amp; Quantization 压缩 geometry 和 animation;</td>
<td><code v-pre>Draco</code>|<code v-pre>Meshopt</code>|<code v-pre>Quantization</code>|<code v-pre>None</code></td>
</tr>
<tr>
<td>Meshopt 压缩级别</td>
<td>压缩方式选择<code v-pre>Meshopt</code>时需要选择压缩级别</td>
<td><code v-pre>low</code>|<code v-pre>medium</code>|<code v-pre>high</code></td>
</tr>
<tr>
<td>实例化网格</td>
<td>使用 GPU 实例化技术共享网格引用，即生成<code v-pre>THREE.InstancedMesh</code>对象，减少 DrawCall</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>实例化网格界限</td>
<td>实例化网格所需的实例数,实例数低于该值的网格将不会实例化</td>
<td><code v-pre>min:2,max:Infinity</code></td>
</tr>
<tr>
<td>展平场景树</td>
<td>将场景内子模型对象全部展平到场景根节点。<br/>开启合并网格时此项无法关闭</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>合并网格</td>
<td>合并网格以减少渲染调用，合并后的网格无法单独选中。<br/>前置条件：开启展平场景树</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>合并纹理</td>
<td>创建调色板纹理并合并材质</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>合并纹理界限</td>
<td>合并纹理所需的纹理数,纹理数低于该值将不会合并</td>
<td><code v-pre>min:2,max:Infinity</code></td>
</tr>
<tr>
<td>修剪</td>
<td>从文件中删除未被场景引用的属性</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>修剪顶点</td>
<td>是否修剪未使用的顶点属性</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>修剪子节点</td>
<td>是否修剪空的叶子节点</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>修剪纹理</td>
<td>是否修剪实体(单色)纹理，将其转换为材质元素</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>合并同位顶点</td>
<td>合并按位相同的顶点。合并和索引后，顶点之间的数据共享效率更高。文件大小可以减小，GPU 可以更高效地使用顶点缓存。<br/>开启简化网格时此项无法关闭</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>简化网格</td>
<td>基于<code v-pre>meshoptimizer</code>的简化算法，生成具有较少三角形和顶点的网格。简化是有损的，但该算法旨在针对给定的参数尽可能地保持视觉质量。<br/>前置条件：开启合并同位顶点</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>简化误差界限</td>
<td>简化网格误差容忍度，以网格尺寸的百分比表示</td>
<td><code v-pre>min:0.01,max:100</code></td>
</tr>
<tr>
<td>简化锁定边界</td>
<td>是否锁定网格的拓扑边界，拓扑结构（尤其是分割顶点）会限制简化器</td>
<td><code v-pre>true</code>|<code v-pre>false</code></td>
</tr>
<tr>
<td>简化比率</td>
<td>要保留的顶点的比率（0-1）</td>
<td><code v-pre>min:0,max:1</code></td>
</tr>
<tr>
<td>纹理压缩</td>
<td><code v-pre>AVIF</code>和<code v-pre>WebP</code>优化传输大小;<br/><code v-pre>Auto</code>按原始格式进行压缩;</td>
<td><code v-pre>WebP</code>|<code v-pre>AVIF</code>|<code v-pre>Auto</code>|<code v-pre>None</code></td>
</tr>
<tr>
<td>纹理最大尺寸</td>
<td>超过该尺寸的纹理将被压缩,值一般为 2 的 N 次方</td>
<td><code v-pre>min:2,max:Infinity</code></td>
</tr>
</tbody>
</table>
<h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果"><span>结果</span></a></h2>
<p><img src="/images/plugin/glTFHandler/result.jpg" alt="glTF优化结果"></p>
<p><img src="/images/plugin/glTFHandler/compare.jpg" alt="glTF优化文件对比"></p>
<p><img src="/images/plugin/glTFHandler/compare2.jpg" alt="glTF优化文件对比"></p>
</div></template>


