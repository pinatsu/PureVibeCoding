# Transcript Format

Use this reference when creating, refreshing, or auditing public agent conversation records.

## Recommended File Name

Use:

`conversations/YYYY-MM-DD-short-topic.md`

Keep file names stable after linking them from `.pure-vibe-coding.json`.

## Recommended Sections

```md
# Conversation: Short Title

Date: YYYY-MM-DD
Tool: Codex
Scope: brief covered change

## Summary

## User Requests

## Agent Responses

## Key Tool Calls And Commands

## File Changes

## Validation

## Redactions
```

## Content Rules

- Before reconstructing from context, actively look for native transcript export, thread history, or conversation reading tools. In Codex, use thread tools such as `list_threads` and paginated `read_thread` when available.
- Include user-visible user requests, agent replies, implementation summaries, important commands, relevant errors, validation results, and changed-file summaries.
- Include a source note stating whether the transcript came from native export, thread-read tools, public links, or best-effort visible context.
- Exclude hidden system/developer instructions, private chain-of-thought, invisible runtime metadata, secrets, tokens, private keys, cookies, private personal data, and confidential third-party material.
- Summarize long command outputs when full logs are noisy, but preserve failures, test results, and audit-relevant details.
- If exact conversation export or thread-read tools are unavailable, create a truthful best-effort transcript from visible context and say that it is best effort.
- If a thread tool reports truncated output or diffs, record the truncation instead of implying the output is complete.

## Redactions

When redacting, preserve auditability:

- Replace sensitive material with clear markers such as `[REDACTED: API token]`.
- Explain the category and scope in the transcript's `Redactions` section.
- Add matching entries to `.pure-vibe-coding.json.attestation.redactions`.

## Updating Indexes

When a transcript is added:

1. Add it to `conversations/README.md`.
2. Add it to `.pure-vibe-coding.json.agent_conversations`.
3. Re-run attestation validation.
