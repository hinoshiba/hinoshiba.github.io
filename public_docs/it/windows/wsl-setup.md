---
title: "wsl"
---

<a id="b-1562fd7b67a8801089f4df2fc73025e0"></a>

# wsl

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Windows](README.md) / wsl</span>
<!-- migration-navigation:end -->

<a id="b-1562fd7b67a8809798a8dc5b43d4a09b"></a>

<strong>1\. WSLセットアップ</strong>

<a id="b-1562fd7b67a880afb9b6eca33bde11d6"></a>

<pre><code class="language-text">wsl --install</code></pre>

1. <a id="b-1562fd7b67a880f696b3d2884762fbcf"></a>再起動後スクリプトを実施\(ユーザ作成ぐらい\)

<a id="b-1562fd7b67a880bb8d7ecaf65f59064b"></a>

<strong>2\. SSHの自動有効化とポートフォワーディングの共有</strong>

1. <a id="b-1562fd7b67a880c98138d718d7907985"></a>wsl上でsshをインストール

<a id="b-1562fd7b67a8803d94d1c8de89677b34"></a>

<pre><code class="language-text">sudo apt update&#10;sudo apt install openssh-server&#10;sudo systemctl enable ssh</code></pre>

<a id="b-1562fd7b67a88092ae1ee13fe1535db9"></a>

3\. bridgeの設定

1. <a id="b-1562fd7b67a880319585f3c815b9e994"></a><code>%userprofile%</code>へアクセス

1. <a id="b-1562fd7b67a88095a594f095d8d66cab"></a><code>.wslconfig</code>を設定

<a id="b-1562fd7b67a880c48c40cbd6f75afb79"></a>

<pre><code class="language-text">[wsl2]&#10;networkingMode=bridged&#10;vmSwitch=DefaultBridge&#10;</code></pre>

<a id="b-1562fd7b67a8802eaa85fca879ba8abb"></a>

<strong>4\. cuda install</strong>

1. <a id="b-1562fd7b67a88065989dc66e95f6abbd"></a>以下からDLして、インストール

   - <a id="b-1562fd7b67a88026b7eee7fc67dd03f5"></a>[https://www\.nvidia\.com/Download/index\.aspx?lang=en\-us](https://www.nvidia.com/Download/index.aspx?lang=en-us)

   - <a id="b-1562fd7b67a8806bb82fe317a79b60fa"></a>DownloadType: Studio Driver\(SD\)

1. <a id="b-1562fd7b67a88014a51bdff10261885d"></a>WSLへインストール作業

   <a id="b-1562fd7b67a880caaef9f8db4f8cba72"></a>

   <pre><code class="language-text">wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin&#10;sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600&#10;wget https://developer.download.nvidia.com/compute/cuda/12.0.0/local_installers/cuda-repo-wsl-ubuntu-12-0-local_12.0.0-1_amd64.deb&#10;sudo dpkg -i cuda-repo-wsl-ubuntu-12-0-local_12.0.0-1_amd64.deb&#10;sudo cp /var/cuda-repo-wsl-ubuntu-12-0-local/cuda-*-keyring.gpg /usr/share/keyrings/&#10;sudo apt-get update&#10;sudo apt-get -y install cuda</code></pre>

<a id="b-1562fd7b67a880c8ae40eb487edb5575"></a>

<strong>5\. wslスナップショットの生成</strong>

<a id="b-1562fd7b67a880ec861cecdb85ca24f2"></a>

<pre><code class="language-text">wsl --export Ubuntu C:\Users\&lt;username&gt;\wsl_snapshot\ubuntu_yyyymmdd.tar</code></pre>

<a id="b-1562fd7b67a880a0891dd9923a59519b"></a>

<strong>6\. スナップショットから起動するスクリプトを仕込む</strong>

<a id="b-1562fd7b67a8801ebf91cb7858e29149"></a>

desktop等に以下を設置

<a id="b-1562fd7b67a88050a6bae50e484e2afc"></a>

<pre><code class="language-markdown">wsl --unregister Ubuntu_wk&#10;wsl --import Ubuntu_wk C:\Users\&lt;username&gt;\wsl_vhdx\Ubuntu_wk C:\Users\&lt;username&gt;\wsl_snapshot\ubuntu_20230817.tar&#10;wsl --set-default Ubuntu_wk&#10;wsl --distribution Ubuntu_wk --user &lt;username&gt;</code></pre>

<a id="b-1562fd7b67a880c8bae7d95f26ae4c39"></a>
