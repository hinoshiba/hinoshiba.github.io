---
title: "brew(x86) Install onM1"
---

<a id="b-1562fd7b67a880a68257efc4e1da82e8"></a>

# <strong>brew\(x86\) Install onM1</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [macOS](README.md) / brew\(x86\) Install onM1</span>
<!-- migration-navigation:end -->

<a id="b-1562fd7b67a880c58f3fe1747c6386a1"></a>

<strong>インストール</strong>

<a id="b-1562fd7b67a8801a9fc7fb6d46970c70"></a>

<pre><code class="language-text">xcode-select --install&#10;softwareupdate --install-rosetta --agree-to-license #rosseta2の有効化&#10;arch -arch x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"## インストールされたPATHを一応気にする</code></pre>

<a id="b-1562fd7b67a8804cb5bfc95eefec39e4"></a>

<strong>使う時\(path通さないなら以下\)</strong>

<a id="b-1562fd7b67a88016a9baefda13e5263c"></a>

<pre><code class="language-text">arch -arch x86_64 /usr/local/bin/brew tap nativeos/i386-elf-toolchain #tapする例&#10;arch -arch x86_64 /usr/local/bin/brew install i386-elf-binutils i386-elf-gcc #インストールする例</code></pre>

- <a id="b-1562fd7b67a880f2a7f2ff544369048e"></a>armのbrewと使い分けるならpath通し方注意

<a id="b-1562fd7b67a880048549faa056559d47"></a>
