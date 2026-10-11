---
title: "nfs"
---

# nfs

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / nfs

1. install

   `sudo -E apt install nfs-common`

1. add fstab

   ```
   ip.add.re.ss:/fs/path /mnt/path nfs async,user,auto,dev,exec,rw,suid  0 0
   ```
