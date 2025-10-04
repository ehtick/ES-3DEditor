<template><div><CardGrid>
    <RepoCard repo="mlt131220/Astral3D" />
    <RepoCard repo="mlt131220/Astral3D" provider="gitee" />
</CardGrid>
<h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>⚡ 快速开始</span></a></h3>
<CodeTabs id="5" :data='[{"id":"bash"}]'><template #title0="{ value, isActive }"><VPIcon provider="iconify" name="vscode-icons:file-type-shell"/><span>bash</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/mlt131220/Astral3D.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Astral3D</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sdk:build</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> editor:dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h5 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips:</span></a></h5>
<ul>
<li><code v-pre>Node &gt;= 23.0.0</code>;</li>
</ul>
<h3 id="更新记录" tabindex="-1"><a class="header-anchor" href="#更新记录"><span>更新记录</span></a></h3>
<p><VPLink href="/notes/update/logs/">Changelog</VPLink></p>
</div></template>


<script setup>
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
</script>