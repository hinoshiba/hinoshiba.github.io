<a id="b-1562fd7b67a880feafccfbfbe9e49d13"></a>

# nftables

[← Linux](1572fd7b-67a8-8050-a862-f0c2072a74ff.md)

1. <a id="b-1562fd7b67a880cebd82d9e59bb5e868"></a>nftインストール

   1. <a id="b-1562fd7b67a880099d1df203d46e017e"></a>ufw無効

      1. <a id="b-1562fd7b67a880189561c3d0108ef4d7"></a><code>sudo ufw disable</code>

      1. <a id="b-1562fd7b67a8801d8512f2a721a73bfb"></a><code>sudo systemctl stop ufw</code>

      1. <a id="b-1562fd7b67a88034896dfb0473521fca"></a><code>sudo systemctl disable ufw</code>

      1. <a id="b-1562fd7b67a880629cddd696dfb50fed"></a><code>reboot</code>

   1. <a id="b-1562fd7b67a8802c8d53ca54bf3a1853"></a><code>sudo apt install nftables</code>

   1. <a id="b-1562fd7b67a8808da40cffd4f8314956"></a><code>sudo update-alternatives --config iptables</code>

      - <a id="b-1562fd7b67a880c2af2afad7f8c95854"></a>nftablesを選択

   1. <a id="b-1562fd7b67a880729f4bfc516c8b2dc8"></a><code>sudo vim /etc/nftables.conf</code>

      <a id="b-1562fd7b67a88005b709f95f708208ab"></a>

      <pre><code class="language-text">#!/usr/sbin/nft -f&#10;flush ruleset&#10;&#10;table inet filter {&#10;  chain input {&#10;&#9;type filter hook input priority 0; policy drop;&#10;&#10;&#9;iifname "lo" counter accept&#10;&#10;&#9;ct state established,related counter accept&#10;&#10;&#9;ct state new tcp dport 22 counter accept&#10;  }&#10;&#10;  chain forward {&#10;&#9;type filter hook forward priority 0; policy drop;&#10;  }&#10;&#10;  chain output {&#10;&#9;type filter hook output priority 0; policy accept;&#10;  }&#10;}&#10;</code></pre>

   1. <a id="b-1562fd7b67a8807db9d2f90a28747497"></a>起動と有効化

      - <a id="b-1562fd7b67a88096855dfaf10655c286"></a><code>systemctl enable nftables --now</code>

   1. <a id="b-1562fd7b67a880868b0ecd5dc7e8f531"></a>動作確認

      - <a id="b-1562fd7b67a8809a85f3fcdbf9356b12"></a><code>nft list ruleset</code>

      - <a id="b-1562fd7b67a880ad8394db2da262c256"></a><code>sudo iptables --version</code>

        - <a id="b-1562fd7b67a880248b61c2be2d01caa1"></a><code>iptables v1.8.4 (nf_tables)</code>
