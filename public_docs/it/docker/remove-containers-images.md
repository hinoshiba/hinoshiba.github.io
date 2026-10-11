---
title: "docker 全部削除系"
---

<a id="b-1572fd7b67a88087a906fb289fcb15be"></a>

# <strong>docker 全部削除系</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Docker](README.md) / docker 全部削除系</span>
<!-- migration-navigation:end -->

- <a id="b-1572fd7b67a88068aee4e7e6f2119eff"></a>全てのコンテナ削除

  - <a id="b-1572fd7b67a880e7af6dccec8680a7de"></a><code>docker ps -aq | xargs docker rm</code>

- <a id="b-1572fd7b67a880c48297c5face4edbb0"></a>全てのイメージ削除

  - <a id="b-1572fd7b67a88040902ddea9ee91cebe"></a><code>docker images -aq | xargs docker rmi</code>

<a id="b-1572fd7b67a880d3b781d8749b326298"></a>
