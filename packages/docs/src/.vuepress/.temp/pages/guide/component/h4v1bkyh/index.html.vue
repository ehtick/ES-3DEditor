<template><div><blockquote>
<p>主要面相于开发人员，主要功能有：</p>
<ol>
<li>编写脚本逻辑，并将其挂载于实体模型上；</li>
<li>脚本组件使用<code v-pre>JavaScript</code>编程语言；</li>
<li>脚本组件由事件驱动，在对应生命周期内执行；</li>
<li>脚本组件可以访问实体模型的属性和方法；</li>
<li>运行时执行脚本逻辑，并获取脚本执行结果；</li>
</ol>
</blockquote>
<h3 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量"><span>内置变量</span></a></h3>
<p>在脚本中已经内置了以下变量：</p>
<table>
<thead>
<tr>
<th>变量</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>this</td>
<td>当前实体模型的引用</td>
<td><code v-pre>THREE.Object3D</code></td>
</tr>
<tr>
<td>THREE</td>
<td>THREE对象</td>
<td><code v-pre>THREE</code></td>
</tr>
<tr>
<td>helper</td>
<td>辅助类函数集合</td>
<td><a href="#helper">Helper</a></td>
</tr>
<tr>
<td>renderer</td>
<td>当前渲染器的引用</td>
<td><code v-pre>THREE.WebGLRenderer</code></td>
</tr>
<tr>
<td>scene</td>
<td>当前场景的引用</td>
<td><code v-pre>THREE.Scene</code></td>
</tr>
<tr>
<td>camera</td>
<td>当前场景相机的引用</td>
<td><code v-pre>THREE.PerspectiveCamera</code></td>
</tr>
<tr>
<td>controls</td>
<td>当前场景控制器的引用</td>
<td><a href="https://github.com/yomotsu/camera-controls" target="_blank" rel="noopener noreferrer">CameraControls</a></td>
</tr>
<tr>
<td>timer</td>
<td>场景运行时间跟踪</td>
<td><code v-pre>three/addons/misc/Timer.js</code></td>
</tr>
</tbody>
</table>
<h3 id="内置方法" tabindex="-1"><a class="header-anchor" href="#内置方法"><span>内置方法</span></a></h3>
<p>在脚本中已经内置了以下方法：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
<th>传入参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>render</td>
<td>驱动场景渲染一帧。</td>
<td><code v-pre>{delta?:number}</code></td>
</tr>
</tbody>
</table>
<h3 id="内置生命周期" tabindex="-1"><a class="header-anchor" href="#内置生命周期"><span>内置生命周期</span></a></h3>
<p>支持以下几个基本生命周期：</p>
<table>
<thead>
<tr>
<th>生命周期</th>
<th>描述</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>loaded</td>
<td>场景加载完成时执行，仅执行一次</td>
<td>-</td>
</tr>
<tr>
<td>beforeAnimation</td>
<td>场景当前动画帧循环开始之前触发，每一帧执行一次</td>
<td><code v-pre>{&quot;delta&quot;:number}</code></td>
</tr>
<tr>
<td>afterAnimation</td>
<td>场景当前动画帧循环完成之后立即触发，每一帧执行一次</td>
<td><code v-pre>{&quot;delta&quot;:number,&quot;toBeRender&quot;:(_needRender: boolean) =&gt; void}</code></td>
</tr>
<tr>
<td>beforeRender</td>
<td>场景当前动画帧循环完成之后渲染之前触发，每一次渲染执行一次</td>
<td><code v-pre>{&quot;delta&quot;:number}</code></td>
</tr>
<tr>
<td>afterRender</td>
<td>场景当前帧渲染完成之后触发，每一次渲染执行一次</td>
<td><code v-pre>{&quot;delta&quot;:number}</code></td>
</tr>
<tr>
<td>beforeDestroy</td>
<td>场景销毁前调用，仅执行一次</td>
<td>-</td>
</tr>
<tr>
<td>afterDestroy</td>
<td>场景销毁后调用，仅执行一次</td>
<td>-</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Tips:</p>
<blockquote>
<p><code v-pre>toBeRender</code>:由于本系统默认为事件驱动渲染，而非持续渲染，故提供此方法以便在脚本中实现自定义的逻辑。推荐用法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">afterAnimation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">delta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">toBeRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">){</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 传入true则下一帧一定渲染</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   toBeRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</blockquote>
<h3 id="内置事件" tabindex="-1"><a class="header-anchor" href="#内置事件"><span>内置事件</span></a></h3>
<p>支持以下几个基本事件：</p>
<table>
<thead>
<tr>
<th>事件</th>
<th>描述</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>onPick</td>
<td>模型单击事件</td>
<td><code v-pre>intersect:THREE.Intersection</code></td>
</tr>
<tr>
<td>onDoubleClick</td>
<td>模型双击事件</td>
<td><code v-pre>intersect:THREE.Intersection</code></td>
</tr>
<tr>
<td>onKeydown</td>
<td>键盘按下事件(全局)</td>
<td><code v-pre>event:KeyboardEvent</code></td>
</tr>
<tr>
<td>onKeyup</td>
<td>键盘抬起事件(全局)</td>
<td><code v-pre>event:KeyboardEvent</code></td>
</tr>
<tr>
<td>onPointerDown</td>
<td>指针按下事件(全局)</td>
<td><code v-pre>event:PointerEvent</code></td>
</tr>
<tr>
<td>onPointerUp</td>
<td>指针抬起事件(全局)</td>
<td><code v-pre>event:PointerEvent</code></td>
</tr>
<tr>
<td>onPointerMove</td>
<td>指针移动事件(全局)</td>
<td><code v-pre>event:PointerEvent</code></td>
</tr>
<tr>
<td>onTouchStart</td>
<td>触屏按下事件(全局)</td>
<td><code v-pre>event:TouchEvent</code></td>
</tr>
<tr>
<td>onTouchEnd</td>
<td>触屏释放事件(全局)</td>
<td><code v-pre>event:TouchEvent</code></td>
</tr>
</tbody>
</table>
<br/>
<hr>
<h3 id="辅助类-helper" tabindex="-1"><a class="header-anchor" href="#辅助类-helper"><span>辅助类(<a id="helper">Helper</a>)</span></a></h3>
<table>
<thead>
<tr>
<th>成员</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>scene</td>
<td>当前场景的引用，内置变量scene的引用</td>
<td><code v-pre>THREE.Scene</code></td>
</tr>
<tr>
<td>Animation</td>
<td>未实例化的动画类</td>
<td><a href="#helper-animation">Animation</a></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
<th>参数</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>objectByUuid</td>
<td>通过uuid获取场景中的Object3D对象</td>
<td><code v-pre>uuid:string</code></td>
<td><code v-pre>THREE.Object3D</code></td>
</tr>
<tr>
<td>moveObject</td>
<td>移动3D对象到指定位置</td>
<td><code v-pre>object: Object3D</code><br/><code v-pre>parent: Object3D</code><br/><code v-pre>before: Object3D</code></td>
<td>-</td>
</tr>
<tr>
<td>removeObject</td>
<td>从场景中移除3D对象</td>
<td><code v-pre>object: THREE.Object3D</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="动画类-animation" tabindex="-1"><a class="header-anchor" href="#动画类-animation"><span>动画类(<a id="helper-animation">Animation</a>)</span></a></h3>
<h4 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> animation</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> helper</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Animation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-typescript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> helper</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Animation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">object</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">THREE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Object3D</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>成员</th>
<th>描述</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>object</td>
<td>构造函数形参值，动画绑定的对象。<br/> 如果实例化时传入参数this(如上)，则指向内置变量this</td>
<td><code v-pre>THREE.Object3D</code></td>
</tr>
<tr>
<td>actions</td>
<td>动画动作集合</td>
<td><code v-pre>THREE.AnimationAction[]</code></td>
</tr>
<tr>
<td>actionsMap</td>
<td>动画动作映射表，key为动作名称，value为THREE.AnimationAction对象</td>
<td><code v-pre>Map&lt;string,  THREE.AnimationAction&gt;</code></td>
</tr>
<tr>
<td>lastPlayAction</td>
<td>正在播放的动作名称</td>
<td><code v-pre>THREE.AnimationAction | undefined</code></td>
</tr>
<tr>
<td>repetitions</td>
<td>动画重复次数</td>
<td><code v-pre>number</code></td>
</tr>
<tr>
<td>ActionLoop (static)</td>
<td>动画循环模式枚举：<br/> LoopOnce - 只执行一次 <br/> LoopRepeat - 重复次数为repetitions的值, 且每次循环结束时候将回到起始动作开始下一次循环。 <br/> LoopPingPong - 重复次数为repetitions的值, 且像乒乓球一样在起始点与结束点之间来回循环。</td>
<td><code v-pre>Enum</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
<th>参数</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>getAction</td>
<td>获取指定名称的动画动作,用于用户直接调用<a href="https://threejs.org/docs/index.html#api/zh/animation/AnimationAction" target="_blank" rel="noopener noreferrer">THREE.AnimationAction的方法</a></td>
<td><code v-pre>name:string</code></td>
<td><code v-pre>THREE.AnimationAction | undefined</code></td>
</tr>
<tr>
<td>play</td>
<td>播放指定名称的动画动作,支持链式调用</td>
<td><code v-pre>name:string</code> <br/> <code v-pre>loop:AnimationActionLoopStyles = helper.Animation.ActionLoop.LoopRepeat</code> <br/> <code v-pre>timeScale:number = 1</code></td>
<td><code v-pre>this(helper.Animation)</code></td>
</tr>
<tr>
<td>pause</td>
<td>暂停动画,支持链式调用</td>
<td><code v-pre>name:string | undefined</code></td>
<td><code v-pre>this(helper.Animation)</code></td>
</tr>
<tr>
<td>stop</td>
<td>停止动画,支持链式调用</td>
<td><code v-pre>name:string | undefined</code></td>
<td><code v-pre>this(helper.Animation)</code></td>
</tr>
</tbody>
</table>
<h3 id="基础用法-1" tabindex="-1"><a class="header-anchor" href="#基础用法-1"><span>基础用法</span></a></h3>
<p>完整结构：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 场景加载完成时执行，仅执行一次</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> loaded</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">group</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">loaded</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">renderer</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">scene</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">camera</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">controls</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">timer</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">groupEnd</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 场景当前动画帧循环开始之前触发，每一帧执行一次</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> delta</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> beforeAnimation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">delta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 场景当前动画帧循环完成之后立即触发，每一帧执行一次</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> delta</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">(_needRender: boolean) => void</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> toBeRender</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> 设置下一帧是否将渲染</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> afterAnimation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">delta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">toBeRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 场景当前动画帧循环完成之后渲染之前触发，每一次渲染执行一次</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> delta</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> beforeRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">delta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 场景当前帧渲染完成之后触发，每一次渲染执行一次</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> delta</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> afterRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">delta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 场景销毁前调用，仅执行一次</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> beforeDestroy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 场景销毁后调用，仅执行一次</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> afterDestroy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 模型单击事件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">THREE.Intersection</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> intersect</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onPick</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">intersect</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 模型双击事件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">THREE.Intersection</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> intersect</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onDoubleClick</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">intersect</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 键盘按下事件(全局)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">KeyboardEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> event</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onKeyDown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 键盘抬起事件(全局)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">KeyboardEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> event</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onKeyUp</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 指针按下事件(全局)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">PointerEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> event</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onPointerDown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 指针抬起事件(全局)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">PointerEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> event</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onPointerUp</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 指针移动事件(全局)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">PointerEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> event</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onPointerMove</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 触屏按下事件(全局)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">TouchEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> event</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onTouchStart</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 触屏释放事件(全局)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">TouchEvent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> event</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onTouchEnd</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h3>
<h4 id="_1-动态天空盒-模型动画-键盘事件" tabindex="-1"><a class="header-anchor" href="#_1-动态天空盒-模型动画-键盘事件"><span>1. 动态天空盒/模型动画/键盘事件</span></a></h4>
<Tabs id="700" :data='[{"id":"scene"},{"id":"wolf"}]' :active="1" tab-id="animate">
<template #title0="{ value, isActive }">Scene</template><template #title1="{ value, isActive }">Wolf</template><template #tab0="{ value, isActive }"><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> afterAnimation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">delta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">toBeRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">){</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    toBeRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> DEG2RAD</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">PI</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> /</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 180</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> beforeRender</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">delta</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> t</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> delta</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> DEG2RAD</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    scene</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">backgroundRotation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">y</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> t</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> helper</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Animation</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> loaded</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">play</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">01_Run_Armature_0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> onKeyDown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 按下1则执行 "01_Run_Armature_0" 动画,按下2则执行 "02_walk_Armature_0" 动画，按下3则执行 ""05_site_Armature_0"" 动画,</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    switch</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">event</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        case</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">stop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">play</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">02_walk_Armature_0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">            break</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        case</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">stop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">play</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">05_site_Armature_0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">            break</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        case</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">stop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">play</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">01_Run_Armature_0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">            break</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> beforeDestroy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    anime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">stop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></Tabs><iframe height=500 width=100% src="https://editor.astraljs.com/#/preview/a18eb710-c1f8-4cff-b8ab-c3a2056ccf57" frameborder=0 allowfullscreen></iframe></div></template>


