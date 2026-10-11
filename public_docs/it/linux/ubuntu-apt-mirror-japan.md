---
title: "apt repostiroy 2 jp"
---

<a id="b-1562fd7b67a880fd9969c8ced2015d46"></a>

# <strong>apt repostiroy 2 jp</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / apt repostiroy 2 jp</span>
<!-- migration-navigation:end -->

<a id="b-1562fd7b67a880e389a2ef240b00dc07"></a>

1\. 現在のrepository表記を確認<br><br>

<pre><code>cat /etc/apt/sources.list&#10;</code></pre>

<br>2\. 更新<br><br><code>sudo sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list</code>
