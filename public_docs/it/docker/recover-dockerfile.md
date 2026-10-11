---
title: "imageからdockerfile復元"
---

# **imageからdockerfile復元**

[公開メモ](../../README.md) / [IT](../README.md) / [Docker](README.md) / imageからdockerfile復元

1. dockerfileを復元する

1. dockerfileに含めるファイルをcontainerからcpする

## 1\. dockerfileを復元する

`docker history centos:7 --no-trunc --format '' | tac`

## 2\. dockerfileに含めるファイルをcontainerからcpする

1. `1. dockerfileを復元する` から、ADD 等の追加されているものを確認する

1. imageの生成

   `docker create <imange name>`

1. idの確認

   `docker ps -a`

1. copy

   `docker cp <container_id>:<filepath> ./`

1. 削除

   `docker rm <container_id>`
