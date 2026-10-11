---
title: "imageからdockerfile復元"
---

<a id="b-1572fd7b67a88026ab8ee25a68c85a08"></a>

# <strong>imageからdockerfile復元</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Docker](README.md) / imageからdockerfile復元</span>
<!-- migration-navigation:end -->

1. <a id="b-1572fd7b67a88067bcebc28763ad9468"></a>dockerfileを復元する

1. <a id="b-1572fd7b67a88083ba19d0127d089f75"></a>dockerfileに含めるファイルをcontainerからcpする

<a id="b-1572fd7b67a880f18867e9fa870d4345"></a>

## 1\. dockerfileを復元する

<a id="b-1572fd7b67a880f0ba98f8ed3413a88b"></a>

<code>docker history centos:7 --no-trunc --format '' | tac</code>

<a id="b-1572fd7b67a880a996c9cd7b6cec69fe"></a>

## 2\. dockerfileに含めるファイルをcontainerからcpする

1. <a id="b-1572fd7b67a880b6809eef3fc5c96147"></a><code>1. dockerfileを復元する</code> から、ADD 等の追加されているものを確認する

1. <a id="b-1572fd7b67a880959f44fca6449f612b"></a>imageの生成

   <a id="b-1572fd7b67a880ba9a17f9c6f9b81484"></a>

   <code>docker create &lt;imange name&gt;</code>

1. <a id="b-1572fd7b67a88099839fdef6d8ca2b1f"></a>idの確認

   <a id="b-1572fd7b67a88025941fd1de6f988b94"></a>

   <code>docker ps -a</code>

1. <a id="b-1572fd7b67a88027a34fc5e74ee87a38"></a>copy

   <a id="b-1572fd7b67a88009a64cde527f614478"></a>

   <code>docker cp &lt;container_id&gt;:&lt;filepath&gt; ./</code>

1. <a id="b-1572fd7b67a880248ebcf2b9de4ddcc3"></a>削除

   <a id="b-1572fd7b67a880b5be67dc22db83398f"></a>

   <code>docker rm &lt;container_id&gt;</code>
