---
title: "codex"
---

# codex

[公開メモ](../../README.md) / [IT](../README.md) / [AI](README.md) / codex

- `~/.codex/config.toml`

```javascript
model = "gpt-5.3-codex"

[features]
remote_models = true
lock_model_version = true

personality = "pragmatic"
model_reasoning_effort = "medium"
sandbox_mode = "danger-full-access"

web_search = "live"

[generation]
temperature = 0.1
top_p = 0.9

[logging]
command_log = true
command_log_path = "~/.codex/command.log"

[command_policy]
deny = [
  "rm -rf /",
  "rm -rf /*",
  "dd if=* of=/dev/*",
  "mkfs.*",
  "shutdown",
  "reboot"
]

[shell_environment_policy]
inherit = "core"
experimental_use_profile = false
ignore_default_excludes = false

exclude = [
  "*KEY*",
  "*SECRET*",
  "*TOKEN*",
  "*PASSWORD*",
  "*PASS*",

  # セッション/クッキー/資格情報・SSH周り
  "*SESSION*",
  "*COOKIE*",
  "*CREDENTIAL*",
  "SSH_*",
  "SSH_AUTH_SOCK",

  # クラウド系（代表例）
  "AWS_*",
  "GCP_*",
  "GOOGLE_*",
  "AZURE_*",
  "ARM_*",
  "OCI_*",
  "CLOUDFLARE_*",

  # よくある開発系トークン
  "GITHUB_*",
  "GH_*",
  "GITLAB_*",
  "NPM_*",
  "PIP_*",
  "PYPI_*",
  "DOCKER_*",
  "KUBECONFIG",
  "KUBE_*",

  # 生成AI系キー類（念のため）
  "OPENAI_*",
  "ANTHROPIC_*",
  "COHERE_*",
  "MISTRAL_*",
]
```
