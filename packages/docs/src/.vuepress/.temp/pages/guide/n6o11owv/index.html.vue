<template><div><blockquote>
<p><strong>此文档尚未更新，请勿参考。</strong></p>
</blockquote>
<blockquote>
<p>本文档适用于部署 Astral3D 编辑器到服务器上。 <br />
以<a href="https://github.com/mlt131220/Astral3DEditorGoBack" target="_blank" rel="noopener noreferrer">Golang版本</a>后端为例，其他语言版本后端部署方式请参考官方文档。</p>
</blockquote>
<h2 id="本地打包" tabindex="-1"><a class="header-anchor" href="#本地打包"><span>本地打包</span></a></h2>
<h3 id="前端打包" tabindex="-1"><a class="header-anchor" href="#前端打包"><span>前端打包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 确认 Node.js 版本（≥ 23.x）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">node</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 拉取代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/mlt131220/Astral3D.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Astral3D</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 打包 Astral 3D Engine SDK</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sdk:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 打包Astral 3D Editor</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> editor:build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后端打包" tabindex="-1"><a class="header-anchor" href="#后端打包"><span>后端打包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 确认go环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">go</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 拉取代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/mlt131220/Astral3DEditorGoBack.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">go</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mod</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tidy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 修改数据库等配置（修改 conf/app.conf，详见 https://github.com/mlt131220/Astral3DEditorGoBack/blob/main/README.md）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">edit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> conf/app.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装bee工具</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">go</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> get</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -u</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> github.com/beego/bee/v2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 编译后端代码</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Linux</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">bee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pack</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -be</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> GOOS=linux</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -be</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> GOARCH=amd64</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Windows</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">bee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pack</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -be</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> GOOS=windows</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器部署-windows" tabindex="-1"><a class="header-anchor" href="#服务器部署-windows"><span>服务器部署(Windows)</span></a></h2>
<h3 id="基础环境" tabindex="-1"><a class="header-anchor" href="#基础环境"><span>基础环境</span></a></h3>
<ul>
<li><a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">Nginx</a></li>
<li><a href="https://www.mysql.com/cn/downloads/" target="_blank" rel="noopener noreferrer">MySQL</a></li>
</ul>
<p>或者直接使用集成环境，如<a href="https://old.xp.cn/download.html" target="_blank" rel="noopener noreferrer">PHPStudy</a>。</p>
<h3 id="前端部署" tabindex="-1"><a class="header-anchor" href="#前端部署"><span>前端部署</span></a></h3>
<p>将Astral 3D Editor打包后的文件放到方便读取的目录下，如 <code v-pre>C:\www\Astral3dEditor</code>;</p>
<h3 id="后端部署" tabindex="-1"><a class="header-anchor" href="#后端部署"><span>后端部署</span></a></h3>
<ol>
<li>将后端编译后的文件放到方便读取的目录下，如 <code v-pre>C:\www\Astral3DEditorGoBack</code>;</li>
<li>打开 MySQL 数据库，创建名为 <code v-pre>astral3d</code> 的数据库，并导入 <code v-pre>Astral3DEditorGoBack/static/sql/astral-3d-editor.sql</code> 文件；</li>
<li>启动 MySQL 服务，并确保 MySQL 服务正常运行；</li>
<li>双击后端程序打包生成的可执行文件 <code v-pre>Astral3DEditorGoBack.exe</code> 启动后端服务，默认监听 <code v-pre>8080</code> 端口；</li>
</ol>
<h3 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置"><span>Nginx 配置</span></a></h3>
<ol>
<li>打开 Nginx 配置文件，假设nginx安装目录为<code v-pre>C:\nginx</code>,则配置文件路径为<code v-pre>C:\nginx\conf\nginx.conf</code>;</li>
<li>在 <code v-pre>http</code> 块中添加以下配置：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>http {</span></span>
<span class="line"><span>    # ... 忽略原有其他配置不变更</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 开启gzip</span></span>
<span class="line"><span>    gzip on;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 导入所有的server配置</span></span>
<span class="line"><span>    include vhosts/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>在 <code v-pre>C:\nginx\conf</code> 目录下创建 <code v-pre>vhosts</code> 目录(与上方http中增加的配置路径同名，并非一定要为<code v-pre>vhost</code>,可以自定义);</li>
<li>在 <code v-pre>C:\nginx\conf\vhosts</code> 目录下创建 <code v-pre>astral3d.conf</code> 文件，内容如下：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>server {</span></span>
<span class="line"><span>    # 监听端口,即前端部署的端口，一般设置为80</span></span>
<span class="line"><span>    listen        80;</span></span>
<span class="line"><span>    # 域名/ip/localhost</span></span>
<span class="line"><span>    server_name  127.0.0.1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 访问 server_name:listen 后，请求就会被转发到这个location块中</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        # 前端部署的目录，即前端打包后的文件所在目录</span></span>
<span class="line"><span>        root   "C:\www\Astral3dEditor";</span></span>
<span class="line"><span>        # 文件url重写规则，将请求转发到index.html（单页面应用）</span></span>
<span class="line"><span>        try_files $uri $uri/ index.html;</span></span>
<span class="line"><span>        # 项目入口文件</span></span>
<span class="line"><span>        index  index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 后端api接口代理，接口请求匹配 /api 的会走此处转发，下面都同理</span></span>
<span class="line"><span>    location /api {</span></span>
<span class="line"><span>        # 后端接口访问地址，上面部署在了本机的8080端口</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8080/api;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 前端websocket代理</span></span>
<span class="line"><span>    location /socket {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8080/api/sys/ws; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection "Upgrade";</span></span>
<span class="line"><span>        proxy_connect_timeout  10s;</span></span>
<span class="line"><span>        proxy_read_timeout  300s;</span></span>
<span class="line"><span>        proxy_send_timeout  300s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 如果需要使用upyun上传功能，则需要添加以下配置</span></span>
<span class="line"><span>    # 假设 http://upyun.xxx.com 为你的upyun存储</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /upyun {</span></span>
<span class="line"><span>        rewrite ^/upyun(.*)$ $1 break;</span></span>
<span class="line"><span>        proxy_pass http://upyun.xxx.com;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /static/upload {</span></span>
<span class="line"><span>        proxy_pass http://upyun.xxx.com/static/upload;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /static/bim2gltf {</span></span>
<span class="line"><span>        proxy_pass http://upyun.xxx.com/static/bim2gltf;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重启 nginx（如果修改了配置文件）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时访问 <code v-pre>http://127.0.0.1</code> 即可访问到 Astral 3D Editor。</p>
<h2 id="服务器部署-linux" tabindex="-1"><a class="header-anchor" href="#服务器部署-linux"><span>服务器部署(Linux)</span></a></h2>
<h2 id="docker-部署" tabindex="-1"><a class="header-anchor" href="#docker-部署"><span>Docker 部署</span></a></h2>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li>后端打包前请确认<code v-pre>Astral3DEditorGoBack/conf/app.conf</code>文件中的<code v-pre>runmode = prod</code>;</li>
<li>后端部署时，请确保 MySQL 数据库配置正确，并导入 <code v-pre>Astral3DEditorGoBack/static/sql/astral-3d-editor.sql</code> 文件；</li>
<li>前端部署时，请确保 Nginx 配置正确，并将前端部署到服务器上；</li>
<li>后端部署时，请确保后端程序启动成功，并监听 <code v-pre>Astral3DEditorGoBack/conf/app.conf</code>中配置的端口<code v-pre>httpport </code>，默认为 <code v-pre>8080</code> ；</li>
<li>前端部署时，请确保前端程序启动成功，并监听 Nginx 配置中配置的端口,比如上面示例的 <code v-pre>80</code> 端口；</li>
<li>部署完成后，请确保 Nginx 与 MySQL 服务正常运行；</li>
<li>部署完成后，请确保前端程序与后端程序正常运行；</li>
</ol>
</div></template>


