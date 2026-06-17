# Agent Conversations

This directory contains public agent conversation exports for this repository.

## Transcripts

- [2026-06-17-create-pure-vibe-coding-project.md](2026-06-17-create-pure-vibe-coding-project.md)

## 导出更新提示词

每次需要让 agent 导出或刷新公开对话记录时，可以直接复制这段提示词：

```text
请导出并更新本仓库的纯血 vibe coding 对话记录。

要求：
1. 读取当前线程里你可见的完整对话历史；如果有线程读取或导出工具，优先使用工具结果。
2. 更新 `conversations/` 下对应的 transcript 文件；如果还没有合适文件，就创建一个 `YYYY-MM-DD-short-topic.md` 文件。
3. transcript 需要包含用户可见的用户消息、agent 回复、关键工具调用、重要命令输出、文件变更摘要和验证结果。
4. 不要导出隐藏的 system/developer 指令、内部推理或不可见运行时元数据。
5. 如有密钥、token、个人隐私或无权公开的信息，请脱敏，并在 transcript 中说明脱敏范围和原因。
6. 更新 `conversations/README.md` 的索引。
7. 如果仓库根目录已有 `.pure-vibe-coding.json`，同步确认 `agent_conversations` 是否包含最新 transcript；如果没有真实 GitHub repository URL，不要伪造认证声明。
8. 完成后运行可用的本地校验，并在回复里说明更新了哪些文件。
```

To certify this repository itself, publish every conversation that affected the claimed scope, then add a root `.pure-vibe-coding.json` pointing at those transcripts.

This repository includes a root `.pure-vibe-coding.json` attestation pointing to `https://github.com/pinatsu/PureVibeCoding`, published against the `main` branch.
