---
title: "wsl"
---

# wsl

[公開メモ](../../README.md) / [IT](../README.md) / [Windows](README.md) / wsl

**1\. WSLセットアップ**

```text
wsl --install
```

1. 再起動後スクリプトを実施\(ユーザ作成ぐらい\)

**2\. SSHの自動有効化とポートフォワーディングの共有**

1. wsl上でsshをインストール

```text
sudo apt update
sudo apt install openssh-server
sudo systemctl enable ssh
```

3\. bridgeの設定

1. `%userprofile%`へアクセス

1. `.wslconfig`を設定

```text
[wsl2]
networkingMode=bridged
vmSwitch=DefaultBridge
```

**4\. cuda install**

1. 以下からDLして、インストール

   - [https://www\.nvidia\.com/Download/index\.aspx?lang=en\-us](https://www.nvidia.com/Download/index.aspx?lang=en-us)

   - DownloadType: Studio Driver\(SD\)

1. WSLへインストール作業

   ```text
   wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
   sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
   wget https://developer.download.nvidia.com/compute/cuda/12.0.0/local_installers/cuda-repo-wsl-ubuntu-12-0-local_12.0.0-1_amd64.deb
   sudo dpkg -i cuda-repo-wsl-ubuntu-12-0-local_12.0.0-1_amd64.deb
   sudo cp /var/cuda-repo-wsl-ubuntu-12-0-local/cuda-*-keyring.gpg /usr/share/keyrings/
   sudo apt-get update
   sudo apt-get -y install cuda
   ```

**5\. wslスナップショットの生成**

```text
wsl --export Ubuntu C:\Users\<username>\wsl_snapshot\ubuntu_yyyymmdd.tar
```

**6\. スナップショットから起動するスクリプトを仕込む**

desktop等に以下を設置

```markdown
wsl --unregister Ubuntu_wk
wsl --import Ubuntu_wk C:\Users\<username>\wsl_vhdx\Ubuntu_wk C:\Users\<username>\wsl_snapshot\ubuntu_20230817.tar
wsl --set-default Ubuntu_wk
wsl --distribution Ubuntu_wk --user <username>
```
