---
title: "mysql復旧/保存方法"
---

# **mysql復旧/保存方法**

[公開メモ](../../README.md) / [IT](../README.md) / [Linux](README.md) / mysql復旧/保存方法

#### 保存

```sh
mysqldump --single-transaction -u <user> -p <dbname> > mysql.dump
```

#### 復旧

1. DBは、先に存在させる

1. import

   `mysql -u <user> -p <dbname> < mysql.dump`
