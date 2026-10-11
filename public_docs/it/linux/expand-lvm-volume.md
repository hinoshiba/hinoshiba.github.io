---
title: "lvm最大化"
---

# **lvm最大化**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / lvm最大化

```sh
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
sudo vgdisplay
sudo resize2fs /dev/ubuntu-vg/ubuntu-lv
```
