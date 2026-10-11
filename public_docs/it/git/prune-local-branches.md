---
title: "localbranchの一括削除"
---

<a id="b-1572fd7b67a880b19358e6ba2e8fbc32"></a>

# <strong>localbranchの一括削除</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Git](README.md) / localbranchの一括削除</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a8801ba8cfdbb45c5ad8e9"></a>

## 手元にあるリモートローカルbranchの削除

<a id="b-1572fd7b67a880d4939fc153dc85e04f"></a>

<pre><code class="language-sh">git fetch --prune</code></pre>

<a id="b-1572fd7b67a8807195a0ea643d6fbde0"></a>

## 手元にある同名のローカルbranchも一括削除

<a id="b-1572fd7b67a8804d9ad6dfd30a376202"></a>

<pre><code class="language-sh">git fetch --prune &amp;&amp; for branch in $(git branch -vv | grep ': gone]' | awk '{print $1}'); do git branch -d $branch; done</code></pre>

<a id="b-1572fd7b67a8806196cef76e514ce967"></a>
