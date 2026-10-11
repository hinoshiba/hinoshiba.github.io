---
title: "kvm"
---

# kvm

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / kvm

### install

```sh
sudo -E apt install qemu-kvm virt-manager bridge-utils ovmf
```

### **enable kvm console**

#### ubuntu 18\.04

1. `/etc/default/grub`を編集

   ```sh
   GRUB_CMDLINE_LINUX="console=tty1 console=ttyS0,115200"
   GRUB_TERMINAL="console serial"
   GRUB_SERIAL_COMMAND="serial --speed=115200 --unit=0 --word=8 --parity=no --stop=1"
   ```

1. update

   ```
    sudo update-grub
   ```

1. boot後のconsoleを有効化

   ```
   systemctl start serial-getty@ttyS0
    systemctl enable serial-getty@ttyS0
   ```

1. `virsh console <vmname>` で取得できることを確認する

1. rebootして、全て取れることを確認

1. `ctrl + ]` で抜ける

#### cnetos

1. `/etc/default/grub`を編集

   ```sh
   # GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet" #old
    GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet console=ttyS0" #new
   ```

1. `sudo grub2-mkconfig -o /boot/grub2/grub.cfg` を実施

1. reboot

1. `virsh console <vmname>` で取得できることを確認する

1. boot後のconsoleを有効化

   ```sh
   systemctl start serial-getty@ttyS0
   systemctl enable serial-getty@ttyS0
   ```

1. `virsh console <vmname>` で取得できることを確認する

1. rebootして、全て取れることを確認

1. `ctrl + ]` で抜ける
