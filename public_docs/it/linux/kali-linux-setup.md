---
title: "🛡️ Kali Linux"
---

# 🛡️ Kali Linux

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / 🛡️ Kali Linux

### 1\. docker

[Installing Docker on Kali Linux \| Kali Linux Documentation](https://www.kali.org/docs/containers/installing-docker-on-kali/)

### 2\. host ファイル共有

```bash
sudo vmhgfs-fuse .host:/ /mnt/hgfs/ -o allow_other,uid=1000 
ln -s /mnt/hgfs/ ~/host-shared
sudo vim /etc/systemd/system/vmhgfs-mount.service
sudo systemctl daemon-reload
sudo systemctl enable vmhgfs-mount.service
sudo systemctl start vmhgfs-mount.service
```

#### `/etc/systemd/system/vmhgfs-mount.service` 

```bash
[Unit]
Description=Mount VMware Shared Folders
After=network.target vmtoolsd.service
Requires=vmtoolsd.service

[Service]
Type=oneshot
ExecStart=/usr/bin/mkdir -p /mnt/hgfs
ExecStart=/usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs/ -o allow_other,uid=1000
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

## 3\. sshd enable

```bash
ssh-keygen -t ed25519
sudo systemctl enable ssh --now
```

## 4\. RDP

1. [Setting up RDP with Xfce \| Kali Linux Documentation](https://www.kali.org/docs/general-use/xfce-with-rdp/)

   1. Portはそのまま

   ```bash
   apt-get update
   apt-get full-upgrade -y
   apt-get install -y kali-desktop-xfce xorg xrdp xorgxrdp
   sudo systemctl enable xrdp --now
   ```

1. 以下を追加対応として実施

```bash

sudo adduser xrdp ssl-cert
sudo systemctl restart xrdp
```

## 5\. 使うツールインストール

```bash
sudo -E apt install kali-tools-web burpsuite
```
