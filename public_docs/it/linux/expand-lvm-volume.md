---
title: "lvm最大化"
---

<a id="b-1572fd7b67a88065a905d41f411c3de3"></a>

# <strong>lvm最大化</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / lvm最大化</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a880febf30f2f61537c15e"></a>

<pre><code class="language-sh">sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv&#10;sudo vgdisplay&#10;sudo resize2fs /dev/ubuntu-vg/ubuntu-lv</code></pre>

<a id="b-1572fd7b67a8808881a3f61bc0e42df8"></a>
