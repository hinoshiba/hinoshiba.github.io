---
title: "nftables"
---

# nftables

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / nftables

1. nftインストール

   1. ufw無効

      1. `sudo ufw disable`

      1. `sudo systemctl stop ufw`

      1. `sudo systemctl disable ufw`

      1. `reboot`

   1. `sudo apt install nftables`

   1. `sudo update-alternatives --config iptables`

      - nftablesを選択

   1. `sudo vim /etc/nftables.conf`

      ```text
      #!/usr/sbin/nft -f
      flush ruleset

      table inet filter {
        chain input {
      	type filter hook input priority 0; policy drop;

      	iifname "lo" counter accept

      	ct state established,related counter accept

      	ct state new tcp dport 22 counter accept
        }

        chain forward {
      	type filter hook forward priority 0; policy drop;
        }

        chain output {
      	type filter hook output priority 0; policy accept;
        }
      }
      ```

   1. 起動と有効化

      - `systemctl enable nftables --now`

   1. 動作確認

      - `nft list ruleset`

      - `sudo iptables --version`

        - `iptables v1.8.4 (nf_tables)`
