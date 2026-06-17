# Pure Vibe Coding Certification Rules

[English](CERTIFICATION.md) | [简体中文](CERTIFICATION.zh-CN.md)

## Definition

Pure vibe coding means that all deliverables in the claimed scope are generated entirely by an agent from public human-agent conversations. The human role is to state goals, provide feedback, choose options, grant permissions, review results, and publish the project, not to directly edit the final artifacts.

## Requirements

### 1. 100% Agent-Generated

All code, configuration, documentation, tests, scripts, and assets in the claimed scope must be generated or modified by an agent.

Allowed:

- Humans may write prompts, requirements, acceptance criteria, and review comments.
- Humans may choose between options proposed by the agent.
- Humans may run commands, approve permissions, and provide environment information.
- Humans may ask the agent to rewrite, fix, revert, or extend generated content.

Not allowed:

- Humans directly editing project files by hand.
- Humans mixing hand-written patches into agent output.
- Humans hand-building the project skeleton and asking the agent to fill in the blanks while claiming the whole project is pure.
- Humans quietly fixing bugs in agent-generated code and still claiming the project is 100% agent-made.

### 2. Public Conversations

All agent conversations that affect the claimed scope must be public and discoverable from `.pure-vibe-coding.json`.

Conversation records should include:

- user requests, feedback, and change requests,
- the agent's main responses, plans, implementation notes, and final summaries,
- relevant commands, errors, test results, and review conclusions.

Allowed redactions:

- API keys, tokens, passwords, cookies, and private keys,
- personal information,
- third-party confidential business or security information that cannot be published.

Redactions must preserve enough context for review and explain their scope and reason.

### 3. Clear Scope

Certification can cover an entire repository, a directory, a module, a release, or a specific commit. The scope must be declared in `claim.scope` inside `.pure-vibe-coding.json`.

Recommended values:

- `entire-repository`
- `directory:path/to/module`
- `release:v1.2.3`
- `commit:<sha>`

If the project has not yet been published to GitHub, it may temporarily use:

```json
{
  "repository": "unpublished",
  "publication_status": "unpublished",
  "commit": "working-tree-before-first-commit",
  "scope": "entire-repository"
}
```

After publication, `repository` must be replaced with the real GitHub repository URL, and `commit` must be updated to an auditable commit, branch, or release.

### 4. Auditable Evidence

Projects should place the attestation file at the repository root:

```text
.pure-vibe-coding.json
```

Conversation records can live in the repository:

```text
conversations/
  2026-06-17-initial-build.md
  2026-06-18-bugfix.md
```

They can also link to public issues, discussions, gists, web pages, or exported transcripts.

## Violations

If a project no longer satisfies the certification requirements, maintainers should:

1. remove the badge immediately, or narrow the claimed scope to the truly pure part,
2. explain the issue in the repository issue tracker, README, or attestation,
3. complete future fixes through public agent conversations before restoring the badge.

## What This Certification Is Not

This badge does not mean:

- the code has no vulnerabilities,
- the design is good,
- dependency licenses are fully compliant,
- the agent made no mistakes,
- maintainers have no responsibility.

It only means that, in the claimed scope, there was no manual coding and the generation process is public.
