---
title: "gpg revoke"
---

<a id="b-1572fd7b67a880a3b6a2f8aca4760c0f"></a>

# <strong>gpg revoke</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [GPG](README.md) / gpg revoke</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a8801284b5c15bc86ecdb8"></a>

#### 失効

<a id="b-1572fd7b67a8806fbc0afdc34e20f12d"></a>

<pre><code class="language-sh">gpg --edit-key &lt;id&gt;&#10;&gt; revkey&#10;&gt; ...&#10;&gt; save</code></pre>

<a id="b-1572fd7b67a8805eacf8e65e407e4be1"></a>

#### githubへ失効を登録する場合

1. <a id="b-1572fd7b67a88098b403d89669c80c69"></a>同一キーのGPGキーを削除する

1. <a id="b-1572fd7b67a880f0b5a7cf2dfbb8d0ea"></a>再エクスポートを行い、GPGキーを登録する

<a id="b-1572fd7b67a880ab9453d9e7e281e1c3"></a>
