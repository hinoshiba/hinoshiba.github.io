---
title: "お名前.com DDNS Linux クライアントを作ってみた"
date: 2020-04-20T00:10:44+09:00
categories : ["tools"]
tags : ["tools", "onamae.com", "ddns"]
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

## Linux版クライアントを作成した

linuxか、macで活用したいので、golangで作成してみました。  
* [hinoshiba / go-onamaeddns](https://github.com/hinoshiba/go-onamaeddns)
非公式なので、活用は自己責任でお願いします。  

### インストール手順

1. お好きなバージョンを[ダウンロード](https://github.com/hinoshiba/go-onamaeddns/releases)
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
もし、グローバルIPアドレスを一緒に更新させたいなら、以下のような簡単なscriptを用意すればすみますし。  

```
OLD_PATH="${HOME}/.ddns_clnt"
HOST="test"
DOMAIN="example.com"

n_gip=$(curl -s globalip.me)
o_gip=$(cat ${OLD_PATH})

if [ "${n_gip}" != "${o_gip}" ]; then
	onamaeddns ${HOST} ${DOMAIN} ${n_gip}
	echo -n ${n_gip} > ${OLD_PATH}
fi
```

---

## あとがき

公式様がLinuxクライアント作ってくれないかな。。。。

