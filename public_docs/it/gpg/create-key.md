---
title: "gpg作成"
---

# **gpg作成**

[公開メモ](../../README.md) / [IT](../README.md) / [GPG](README.md) / gpg作成

#### 作成

`gpg --full-generate-key`

- 選択肢

  - \(1\) RSA と RSA \(デフォルト\)

  - 鍵長は? \(3072\) 4096

  - 鍵の有効期間は? \(0\) 0

  - name

    - 

  - email

    - 

#### 作成を確認

`gpg --list-secret-keys --keyid-format LONG`
