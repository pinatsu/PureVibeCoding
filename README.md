# Pure Vibe Coding

[English](README.md) | [简体中文](README.zh-CN.md)

[![Pure Vibe Coding](badges/pure-vibe-coding-agent-made-transcript-en.svg)](CERTIFICATION.md)

A provenance badge for open-source projects: it declares that a project was created **100% through agent conversations**, without hand-written "classical programming" and without hidden manual cleanup of AI-generated code.

This is not a code quality, security, or license compliance certification. It certifies one thing only: whether the project's production process is pure vibe coding, and whether the agent conversations are public and auditable.

## Badge Gallery

Full attestation:

[![Pure Vibe Coding](badges/pure-vibe-coding-agent-made-transcript-en.svg)](CERTIFICATION.md)
[![纯血 vibe coding](badges/pure-vibe-coding-agent-made-transcript-zh-CN.svg)](CERTIFICATION.md)

Agent-made:

[![Pure Vibe Coding](badges/pure-vibe-coding-en.svg)](CERTIFICATION.md)
[![纯血 vibe coding](badges/pure-vibe-coding-zh-CN.svg)](CERTIFICATION.md)

Public transcript:

[![Pure Vibe Coding](badges/pure-vibe-coding-transcript-en.svg)](CERTIFICATION.md)
[![纯血 vibe coding](badges/pure-vibe-coding-transcript-zh-CN.svg)](CERTIFICATION.md)

Legacy and compatibility:

[![Pure Vibe Coding](badges/pure-vibe-coding.svg)](CERTIFICATION.md)
[![Pure Vibe Coding](badges/pure-vibe-coding-dark.svg)](CERTIFICATION.md)

See [BADGE.md](BADGE.md) for copyable Markdown snippets.

## Quick Start

Pure Vibe Coding is meant to be used through agents. The recommended path is to give your agent the bundled Codex skill, then let it initialize, validate, and maintain the attestation records for you.

For Codex, copy this repository's skill into your local skills directory:

```sh
cp -R skills/pure-vibe-coding ~/.codex/skills/pure-vibe-coding
```

Then ask your agent:

```text
Use $pure-vibe-coding to add Pure Vibe Coding attestation to this repository.
```

The skill helps the agent:

- create or update `.pure-vibe-coding.json`;
- create and index public conversation transcripts;
- add the README badge;
- add GitHub Action validation;
- audit and repair missing provenance records after future agent work.

The underlying attestation file looks like this:

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

The agent should also add the badge to your README:

```md
[![Pure Vibe Coding](https://raw.githubusercontent.com/pinatsu/PureVibeCoding/main/badges/pure-vibe-coding-agent-made-transcript-en.svg)](https://github.com/pinatsu/PureVibeCoding)
```

You can also use a Shields-style badge:

```md
[![Pure Vibe Coding](https://img.shields.io/badge/%E7%BA%AF%E8%A1%80_vibe_coding-100%25_agent_generated-ff4b8b)](https://github.com/pinatsu/PureVibeCoding)
```

## Certification Requirements

A project must satisfy all of the following:

1. The project is produced entirely through human-agent conversations. Humans may write prompts, make choices, run commands, grant permissions, and review outputs, but they must not directly edit project code, configuration, documentation, or assets.
2. If agent-generated content needs fixing, the fix must also be requested and produced through an agent conversation.
3. All agent conversations used to create, modify, or fix the project must be public. Secrets, personal information, and third-party confidential information may be redacted, but the redaction scope must be explained.
4. The repository must contain `.pure-vibe-coding.json`, listing the certified scope, commit or release, public conversation records, and maintainer declaration.

See [CERTIFICATION.md](CERTIFICATION.md) for the full rules.

## Export Conversations

After every agent-driven change, update the public conversation records. You can copy the prompt in [conversations/README.md](conversations/README.md) to ask the agent to export or refresh the transcript.

## Validation

This repository provides a zero-dependency validator:

```sh
node scripts/validate-attestation.mjs .pure-vibe-coding.json
```

You can also use it in GitHub Actions:

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

## Project Status

This project is currently a lightweight public specification and badge tool. It uses a self-attestation model: any project may use the badge, and the community can audit the claim through the public conversation records.

This repository includes a root [.pure-vibe-coding.json](.pure-vibe-coding.json) as its own attestation. The GitHub repository is [pinatsu/PureVibeCoding](https://github.com/pinatsu/PureVibeCoding), and the attestation is published against the `main` branch.

## Inspiration

Inspired by [this X post from @tison1096](https://x.com/tison1096/status/2066569080988123398), which calls out projects that quietly rely on manual coding while claiming to be fully AI-generated.

## License

MIT
