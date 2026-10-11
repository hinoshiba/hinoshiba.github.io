---
title: "chonryd"
---

# **chonryd**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / chonryd

1. ntpdが入っているなら消す

   ```text
   sudo apt purge ntp
   ```

1. chronyd インストール

   ```text
   sudo -E apt install chrony
   ```

1. 設定をする

   - /etc/chrony/chrony\.conf

     - `ntp1.jst.mfeed.ad.jp`

     - `ntp2.jst.mfeed.ad.jp`

     - `ntp3.jst.mfeed.ad.jp`

1. 自動起動と有効化

   ```text
   systemctl enable chrony --now
   ```

1. 動作確認

   `chronyc sources`
