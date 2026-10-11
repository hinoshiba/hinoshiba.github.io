---
title: "update ssh config"
---

<a id="b-1562fd7b67a880238435c0ab62769674"></a>

# <strong>update ssh config</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / update ssh config</span>
<!-- migration-navigation:end -->

1. <a id="b-1562fd7b67a880e7ba3dce2521349a88"></a>書き換えの実施

   - <a id="b-1562fd7b67a8803ab3feec09bcf1f348"></a><code>/etc/ssh/sshd_config</code>

     - <a id="b-1562fd7b67a880fbba3ff03d5eeee4aa"></a><code>PermitRootLogin no</code>

     - <a id="b-1562fd7b67a880cb84e2ef764c1e4a56"></a><code>PasswordAuthentication no</code>

     - <a id="b-1562fd7b67a8807ea62fd9c07257d842"></a><code>PubkeyAuthentication yes</code>

1. <a id="b-1562fd7b67a8807daf22e95f898a94ad"></a>再起動

   - <a id="b-1562fd7b67a880bdb8fed295befbf4e4"></a><code>systemctl restart sshd</code>
