---
title: "uuidでmount"
---

<a id="b-1572fd7b67a88056bde4c496706fab41"></a>

# <strong>uuidでmount</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / uuidでmount</span>
<!-- migration-navigation:end -->

1. <a id="b-1572fd7b67a88034bb0de6b18ef88544"></a>uuid確認

   <a id="b-1572fd7b67a880339729fafe0f0a1220"></a>

   <pre><code class="language-sh">user@host:~$ ls -l /dev/disk/by-uuid/&#10;total 0&#10;lrwxrwxrwx 1 root root 10 Apr 25 14:10 bcc4d7a8-543a-407f-a330-c83735f50431 -&gt; ../../sdb1</code></pre>

1. <a id="b-1572fd7b67a88077bd5af3349cb0f078"></a><code>/etc/fstab</code>の更新

   <a id="b-1572fd7b67a88013a766d459426a8424"></a>

   <pre><code class="language-sh">/dev/disk/by-uuid/bcc4d7a8-543a-407f-a330-c83735f50431 &lt;target&gt; ext4 defaults,noatime 0 2</code></pre>

1. <a id="b-1572fd7b67a880fab4a2ded339c63262"></a>mount

   <a id="b-1572fd7b67a8806e99bdc6f2515cf6c5"></a>

   <code>sudo mount -a</code>
