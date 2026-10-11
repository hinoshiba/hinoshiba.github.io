---
title: "secureerase"
---

<a id="b-1572fd7b67a880869d37e3f6d0cf8938"></a>

# <strong>secureerase</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / secureerase</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a880319c1af39e0a2d6635"></a>

## 手順

1. <a id="b-1572fd7b67a88020b70fc8684e6dce01"></a>一回suspendにしてfrozenを外す

   <a id="b-1572fd7b67a880a4872fdcda7fd3fbc6"></a>



   <pre><code> sudo systemctl suspend</code></pre>


1. <a id="b-1572fd7b67a8805cb89ec644cc3a8db0"></a>消去前のパスワードセット

   <a id="b-1572fd7b67a88030bc2fff01d507eac6"></a>



   <pre><code> sudo hdparm --user-master u --security-set-pass aaaaa /dev/sdX</code></pre>


1. <a id="b-1572fd7b67a880acac06f45d655bb920"></a>消去

   <a id="b-1572fd7b67a880f8afdbd254cd34c2ea"></a>



   <pre><code> sudo hdparm --user-master u --security-erase aaaaa /dev/sdX</code></pre>


<a id="b-1572fd7b67a8804f94c1d9669b818885"></a>

### <strong>パラメータ確認</strong>

<a id="b-1572fd7b67a88030b63bcc6e6f975c28"></a>

<pre><code class="language-sh">sudo hdparm -I /dev/sdX</code></pre>

<a id="b-1572fd7b67a8804d925fee8433d17c75"></a>

<pre><code class="language-sh">Security: &#10;        Master password revision code = 65534&#10;                supported&#10;                enabled #ここが、パスワード設定だと、enable。secure erase後は、not enableに変わる&#10;        not     locked&#10;        not     frozen&#10;        not     expired: security count&#10;                supported: enhanced erase&#10;        Security level high&#10;        2min for SECURITY ERASE UNIT. 2min for ENHANCED SECURITY ERASE UNIT.</code></pre>
