---
title: "gui workstation"
---

# gui workstation

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / gui workstation

### xfce4

```markdown
sudo -E apt install -y xubuntu-desktop
Default display manager: >> lightdm
```

### **japanese**

1. install and setup

   ```text
   sudo -E apt install language-pack-ja-base language-pack-ja ibus-mozc
   localectl set-locale LANG=ja_JP.UTF-8 LANGUAGE="ja_JP:ja"
   source /etc/default/locale
   echo $LANG
   ```

1. reboot

1. 言語サポートの更新

   - proxyはいかだと、直接インストールできないので、pakage一覧を確認したら、手で入れる

1. ディレクトリの英字化

   `LANG=C xdg-user-dirs-gtk-update`

### **firefox\_esr**

1. remove firefox

   ```text
   sudo -E apt purge firefox
   ```

1. install firefox esr

   ```text
   sudo -E add-apt-repository ppa:mozillateam/ppa
   sudo -E apt-get update
   sudo -E apt install firefox-esr
   ```

1. 日本語プラグイン追加

   - `設定>言語設定>日本語>再起動`

### **opera**

1. repository追加

   ```text
   wget -qO- https://deb.opera.com/archive.key | sudo apt-key add -
   echo deb https://deb.opera.com/opera-stable/ stable non-free | sudo tee /etc/apt/sources.list.d/opera.list
   ```

1. install

   `sudo -E apt install opera-stable`

### **choromium**

`sudo -E apt install choromium-browser` 

### **rdp**

1. install

   ```text
   sudo -E apt install xrdp
   ```

1. update config

   ```text
   sudo sed -e 's/^new_cursors=true/new_cursors=false/g' -i /etc/xrdp/xrdp.ini
   sudo systemctl enable xrdp
   ```

1. reload config

   ```text
   sudo systemctl enable xrdp
   sudo systemctl restart xrdp
   ```

1. ユーザでの設定

   ```text
   $ echo "xfce4-session" > ~/.xsession
   $ D=/usr/share/xfce4:/usr/share/xubuntu:/usr/local/share
   $ D=${D}:/usr/share:/var/lib/snapd/desktop:/usr/share
   $ cat <<EOF > ~/.xsessionrc
   > export XDG_SESSION_DESKTOP=xubuntu
   > export XDG_DATA_DIRS=${D}
   > export XDG_CONFIG_DIRS=/etc/xdg/xdg-xubuntu:/etc/xdg:/etc/xdg
   > EOF
   ```

1. light\-lockerのエラー無効化

   ```text
   $sudo cp /usr/bin/light-locker /usr/bin/light-locker.orig
   $ cat <<EOF | sudo tee /usr/bin/light-locker
   > #!/bin/sh
   >
   > # The light-locker uses XDG_SESSION_PATH provided by lightdm.
   > if [ ! -z "\${XDG_SESSION_PATH}" ]; then
   >   /usr/bin/light-locker.orig
   > else
   >   # Disable light-locker in XRDP.
   >   true
   > fi
   > EOF
   $ sudo chmod a+x /usr/bin/light-locker
   ```

1. エラーパッケージ削除

   `sudo -E apt purge blueman`

### **アプリケーションへのproxy用ショートカット作成**

1. copy from original file

   ```text
   cp /usr/share/applications/<targetapp.desktop> ~/.local/share/applications/<targetapp.desktop>
   ```

1. add text of proxy

   ```
   $ ~/.local/share/applications/<targetapp.desktop>
   - exec <appname> %u
   + exec <appname> %u --proxy-server="proxy.i.hinoshiba.com:8080"
   ```

### **x\_mouse**

- mouseボタンの設定

1. toolinstall

`sudo -E apt install easystroke`

### **caps2ctrl**

1. 設定変更

   ```text
   /etc/default/keyboard
   + XKBOPTIONS="ctrl:nocaps"
   - XKBOPTIONS=""
   ```

1. 再起動
