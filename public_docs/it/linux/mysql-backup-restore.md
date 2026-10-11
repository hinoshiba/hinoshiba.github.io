---
title: "mysql復旧/保存方法"
---

<a id="b-1572fd7b67a88043b3a6dd4ac27ef5fd"></a>

# <strong>mysql復旧/保存方法</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / mysql復旧/保存方法</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a880129deec0a5f8cf7f0a"></a>

#### 保存

<a id="b-1572fd7b67a8809c9f85c6c20aaa7ffb"></a>

<pre><code class="language-sh">mysqldump --single-transaction -u &lt;user&gt; -p &lt;dbname&gt; &gt; mysql.dump</code></pre>

<a id="b-1572fd7b67a8803080e7ebc2113dbe62"></a>

#### 復旧

1. <a id="b-1572fd7b67a88093adfbe40a9acc433c"></a>DBは、先に存在させる

1. <a id="b-1572fd7b67a88080a234c9fe4cd80c27"></a>import

   <a id="b-1572fd7b67a8804da949d3e73fff10cc"></a>

   <code>mysql -u &lt;user&gt; -p &lt;dbname&gt; &lt; mysql.dump</code>

<a id="b-1572fd7b67a880f8b805ee78e0e120e9"></a>
