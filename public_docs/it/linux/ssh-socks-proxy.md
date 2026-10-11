---
title: "socks-proxy"
---

<a id="b-1572fd7b67a88079b1e4d496aa1d7162"></a>

# <strong>socks\-proxy</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / socks\-proxy</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a8800797bee248a1897424"></a>

以下の要領で開通と、curlで試せる

<a id="b-1572fd7b67a880919272e616663131b9"></a>

<pre><code class="language-sh">ssh -D 8080 __ssh_node&#10;# 別local shell&#10;curl -x socks5h://0:8080 https://google.com</code></pre>

<a id="b-1572fd7b67a880819e9fd8f42c6d4dd4"></a>

バックグラウンドで静かにしておくオプション等

<a id="b-1572fd7b67a880b788c0db0d020257e1"></a>

<pre><code class="language-sh">ssh -D 8080 -f -C -q -N __ssh_node</code></pre>

<a id="b-1572fd7b67a88053aa45d707c8eba473"></a>

firefox等で、socks5指定で通せる

<a id="b-1572fd7b67a880ceaf06d41c164927b9"></a>
