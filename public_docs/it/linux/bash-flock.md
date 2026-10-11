---
title: "bashのflock"
---

<a id="b-1572fd7b67a8802b9dbdd4e6e4429117"></a>

# <strong>bashのflock</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / bashのflock</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a880c58742d972d5481d60"></a>

スクリプト自体をflock試み、ダメであればnonblockで終了する文字列

<a id="b-1572fd7b67a8800991a6ee5e939c6eb5"></a>

<pre><code class="language-sh">exec {lock_fd}&lt; "$0"&#10;flock --nonblock ${lock_fd} || exit 0</code></pre>

<a id="b-1572fd7b67a880bb9eaec716b327ba3b"></a>
