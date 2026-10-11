---
title: "trac"
---

# trac

[公開メモ](../../README.md) / [IT](../README.md) / [Service](README.md) / trac

- ubuntu 18\.04時点のメモ

1. 依存パッケージのインストール

   ```
    sudo -E apt install curl python subversion nginx
    # svnには、必要に応じてproxy設定をする
   ```

1. pip2のインストール

   ```
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    sudo -E python get-pip.py
    pip --version
   ```

1. tracのインストール

   ```
    sudo -E pip install Trac==1.4.2
    sudo -E easy_install Genshi
   ```

1. pluginのインストール

   ```
    sudo -E easy_install -Z http://trac-hacks.org/svn/accountmanagerplugin/trunk
   ```

1. 実行ユーザとディレクトリの作成

   ```
    sudo mkdir -p /var/service/trac
    sudo useradd -r trac-user
    sudo chown trac-user. -R /var/service/trac
   ```

1. systemdファイル作成

   - `/etc/systemd/system/tracd.service`

     ```
       [Unit]
       Description=Trac Server
       [Service]
       WorkingDirectory=/var/service/trac
       ExecStart=/usr/local/bin/tracd -d -p 8000 --pidfile=/var/run/tracd.pid -e /var/service/trac
       ExecStop=/usr/bin/kill -QUIT $MAINPID
       Type=forking
       PIDFile=/var/run/tracd.pid
       [Install]
       WantedBy=multi-user.target
     ```

1. 起動確認

   ```
    sudo systemctl daemon-reload
    sudo systemctl restart tracd
    systemctl status tracd
   ```

1. ファイルの展開

   - `/var/service/trac`上に展開する

1. 動作確認

1. nginx設定

   - `/etc/nginx/sites-available/default` 

     ```sh
       upstream local_trac {
               server  127.0.0.1:8000;
       }

       server {
               listen 62443 default ssl http2;
               ssl on;
               server_name  example.com;
               root   /usr/share/nginx/html;

               ssl_prefer_server_ciphers  on;
               ssl_ciphers  'ECDH !aNULL !eNULL !SSLv2 !SSLv3';
               ssl_certificate  /etc/nginx/pem/fullchain.pem;
               ssl_certificate_key  /etc/nginx/pem/privkey.pem;
               location / {
                       proxy_pass      http://local_trac;
                       client_max_body_size 2g;
                       proxy_connect_timeout 60;
                       proxy_read_timeout 60;
                       proxy_send_timeout 600;
               }

               error_page   500 502 503 504  /50x.html;
               location = /50x.html {
                       root   /usr/share/nginx/html;
               }
       }
     ```

1. pem設置

1. nginx起動

   ```
   sudo systemctl restart nginx
   systemctl status nginx
   ```
