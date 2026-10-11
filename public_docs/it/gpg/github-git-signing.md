---
title: "github登録と、gitでの利用設定"
---

<a id="b-1572fd7b67a880ebbe4ff2af117ba46e"></a>

# <strong>github登録と、gitでの利用設定</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [GPG](README.md) / github登録と、gitでの利用設定</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a880f78143c88f267bb9a8"></a>

## 鍵の確認

<a id="b-1572fd7b67a880aba701e025b84ad6f3"></a>

<pre><code class="language-sh">gpg --list-secret-keys&#10;gpg --armor --export &lt;ID&gt;</code></pre>

<a id="b-1572fd7b67a880e28ea1cd38656cbd7e"></a>

## 鍵のgitcommand反映

<a id="b-1572fd7b67a880f29ea2df20c342d4b9"></a>

<pre><code class="language-sh">git config --global commit.gpgsign true&#10;git config --global user.signingkey &lt;ID&gt;</code></pre>

<a id="b-1572fd7b67a8802ea80ac7acb2a4eb52"></a>

## 鍵の削除

<a id="b-1572fd7b67a8803ea7dad8d89cea9537"></a>

<pre><code class="language-sh">gpg --list-secret-keys --keyid-format LONG #uidを確認&#10;gpg --delete-secret-keys &lt;ID&gt;</code></pre>
