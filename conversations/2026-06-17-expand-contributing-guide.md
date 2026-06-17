# Conversation: Expand Contribution Guide

Date: 2026-06-17
Tool: Codex
Scope: Expand the contribution guide so developers can quickly understand the project and contribute through an agent-first workflow.

## Summary

The user asked to discuss adding more project introduction to the contribution guide so developers can understand the project quickly and contribute. Codex proposed turning the guide into a concise developer onboarding document. The user clarified that bilingual documentation should not be mandatory. Codex then updated both contribution guide files, kept bilingual coverage as a suggestion rather than a gate, and updated this repository's Pure Vibe Coding attestation records.

## Source Note

Codex used thread-reading tools before writing this transcript. `codex_app.list_threads` identified the active thread `019ed3f1-9a21-77b3-b90c-0d9fff31e9b9`, and `codex_app.read_thread` read the relevant turns with `includeOutputs: true`. The current-turn file diffs for the contribution guide updates were returned without truncation. Hidden system/developer instructions, internal reasoning, invisible runtime metadata, and secrets are not included.

## User Requests

- The user asked to discuss expanding the contribution guide with project introduction so developers can understand the project and contribute.
- The user clarified: "不要强制求中英文文档" ("Do not force bilingual documentation").
- The user approved implementation: "ok 去做吧" ("OK, go do it").

## Agent Responses

- Codex inspected existing `CONTRIBUTING.md`, `CONTRIBUTING.zh-CN.md`, and README files.
- Codex recommended making the contribution guide a developer onboarding document, not just a short rule list.
- Codex proposed sections for project overview, repository map, contribution areas, agent-first workflow, PR checklist, language guidance, and anti-patterns.
- Codex agreed that bilingual synchronization should be encouraged but not required.
- Codex updated both contribution guide files and added this transcript to the repository attestation.

## Thread-Read Conversation Log

### Turn 1: Discuss Contribution Guide

User:

```text
讨论一下贡献指南增加增加一些项目介绍，让开发者能快速了解项目，从而做出贡献
```

Codex answered that the existing contribution guide was too short: it explained the agent-only contribution standard but did not help new contributors understand what the project is, how the repository is organized, or where contributions are useful. Codex suggested expanding it into a developer onboarding document with:

- a brief project introduction;
- a repository map;
- good contribution areas;
- an agent-first contribution workflow;
- a PR checklist;
- a "what not to do" section.

Codex initially included bilingual documentation consistency as a checklist idea.

### Turn 2: Do Not Force Bilingual Docs

User:

```text
不要强制求中英文文档
```

Codex agreed and clarified that bilingual consistency should not be a contribution gate. Codex proposed wording that encourages contributors to update both languages when they can, but lets them contribute in only one language and note that translation follow-up may be needed. Codex also stated that missing translation is a documentation-quality issue, not a Pure Vibe Coding provenance failure.

### Turn 3: Implement

User:

```text
ok 去做吧
```

Codex read the local `$pure-vibe-coding` skill instructions, discovered thread-reading tools, used `list_threads` and `read_thread`, and then edited the contribution guide files.

## File Changes

- Replaced `CONTRIBUTING.md` with an expanded guide covering:
  - project purpose;
  - repository map;
  - useful contribution areas;
  - agent-first workflow;
  - pull request checklist;
  - language coverage guidance;
  - contribution anti-patterns.
- Replaced `CONTRIBUTING.zh-CN.md` with the matching Chinese guide.
- Updated `conversations/README.md` and `conversations/README.zh-CN.md` to index this transcript.
- Updated `.pure-vibe-coding.json` to include this transcript and its redaction note.

## Validation

- The repository validator passed:

```text
Pure Vibe Coding attestation passed
scope: entire-repository
conversations: 3
```

- The installed local skill fallback validator returned:

```json
{
  "ok": true,
  "scope": "entire-repository",
  "conversations": 3,
  "errors": [],
  "warnings": []
}
```

## Redactions

- Hidden system instructions, developer instructions, internal reasoning, invisible runtime metadata, and approval-system metadata are not included.
- No secrets, tokens, private keys, cookies, or third-party confidential content were included in the visible transcript.
