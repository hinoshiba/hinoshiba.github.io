---
title: "kvm"
---

<a id="b-1572fd7b67a8808fa0c1ccef51b3187b"></a>

# kvm

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / kvm</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a880b19ddde930b0cbb369"></a>

### install

<a id="b-1572fd7b67a880f69e56ee8c5373e450"></a>

<pre><code class="language-sh">sudo -E apt install qemu-kvm virt-manager bridge-utils ovmf</code></pre>

<a id="b-1572fd7b67a880628961f15037251c82"></a>

### <strong>enable kvm console</strong>

<a id="b-1572fd7b67a880f085cccb1014b37c45"></a>

#### ubuntu 18\.04

1. <a id="b-1572fd7b67a880fa87d9c9a29ddf2921"></a><code>/etc/default/grub</code>を編集

   <a id="b-1572fd7b67a8808687b5da6f7c7c0be9"></a>

   <pre><code class="language-sh">GRUB_CMDLINE_LINUX="console=tty1 console=ttyS0,115200"&#10;GRUB_TERMINAL="console serial"&#10;GRUB_SERIAL_COMMAND="serial --speed=115200 --unit=0 --word=8 --parity=no --stop=1"</code></pre>

1. <a id="b-1572fd7b67a880fda48ec18808c1606a"></a>update

   <a id="b-1572fd7b67a880d797f8f8802b129326"></a>



   <pre><code> sudo update-grub</code></pre>


1. <a id="b-1572fd7b67a880afb852e15fa5ab317f"></a>boot後のconsoleを有効化

   <a id="b-1572fd7b67a880de9aebe07ed45c56c2"></a>



   <pre><code>systemctl start serial-getty@ttyS0&#10; systemctl enable serial-getty@ttyS0</code></pre>


1. <a id="b-1572fd7b67a880d7bba3dad2e896b689"></a><code>virsh console &lt;vmname&gt;</code> で取得できることを確認する

1. <a id="b-1572fd7b67a8807db9c5d042e15acde6"></a>rebootして、全て取れることを確認

1. <a id="b-1572fd7b67a88000926af6565f911655"></a><code>ctrl + ]</code> で抜ける

<a id="b-1572fd7b67a8805e973beaefcd63214a"></a>

#### cnetos

1. <a id="b-1572fd7b67a8809887a7dca587aab69e"></a><code>/etc/default/grub</code>を編集

   <a id="b-1572fd7b67a880939878c2d1bfa3e4da"></a>

   <pre><code class="language-sh"># GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet" #old&#10; GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet console=ttyS0" #new</code></pre>

1. <a id="b-1572fd7b67a8804190f4fa1b9e4d79a8"></a><code>sudo grub2-mkconfig -o /boot/grub2/grub.cfg</code> を実施

1. <a id="b-1572fd7b67a88092966bc7549e8b9f6a"></a>reboot

1. <a id="b-1572fd7b67a8805a840efc22358b84ac"></a><code>virsh console &lt;vmname&gt;</code> で取得できることを確認する

1. <a id="b-1572fd7b67a88087bf64e894c09967e4"></a>boot後のconsoleを有効化

   <a id="b-1572fd7b67a8808599fcdafa18a9505e"></a>

   <pre><code class="language-sh">systemctl start serial-getty@ttyS0&#10;systemctl enable serial-getty@ttyS0</code></pre>

1. <a id="b-1572fd7b67a880568a80c64b4033dcdf"></a><code>virsh console &lt;vmname&gt;</code> で取得できることを確認する

1. <a id="b-1572fd7b67a88064a62feabedf6e48be"></a>rebootして、全て取れることを確認

1. <a id="b-1572fd7b67a88002a5b0df3c0c4a7dd7"></a><code>ctrl + ]</code> で抜ける
