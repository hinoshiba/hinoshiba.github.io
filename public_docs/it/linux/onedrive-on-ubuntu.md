---
title: "onedriveAtUbuntu"
---

<a id="b-1572fd7b67a880c49719e76cfbb3ac62"></a>

# <strong>onedriveAtUbuntu</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / onedriveAtUbuntu</span>
<!-- migration-navigation:end -->

<a id="b-1572fd7b67a880efb345f480978425c9"></a>

## 管理者権限でインストール

1. <a id="b-1572fd7b67a880178982f3691152a851"></a>install

   <a id="b-1572fd7b67a880759b56f8260a02e548"></a>



   <pre><code> sudo -E apt install  build-essential libcurl4-openssl-dev  libsqlite3-dev pkg-config curl</code></pre>


1. <a id="b-1572fd7b67a880a3a222d7d73d84aa82"></a>install dmd

   <a id="b-1572fd7b67a8807aa313c82ced9080b2"></a>



   <pre><code> $ curl -fsS https://dlang.org/install.sh | bash -s dmd</code></pre>


1. <a id="b-1572fd7b67a8807ebff0fee7c2286ef6"></a>source

   <a id="b-1572fd7b67a88048aa9df4960ddfc35a"></a>



   <pre><code> $ source ~/dlang/dmd-2.091.0/activate</code></pre>


1. <a id="b-1572fd7b67a880028723d2a5f1ab5062"></a>OneDrive Free Clientインストール

   <a id="b-1572fd7b67a880569f9ffc012eb17f2a"></a>

    

   <pre><code>(dmd-2.091.0)user$ cd &lt;workpath&gt;&#10; (dmd-2.091.0)user$ git clone https://github.com/abraunegg/onedrive.git&#10; (dmd-2.091.0)user$ cd onedrive&#10; (dmd-2.091.0)user$ ./configure&#10; (dmd-2.091.0)user$ make clean; make&#10; (dmd-2.091.0)user$ sudo make install</code></pre>


<a id="b-1572fd7b67a8802b8449c0ed3ed08dbe"></a>

## 利用者セットアップ

1. <a id="b-1572fd7b67a8807bbbcaf676e0cff91c"></a>初回実行

   <a id="b-1572fd7b67a88066ac95e54922876761"></a>



   <pre><code> $ onedrive&#10; # 出てくるURLをコピー</code></pre>


1. <a id="b-1572fd7b67a880ab85e7c24eebb2e012"></a>onedrive側\(ブラウザで許可\)

1. <a id="b-1572fd7b67a8802bba7afaa4a99c411f"></a>リダイレクトされたURLをコピー

1. <a id="b-1572fd7b67a8804bb781dca2e38242f5"></a><code>Enter the response uri:</code> に貼り付ける

1. <a id="b-1572fd7b67a880d4a43de99c870ffff7"></a>完了

1. <a id="b-1572fd7b67a880079343c3ffd7b644d3"></a>任意の同期

   <a id="b-1572fd7b67a88006afb4c22f90103c98"></a>



   <pre><code> onedrive --synchronize&#10; onedrive --synchronize --single-directory dir_name</code></pre>


<a id="b-1572fd7b67a880fea5ebdc7a79714936"></a>

## 参考

- <a id="b-1572fd7b67a880cd8c3cdab9de136f97"></a>[https://www\.virment\.com/setup\-onedrive\-ubuntu18\-04/](https://www.virment.com/setup-onedrive-ubuntu18-04/)
