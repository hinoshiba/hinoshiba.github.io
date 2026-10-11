---
title: "localbranchの一括削除"
---

# **localbranchの一括削除**

[公開メモ](../../README.md) / [IT](../README.md) / [Git](README.md) / localbranchの一括削除

## 手元にあるリモートローカルbranchの削除

```sh
git fetch --prune
```

## 手元にある同名のローカルbranchも一括削除

```sh
git fetch --prune && for branch in $(git branch -vv | grep ': gone]' | awk '{print $1}'); do git branch -d $branch; done
```
