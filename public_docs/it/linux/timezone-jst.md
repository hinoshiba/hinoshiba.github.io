---
title: "timezone jst"
---

# **timezone jst**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / timezone jst

1. timezone確認

   ```text
   timedatectl
   ```

1. tokyoの名前を確認

   ```text
   timedatectl list-timezones | grep -i tokyo
   ```

1. 2で確認した名前を設定

   `sudo timedatectl set-timezone Asia/Tokyo`
