---
title: "nfs"
---

<a id="b-1572fd7b67a880858405fedf5a18ffd2"></a>

# nfs

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / nfs</span>
<!-- migration-navigation:end -->

1. <a id="b-1572fd7b67a88087a38dd8caac859349"></a>install

   <a id="b-1572fd7b67a880dc90c6dd99824b840a"></a>

   <code>sudo -E apt install nfs-common</code>

1. <a id="b-1572fd7b67a880f9a8d0c7b45e4a122d"></a>add fstab

   <a id="b-1572fd7b67a88015aafad1982fb0abf5"></a>



   <pre><code>ip.add.re.ss:/fs/path /mnt/path nfs async,user,auto,dev,exec,rw,suid  0 0</code></pre>


<a id="b-1572fd7b67a880e3945aca335635c29c"></a>
