---
title: "timezone jst"
---

<a id="b-1562fd7b67a8805b9da0c4cc468e6dc2"></a>

# <strong>timezone jst</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / timezone jst</span>
<!-- migration-navigation:end -->

1. <a id="b-1562fd7b67a880cda099d0d5cc8988fc"></a>timezone確認

   <a id="b-1562fd7b67a880339326db50dbac21e0"></a>

   <pre><code class="language-text">timedatectl&#10;</code></pre>

1. <a id="b-1562fd7b67a880aeb370e78b52422c71"></a>tokyoの名前を確認

   <a id="b-1562fd7b67a880b683e3ea89bb19f087"></a>

   <pre><code class="language-text">timedatectl list-timezones | grep -i tokyo&#10;</code></pre>

1. <a id="b-1562fd7b67a880878781f1b50fcadde5"></a>2で確認した名前を設定

   <a id="b-1562fd7b67a88096962ad1552055175d"></a>

   <code>sudo timedatectl set-timezone Asia/Tokyo</code>

<a id="b-1562fd7b67a88016bbb1cf1d6d42615c"></a>
