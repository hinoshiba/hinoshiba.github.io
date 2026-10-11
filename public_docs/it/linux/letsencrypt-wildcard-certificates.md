---
title: "ssl証明書オペレーション"
---

<a id="b-1572fd7b67a8805da1eae6461966e1ea"></a>

# <strong>ssl証明書オペレーション</strong>

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / ssl証明書オペレーション</span>
<!-- migration-navigation:end -->

- <a id="b-1572fd7b67a8808aa284cb059881e1fc"></a>[Let’s Encrypt](https://letsencrypt.org/) で、ワイルドカード証明書で運用

<a id="b-1572fd7b67a88064bb2ac6d891967296"></a>

## 定常対応

1. <a id="b-1572fd7b67a8801596b0ccfa66a79dbd"></a>起動

   <a id="b-1572fd7b67a880b8bed4c59dbbf3e1ac"></a>

   <pre><code class="language-sh">mkdir ~/Downloads/work&#10;cp /etc/letsencrypt/cli.ini ~/Downloads/work&#10;certbot certonly --manual --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory -m ichigx0f.hinoshiba@gmail.com -d hinoshiba.com -d "*.hinoshiba.com" -d "*.i.hinoshiba.com" --work-dir ~/Downloads/work --logs-dir ~/Downloads/work --config-dir ~/Downloads/work</code></pre>

1. <a id="b-1572fd7b67a8803ebc1aeabb6fc1cd8c"></a>対話\(利用規約とか、公開設定とか。\)

   <a id="b-1572fd7b67a88031a300e72a57dac895"></a>

   <pre><code class="language-sh">Please read the Terms of Service at https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must agree in order to register with the ACME server at https://acme-v02.api.letsencrypt.org/directory&#10;&#10;---&#10;&#10;(A)gree/(C)ancel: A&#10;&#10;---&#10;&#10;Would you be willing to share your email address with the Electronic Frontier Foundation, a founding partner of the Let’s Encrypt project and the non-profit organization that develops Certbot? We’d like to send you email about our work encrypting the web, EFF news, campaigns, and ways to support digital freedom.&#10;&#10;---&#10;&#10;(Y)es/(N)o: N&#10;&#10;---&#10;&#10;NOTE: The IP of this machine will be publicly logged as having requested this certificate. If you’re running certbot in manual mode on a machine that is not your server, please ensure you’re okay with that.&#10;&#10;Are you OK with your IP being logged?&#10;&#10;---&#10;&#10;(Y)es/(N)o: Y</code></pre>

1. <a id="b-1572fd7b67a880e891a7d7fb79969c8e"></a>TXTに登録するべきtokenが表示されるので、dnsに登録する

1. <a id="b-1572fd7b67a880ac9578e575a5ca2f94"></a>digして確認する

   <a id="b-1572fd7b67a880dd8ad8ffa764eec21e"></a>



   <pre><code> dig -t txt _acme-challenge.hinoshiba.com +short @8.8.8.8</code></pre>


1. <a id="b-1572fd7b67a88026bef3cf9f949e89e6"></a>対話で、Enter

1. <a id="b-1572fd7b67a88052ae25c184a15c2a2e"></a>ファイルが存在することを確認する

   <a id="b-1572fd7b67a8808f9572fd686c4c4ba9"></a>

   <pre><code class="language-sh">ls ~/Downloads/work/live/hinoshiba.com</code></pre>

1. <a id="b-1572fd7b67a880fda334f8891586b0dc"></a>対象のサーバに設定してあげる

   <a id="b-1572fd7b67a880ea8ed9fa8402d02272"></a>

   <pre><code class="language-sh">server {&#10;  ...&#10;  listen 443 ssl;&#10;  ssl_certificate     .../fullchain.pem;&#10;  ssl_certificate_key .../privkey.pem;&#10;  ...&#10;}</code></pre>

<a id="b-1572fd7b67a880efb96feb6635fab2fb"></a>

## 初回インストール

<a id="b-1572fd7b67a880c4981bfb9782e3fe5b"></a>

<code>sudo -E apt install certbot</code>
