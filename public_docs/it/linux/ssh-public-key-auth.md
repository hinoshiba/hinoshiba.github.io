---
title: "update ssh config"
---

# **update ssh config**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / update ssh config

1. 書き換えの実施

   - `/etc/ssh/sshd_config`

     - `PermitRootLogin no`

     - `PasswordAuthentication no`

     - `PubkeyAuthentication yes`

1. 再起動

   - `systemctl restart sshd`
