---
title: "クロスコンパイル"
---

# クロスコンパイル

[公開メモ](../../README.md) / [IT](../README.md) / [Docker](README.md) / クロスコンパイル

- 対応可能一覧を確認

  `docker buildx ls`

- build環境の用意

  ```sh
  docker buildx create --name <buildername>
  docker buildx use <buildername>
  docker buildx inspect --bootstrap
  ```

- build

  ```sh
  docker buildx build --platform linux/arm64,linux/amd64,linux/386,linux/s390x,linux/arm/v7,linux/arm/v6 -t <username>/<image name>:<version> --push .
  ```

- build環境の削除

  ```sh
  docker buildx use default
  docker buildx inspect --bootstrap
  docker buildx stop <buildername>
  docker buildx rm <buildername>
  ```
