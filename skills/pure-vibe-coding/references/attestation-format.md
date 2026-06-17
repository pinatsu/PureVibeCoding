# Attestation Format

Use `.pure-vibe-coding.json` at the repository root unless the user is intentionally working with an example or nested package.

## Required Top-Level Fields

- `version`: Use `1`.
- `claim`: Describe the repository, publication state, commit or release, and certified scope.
- `attestation`: State the process claims. Required booleans must be true only when supported.
- `agent_conversations`: List public transcript paths or URLs that support the claim.
- `maintainers`: List maintainers responsible for the declaration.

## Claim Fields

- `repository`: Use `https://github.com/owner/repo` for published GitHub repositories. Use `unpublished` only before publication.
- `publication_status`: Use `published` or `unpublished`. If `repository` is `unpublished`, this must be `unpublished`.
- `commit`: Use a commit SHA, branch, release tag, or honest pre-publication marker.
- `scope`: Prefer precise values:
  - `entire-repository`
  - `directory:path/to/module`
  - `release:v1.2.3`
  - `commit:<sha>`

Avoid vague scope values such as `project`, `all`, or `current files`.

## Attestation Fields

- `no_manual_coding`: Must be `true` only if all files in scope were generated or modified through agent conversations.
- `all_agent_conversations_public`: Must be `true` only if all conversations affecting the claim are public or linked.
- `redactions`: Optional array. Use it whenever transcripts omit secrets, personal information, hidden platform instructions, private reasoning, or confidential third-party content.

Each redaction entry needs:

- `reason`: Why content was removed.
- `scope`: Which transcript, section, or artifact was affected.

## Conversation Entries

Each `agent_conversations` item needs:

- `title`: Human-readable transcript title.
- `path` or `url`: Repository-local transcript path or public transcript URL.
- `tool`: Optional tool name, such as `Codex`, `Claude Code`, or `Cursor`.
- `notes`: Optional context, such as redaction details or linked PRs.

For local `path` entries, ensure the file exists relative to `.pure-vibe-coding.json`.

## Maintainers

Each maintainer needs:

- `name`
- `contact` when available

## Honesty Rules

- Do not fabricate repository URLs, commit SHAs, transcript URLs, or tool names.
- If evidence supports only part of a repository, narrow `claim.scope`.
- If a transcript cannot be public, explain the limitation and do not claim complete public conversations unless a redacted public version preserves enough audit context.
