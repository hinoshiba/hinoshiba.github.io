---
title: "socks-proxy"
---

# **socks\-proxy**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / socks\-proxy

以下の要領で開通と、curlで試せる

```sh
ssh -D 8080 __ssh_node
# 別local shell
curl -x socks5h://0:8080 https://google.com
```

バックグラウンドで静かにしておくオプション等

```sh
ssh -D 8080 -f -C -q -N __ssh_node
```

firefox等で、socks5指定で通せる
