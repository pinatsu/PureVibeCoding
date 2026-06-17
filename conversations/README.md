# Agent Conversations

[English](README.md) | [简体中文](README.zh-CN.md)

This directory contains public agent conversation exports for this repository.

## Transcripts

- [2026-06-17-create-pure-vibe-coding-project.md](2026-06-17-create-pure-vibe-coding-project.md)
- [2026-06-17-create-pure-vibe-coding-skill.md](2026-06-17-create-pure-vibe-coding-skill.md)

## Export Update Prompt

Copy this prompt whenever you want the agent to export or refresh the public conversation record:

```text
Please export and update this repository's pure vibe coding conversation records.

Requirements:
1. Read the full conversation history visible to you in the current thread. If thread reading or export tools are available, prefer those tool results.
2. Update the corresponding transcript file under `conversations/`. If no suitable file exists, create one named `YYYY-MM-DD-short-topic.md`.
3. The transcript must include user-visible user messages, agent replies, key tool calls, important command outputs, file change summaries, and verification results.
4. Do not export hidden system/developer instructions, internal reasoning, or invisible runtime metadata.
5. If secrets, tokens, personal information, or information that cannot be published appear, redact them and explain the redaction scope and reason in the transcript.
6. Update the index in `conversations/README.md`.
7. If the repository root already has `.pure-vibe-coding.json`, confirm that `agent_conversations` includes the latest transcript. If there is no real GitHub repository URL, do not fabricate an attestation.
8. Run available local validation after updating, and summarize which files changed.
```

To certify this repository itself, publish every conversation that affected the claimed scope, then add a root `.pure-vibe-coding.json` pointing at those transcripts.

This repository includes a root `.pure-vibe-coding.json` attestation pointing to `https://github.com/pinatsu/PureVibeCoding`, published against the `main` branch.
