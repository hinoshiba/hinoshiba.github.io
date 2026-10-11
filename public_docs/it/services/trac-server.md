---
title: "trac"
---

<a id="b-1572fd7b67a8805591c8e04ceb3d62d7"></a>

# trac

<!-- migration-navigation:start -->
<span class="docs-breadcrumbs">[公開メモ](../../README.md) / [IT](../README.md) / [Service](README.md) / trac</span>
<!-- migration-navigation:end -->

- <a id="b-1572fd7b67a8800f8826df39aa51668a"></a>ubuntu 18\.04時点のメモ

1. <a id="b-1572fd7b67a88092b4e8fa00cdaa394b"></a>依存パッケージのインストール

   <a id="b-1572fd7b67a880279e64ec8405882a29"></a>



   <pre><code> sudo -E apt install curl python subversion nginx&#10; # svnには、必要に応じてproxy設定をする</code></pre>


1. <a id="b-1572fd7b67a88014ae8bfcbc76aa0bce"></a>pip2のインストール

   <a id="b-1572fd7b67a880afa253e7f330fbe154"></a>



   <pre><code> curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"&#10; sudo -E python get-pip.py&#10; pip --version</code></pre>


1. <a id="b-1572fd7b67a880239467fbd39003a971"></a>tracのインストール

   <a id="b-1572fd7b67a880e3b06bf3693c006068"></a>



   <pre><code> sudo -E pip install Trac==1.4.2&#10; sudo -E easy_install Genshi</code></pre>


1. <a id="b-1572fd7b67a880b89414c96ab2156424"></a>pluginのインストール

   <a id="b-1572fd7b67a8809b9954de58668eb9bb"></a>



   <pre><code> sudo -E easy_install -Z http://trac-hacks.org/svn/accountmanagerplugin/trunk</code></pre>


1. <a id="b-1572fd7b67a880b48b88e39412b2a3bb"></a>実行ユーザとディレクトリの作成

   <a id="b-1572fd7b67a880c6979cce713bee9591"></a>



   <pre><code> sudo mkdir -p /var/service/trac&#10; sudo useradd -r trac-user&#10; sudo chown trac-user. -R /var/service/trac</code></pre>


1. <a id="b-1572fd7b67a880cbaff9ce6778013a2c"></a>systemdファイル作成

   - <a id="b-1572fd7b67a880af9ac6fd81d6e62a2f"></a><code>/etc/systemd/system/tracd.service</code>

     <a id="b-1572fd7b67a8803eb747e02c39db654a"></a>



     <pre><code>  [Unit]&#10;  Description=Trac Server&#10;  [Service]&#10;  WorkingDirectory=/var/service/trac&#10;  ExecStart=/usr/local/bin/tracd -d -p 8000 --pidfile=/var/run/tracd.pid -e /var/service/trac&#10;  ExecStop=/usr/bin/kill -QUIT $MAINPID&#10;  Type=forking&#10;  PIDFile=/var/run/tracd.pid&#10;  [Install]&#10;  WantedBy=multi-user.target</code></pre>

1. <a id="b-1572fd7b67a880e886e2cc1ff03ab6cd"></a>起動確認

   <a id="b-1572fd7b67a8804ea110cbf07a1a19da"></a>



   <pre><code> sudo systemctl daemon-reload&#10; sudo systemctl restart tracd&#10; systemctl status tracd</code></pre>


1. <a id="b-1572fd7b67a880ab80ddf4cdf5ba21d0"></a>ファイルの展開

   - <a id="b-1572fd7b67a880d590deeb0c192d2a61"></a><code>/var/service/trac</code>上に展開する

1. <a id="b-1572fd7b67a8804486e4ce46a34c441f"></a>動作確認

1. <a id="b-1572fd7b67a88011b179d57b5d56cd34"></a>nginx設定

   - <a id="b-1572fd7b67a8804d9733fbd7ecad45c0"></a><code>/etc/nginx/sites-available/default</code> 

     <a id="b-1572fd7b67a880d3a64fe2da19b876f3"></a>

     <pre><code class="language-sh">  upstream local_trac {&#10;          server  127.0.0.1:8000;&#10;  }&#10;&#10;  server {&#10;          listen 62443 default ssl http2;&#10;          ssl on;&#10;          server_name  example.com;&#10;          root   /usr/share/nginx/html;&#10;&#10;          ssl_prefer_server_ciphers  on;&#10;          ssl_ciphers  'ECDH !aNULL !eNULL !SSLv2 !SSLv3';&#10;          ssl_certificate  /etc/nginx/pem/fullchain.pem;&#10;          ssl_certificate_key  /etc/nginx/pem/privkey.pem;&#10;          location / {&#10;                  proxy_pass      http://local_trac;&#10;                  client_max_body_size 2g;&#10;                  proxy_connect_timeout 60;&#10;                  proxy_read_timeout 60;&#10;                  proxy_send_timeout 600;&#10;          }&#10;&#10;          error_page   500 502 503 504  /50x.html;&#10;          location = /50x.html {&#10;                  root   /usr/share/nginx/html;&#10;          }&#10;  }</code></pre>

1. <a id="b-1572fd7b67a880aca63cca0c4531dcc8"></a>pem設置

1. <a id="b-1572fd7b67a88070833ae1b9d047d497"></a>nginx起動

   <a id="b-1572fd7b67a8809ab525d296c9c55308"></a>



   <pre><code>sudo systemctl restart nginx&#10;systemctl status nginx</code></pre>


<a id="b-1572fd7b67a880809f1fcf3fa914726a"></a>
