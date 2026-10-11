---
title: "secureerase"
---

# **secureerase**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / secureerase

## 手順

1. 一回suspendにしてfrozenを外す

   ```
    sudo systemctl suspend
   ```

1. 消去前のパスワードセット

   ```
    sudo hdparm --user-master u --security-set-pass aaaaa /dev/sdX
   ```

1. 消去

   ```
    sudo hdparm --user-master u --security-erase aaaaa /dev/sdX
   ```

### **パラメータ確認**

```sh
sudo hdparm -I /dev/sdX
```

```sh
Security: 
        Master password revision code = 65534
                supported
                enabled #ここが、パスワード設定だと、enable。secure erase後は、not enableに変わる
        not     locked
        not     frozen
        not     expired: security count
                supported: enhanced erase
        Security level high
        2min for SECURITY ERASE UNIT. 2min for ENHANCED SECURITY ERASE UNIT.
```
