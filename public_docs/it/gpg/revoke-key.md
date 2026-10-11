---
title: "gpg revoke"
---

# **gpg revoke**

[公開メモ](../../README.md) / [IT](../README.md) / [GPG](README.md) / gpg revoke

#### 失効

```sh
gpg --edit-key <id>
> revkey
> ...
> save
```

#### githubへ失効を登録する場合

1. 同一キーのGPGキーを削除する

1. 再エクスポートを行い、GPGキーを登録する
