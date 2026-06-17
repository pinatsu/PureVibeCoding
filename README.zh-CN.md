# 纯血 vibe coding

[English](README.md) | [简体中文](README.zh-CN.md)

[![纯血 vibe coding](badges/pure-vibe-coding-agent-made-transcript-zh-CN.svg)](CERTIFICATION.zh-CN.md)

一个给开源项目使用的 provenance 徽章：声明该项目是 **100% 通过和 agent 对话生成** 的，没有“古法手工编程”，也没有人类偷偷手改 AI 产物来收拾残局。

这个项目不是代码质量、安全性或许可证合规认证。它只认证一件事：项目的生产过程是否足够“纯血 vibe coding”，并且是否公开了可审计的 agent 对话记录。

## 徽章展示

完整认证：

[![Pure Vibe Coding](badges/pure-vibe-coding-agent-made-transcript-en.svg)](CERTIFICATION.zh-CN.md)
[![纯血 vibe coding](badges/pure-vibe-coding-agent-made-transcript-zh-CN.svg)](CERTIFICATION.zh-CN.md)

Agent 生成：

[![Pure Vibe Coding](badges/pure-vibe-coding-en.svg)](CERTIFICATION.zh-CN.md)
[![纯血 vibe coding](badges/pure-vibe-coding-zh-CN.svg)](CERTIFICATION.zh-CN.md)

公开对话：

[![Pure Vibe Coding](badges/pure-vibe-coding-transcript-en.svg)](CERTIFICATION.zh-CN.md)
[![纯血 vibe coding](badges/pure-vibe-coding-transcript-zh-CN.svg)](CERTIFICATION.zh-CN.md)

旧版与兼容：

[![纯血 vibe coding](badges/pure-vibe-coding.svg)](CERTIFICATION.zh-CN.md)
[![纯血 vibe coding](badges/pure-vibe-coding-dark.svg)](CERTIFICATION.zh-CN.md)

可复制的 Markdown 片段见 [BADGE.zh-CN.md](BADGE.zh-CN.md)。

## 快速使用

在你的项目里加入认证声明：

```json
{
  "$schema": "https://raw.githubusercontent.com/pinatsu/PureVibeCoding/main/schema/pure-vibe-coding.schema.json",
  "version": 1,
  "claim": {
    "repository": "https://github.com/owner/repo",
    "publication_status": "published",
    "commit": "main",
    "scope": "entire-repository"
  },
  "attestation": {
    "no_manual_coding": true,
    "all_agent_conversations_public": true
  },
  "agent_conversations": [
    {
      "title": "Initial implementation",
      "path": "conversations/2026-06-17-initial-implementation.md",
      "tool": "Codex"
    }
  ],
  "maintainers": [
    {
      "name": "Your Name",
      "contact": "https://github.com/your-handle"
    }
  ]
}
```

然后在 README 里加入徽章：

```md
[![纯血 vibe coding](https://raw.githubusercontent.com/pinatsu/PureVibeCoding/main/badges/pure-vibe-coding-agent-made-transcript-zh-CN.svg)](https://github.com/pinatsu/PureVibeCoding)
```

也可以使用 Shields 风格徽章：

```md
[![纯血 vibe coding](https://img.shields.io/badge/%E7%BA%AF%E8%A1%80_vibe_coding-100%25_agent_generated-ff4b8b)](https://github.com/pinatsu/PureVibeCoding)
```

## 认证要求

项目必须同时满足：

1. 项目完全通过人类和 agent 对话生成。人类可以写 prompt、做选择、运行命令、审阅输出，但不能直接手工修改项目代码、配置、文档或资源文件。
2. 如果 agent 生成的内容需要修复，修复也必须通过 agent 对话完成。
3. 所有用于生成、修改、修复项目的 agent 对话必须公开。可以脱敏密钥、隐私信息和第三方机密，但脱敏范围需要说明。
4. 项目仓库必须包含 `.pure-vibe-coding.json`，列出认证范围、对应提交、公开对话记录和维护者声明。

更完整的规则见 [CERTIFICATION.zh-CN.md](CERTIFICATION.zh-CN.md)。

## 导出对话

每次通过 agent 修改项目后，都应更新公开对话记录。可复制 [conversations/README.zh-CN.md](conversations/README.zh-CN.md) 里的提示词，让 agent 导出或刷新 transcript。

## 校验

这个仓库提供一个零依赖校验脚本：

```sh
node scripts/validate-attestation.mjs .pure-vibe-coding.json
```

也可以在 GitHub Actions 中使用：

```yaml
name: Pure Vibe Coding

on:
  pull_request:
  push:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - uses: pinatsu/PureVibeCoding@main
        with:
          file: .pure-vibe-coding.json
```

## 项目状态

当前版本是一个轻量的公开规范和徽章工具。它采用自我声明模式：任何项目都可以使用徽章，但社区可以根据公开对话记录审计其声明是否成立。

本仓库已经包含根目录 [.pure-vibe-coding.json](.pure-vibe-coding.json) 作为自身认证声明。GitHub 仓库是 [pinatsu/PureVibeCoding](https://github.com/pinatsu/PureVibeCoding)，认证声明发布到 `main` 分支。

## 灵感

灵感来自 [@tison1096 的这条 X 帖](https://x.com/tison1096/status/2066569080988123398)：对“明明手工修订项目，却声称全是 AI 做的”这种现象的吐槽。

## 许可证

MIT
