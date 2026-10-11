---
title: "🛡️ Kali Linux"
---

<a id="b-2472fd7b67a8806dbe93cc8cb835c777"></a>

# 🛡️ Kali Linux

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / 🛡️ Kali Linux</span>
<!-- migration-navigation:end -->

<a id="b-2472fd7b67a880519a56cb90c7af1eef"></a>

### 1\. docker

<a id="b-2472fd7b67a880828193df5cb601f6d9"></a>

[Installing Docker on Kali Linux \| Kali Linux Documentation](https://www.kali.org/docs/containers/installing-docker-on-kali/)

<a id="b-2472fd7b67a880ddb970d23683cea4a7"></a>

### 2\. host ファイル共有

<a id="b-24f2fd7b67a880bca666c536f3b35096"></a>

<pre><code class="language-bash">sudo vmhgfs-fuse .host:/ /mnt/hgfs/ -o allow_other,uid=1000 &#10;ln -s /mnt/hgfs/ ~/host-shared&#10;sudo vim /etc/systemd/system/vmhgfs-mount.service&#10;sudo systemctl daemon-reload&#10;sudo systemctl enable vmhgfs-mount.service&#10;sudo systemctl start vmhgfs-mount.service</code></pre>

<a id="b-24f2fd7b67a88071911dc76d96cdcb7f"></a>

#### <code>/etc/systemd/system/vmhgfs-mount.service</code> 

<a id="b-24f2fd7b67a88033995ae13c9c6fe00c"></a>

<pre><code class="language-bash">[Unit]&#10;Description=Mount VMware Shared Folders&#10;After=network.target vmtoolsd.service&#10;Requires=vmtoolsd.service&#10;&#10;[Service]&#10;Type=oneshot&#10;ExecStart=/usr/bin/mkdir -p /mnt/hgfs&#10;ExecStart=/usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs/ -o allow_other,uid=1000&#10;RemainAfterExit=yes&#10;&#10;[Install]&#10;WantedBy=multi-user.target&#10;</code></pre>

<a id="b-24f2fd7b67a880798387d0502f483ba5"></a>

## 3\. sshd enable

<a id="b-24f2fd7b67a88072b89efa81c8cd81ef"></a>

<pre><code class="language-bash">ssh-keygen -t ed25519&#10;sudo systemctl enable ssh --now</code></pre>

<a id="b-2522fd7b67a88044beabfed3803458fc"></a>

## 4\. RDP

1. <a id="b-2522fd7b67a8808fb3c2f5756926d3e8"></a>[Setting up RDP with Xfce \| Kali Linux Documentation](https://www.kali.org/docs/general-use/xfce-with-rdp/)

   1. <a id="b-2522fd7b67a880c09ca9ebf1b3985b12"></a>Portはそのまま

   <a id="b-2522fd7b67a88046868bf12a97d1f907"></a>

   <pre><code class="language-bash">apt-get update&#10;apt-get full-upgrade -y&#10;apt-get install -y kali-desktop-xfce xorg xrdp xorgxrdp&#10;sudo systemctl enable xrdp --now</code></pre>

1. <a id="b-2522fd7b67a88036a8c0f0bc409f7275"></a>以下を追加対応として実施

<a id="b-2522fd7b67a8809a835efb7f67eea0e4"></a>

<pre><code class="language-bash">&#10;sudo adduser xrdp ssl-cert&#10;sudo systemctl restart xrdp</code></pre>

<a id="b-2522fd7b67a880259723ebf4d423a20e"></a>

## 5\. 使うツールインストール

<a id="b-2522fd7b67a880efb129f2c1148c8f11"></a>

<pre><code class="language-bash">sudo -E apt install kali-tools-web burpsuite</code></pre>
