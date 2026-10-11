---
title: "bashのflock"
---

# **bashのflock**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / bashのflock

スクリプト自体をflock試み、ダメであればnonblockで終了する文字列

```sh
exec {lock_fd}< "$0"
flock --nonblock ${lock_fd} || exit 0
```
