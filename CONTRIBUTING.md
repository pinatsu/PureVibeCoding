# Contributing

[English](CONTRIBUTING.md) | [简体中文](CONTRIBUTING.zh-CN.md)

Contributions should help Pure Vibe Coding stay useful as a provenance standard for agent-generated projects. This project is not a code quality, security, or license compliance certification; it is about making the production process public, auditable, and honest.

## Project In Brief

Pure Vibe Coding provides:

- a certification rule set for 100% agent-generated project scope;
- badge assets that projects can put in their README;
- a `.pure-vibe-coding.json` attestation format and JSON schema;
- a zero-dependency validator and GitHub Action integration;
- a Codex skill that helps agents initialize, update, validate, audit, and repair attestations;
- public conversation transcript conventions for auditability.

## Repository Map

- `schema/`: JSON schema for `.pure-vibe-coding.json`.
- `scripts/`: local validation scripts.
- `skills/pure-vibe-coding/`: Codex skill and its templates, references, and fallback validator.
- `badges/`: SVG badges and compatibility badge assets.
- `conversations/`: public agent conversation records for this repository.
- `examples/`: example attestation files and usage notes.
- `action.yml`: GitHub Action wrapper for attestation validation.
- `CERTIFICATION.md`: full certification rules.
- `BADGE.md`: copyable badge snippets.

## Good Contribution Areas

- Improve the attestation schema or validator.
- Add structured validator output, CLI ergonomics, or clearer diagnostics.
- Improve the Codex skill, templates, or audit references.
- Clarify transcript format and redaction guidance.
- Improve GitHub Action integration.
- Add badge variants or better badge usage docs.
- Improve examples, certification docs, or audit case studies.
- Improve translations or language coverage when you can.

## Agent-First Workflow

Contributions should follow the same standard this project promotes.

1. Generate changes through an agent conversation.
2. Before editing, ask the agent to read the relevant project docs, such as `README.md`, `CERTIFICATION.md`, `schema/pure-vibe-coding.schema.json`, this file, and the relevant skill files.
3. Prefer using `$pure-vibe-coding` or another explicit agent workflow for attestation-related changes.
4. After editing, update or add a public transcript in `conversations/`.
5. Prefer thread-reading or transcript-export tools over context-only reconstruction. If output or diffs are truncated, say so in the transcript.
6. Update `.pure-vibe-coding.json` when a new transcript supports the repository's claimed scope.
7. Run the validator before opening a pull request.
8. Link the transcript from the pull request.

## Pull Request Checklist

- [ ] The change was generated through an agent conversation.
- [ ] The transcript is public or linked from the pull request.
- [ ] The transcript states its source, such as native export, thread-read tool, public link, or best-effort context.
- [ ] No manually written patch was mixed into the claimed agent-generated scope.
- [ ] `.pure-vibe-coding.json` was updated when the repository claim needs a new transcript.
- [ ] The validator passes.
- [ ] If this changes bilingual documentation, the matching language version was updated or translation follow-up is noted.

## Language Coverage

Bilingual consistency is welcome, but it is not a contribution gate. If you can update both English and Chinese docs, please do. If you are comfortable with only one language, contribute in that language and note that translation follow-up may be needed.

Missing translation is a documentation-quality issue, not a Pure Vibe Coding provenance failure.

## What Not To Do

- Do not hand-write changes and represent them as agent-generated.
- Do not quietly fix generated output outside the agent workflow.
- Do not fabricate transcripts, commit identifiers, repository URLs, or audit evidence.
- Do not describe this project as a security, quality, or license compliance certification.
- Do not widen a certification scope beyond the evidence available in public conversations.

If a contribution cannot meet the Pure Vibe Coding standard, say so plainly. The project can still discuss it, but it should not be represented as pure vibe coding.
