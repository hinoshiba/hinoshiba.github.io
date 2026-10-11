---
title: "userとsudo の追加"
---

# **userとsudo の追加**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / userとsudo の追加

1. user追加

```text
sudo adduser <username>
```

1. sudo追加

```text
sudo usermod -aG sudo <username>
```

1. adm追加

`sudo usermod -aG adm <username>`
