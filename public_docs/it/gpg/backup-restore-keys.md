---
title: "GPG保管"
---

# GPG保管

[公開メモ](../../README.md) / [IT](../README.md) / [GPG](README.md) / GPG保管

## export

```sh
# 公開鍵
gpg --armor --export <user-id> > public.key

# 秘密鍵
gpg --export-secret-keys --armor <user-id> > privkey.asc
```

## import

```sh
gpg --import public.key
gpg --import privkey.asc
```

#### trust

```sh
gpg --edit-key <GPG key id> trust quit
```
