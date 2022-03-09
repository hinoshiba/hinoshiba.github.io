---
title: "お名前.com DDNS Linux macOS クライアントを作ってみた"
date: 2020-04-20T00:10:44+09:00
categories : ["tools"]
tags : ["tools", "onamae.com", "ddns", "linux", "mac"]
draft: false
---

## 前書き

### お名前.comのDDNSクライアントがWindows版しかない

お名前.com には、DDNSクライアントがあります。  

* [https://help.onamae.com/answer/7923](https://help.onamae.com/answer/7923)

Windows版で、DDNSクライアントがあるだけでもありがたいことですが、  
常設ホストでWindowsを起動しておくほどのコンピュータリソースが弊家にはありません。  

##### いろいろ調べると、試されている方がいる

どうやら、TLSクライアントでそれっぽく会話すると、更新できることを調べている方がいました。  
* [https://qiita.com/ats124/items/59ec0f444d00bbcea27d](https://qiita.com/ats124/items/59ec0f444d00bbcea27d)

---

## Linux版クライアント、macOS版クライアントを作成した

linux(x86)か、mac(m1)で活用したいので、golangで作成してみました。  
[hinoshiba / onamaeddns](https://github.com/hinoshiba/onamaeddns)  
私が使う都合で、2種類だけbuild配布していますが、golangで作成しているので、Windows用もbuildは可能です。(こちらは公式ツールがあるので不要かもしれませんが)  
非公式なので、活用は自己責任でお願いします。  

### インストール手順

1. お好きなバージョンを[ダウンロード](https://github.com/hinoshiba/onamaeddns/releases)
2. 認証情報をファイルに保存
```
$ touch ~/.onamaeddns
$ chmod 600 ~/.onamaeddns
$ echo "username:password" > ~/.onamaeddns
```
3. 実行確認(以下はサンプル)
```
$ onamaeddns testsubdomain example.com 127.0.0.1
```

### これだけでは、グローバルIPアドレスは更新できないので。。。

あくまで、**IPアドレスを更新** することを主目的にしたツールなので、  
お名前.comのクライアントのように、グローバルIPアドレスを更新する機能は有していません。  
もし、グローバルIPアドレスを一緒に更新させたいなら、[このような](https://github.com/hinoshiba/onamaeddns/blob/master/sample/usr/local/bin/ddns_clnt.sh) 簡単なscriptを用意すればすみます。  

サンプルscriptを含めた、使い方は、[こちら](https://github.com/hinoshiba/onamaeddns/blob/master/docs/usage-cli.md) にもまとまっています。  

### 2022/03/10 追記

本ツールと、グローバルIPアドレスを確認するスクリプトを合わせたdocker imageの公開も行いました。  
[https://hub.docker.com/repository/docker/hinoshiba/onamaeddns](https://hub.docker.com/repository/docker/hinoshiba/onamaeddns)  

これにより、ライブラリとして使いたいケース、単にグローバルIPアドレスの更新ツールとして使いたいケース いずれにも対応できました。  

例えば、以下のようなコマンドだけで簡単に実行できます。  
```bash
docker run -it --rm --mount type=bind,src=/home/hinoshiba/.onamaeddns-cred,dst=/etc/onamaeddns/cred,ro -e TARGET_HOST="superhost" -e TARGET_DOMAIN="example.com" hinoshiba/onamaeddns:latest
```
(300秒おきに、`globalip.me` を活用した確認と差分がある場合に更新)  

詳細は、[こちら](https://github.com/hinoshiba/onamaeddns/blob/master/docs/usage-docker.md) の説明を参考にください。  

---

## あとがき

公式様がLinuxクライアント作ってくれないかな。。。。

