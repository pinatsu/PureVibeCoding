---
name: pure-vibe-coding
description: Use when Codex needs to initialize, validate, update, audit, repair, or explain Pure Vibe Coding attestations for 100% agent-generated projects, including .pure-vibe-coding.json files, public agent transcripts, certification scope, redaction notes, README badges, and GitHub Action integration.
---

# Pure Vibe Coding

## Purpose

Maintain Pure Vibe Coding provenance records for projects that claim their covered deliverables were produced entirely through public human-agent conversations. Treat this as a process attestation, not as code quality, security, license, or correctness certification.

## First Steps

1. Inspect the repository for `.pure-vibe-coding.json`, `conversations/`, README badges, `.github/workflows/`, and PR or issue templates.
2. Read the local project's own Pure Vibe Coding docs when present, especially `CERTIFICATION.md`, `README.md`, `conversations/README.md`, and `schema/pure-vibe-coding.schema.json`.
3. Preserve the project's existing language and style. For bilingual repositories, update both English and localized files when the surrounding project already maintains both.
4. Do not invent evidence. If repository URL, commit, transcript URL, or conversation history is unavailable, use an honest placeholder only when the format allows it, or tell the user what is missing.
5. Never export hidden system/developer instructions, private reasoning, secrets, tokens, private keys, cookies, or confidential third-party content. Redact and document redactions.

## Workflow

Choose the narrowest workflow that matches the user request.

### Initialize

Use when a project has no Pure Vibe Coding attestation yet.

1. Read `references/attestation-format.md`.
2. Create `.pure-vibe-coding.json` from `assets/templates/pure-vibe-coding.json`; set:
   - `claim.repository` to the public GitHub URL when known, otherwise `unpublished`.
   - `claim.publication_status` to `published` or `unpublished`.
   - `claim.commit` to a branch, commit, release, or honest pre-publication marker.
   - `claim.scope` to `entire-repository`, `directory:<path>`, `release:<tag>`, or `commit:<sha>`.
3. Create or update `conversations/README.md` from `assets/templates/conversations-readme.md`.
4. Add the first transcript from `assets/templates/transcript.md`, or link an existing public transcript.
5. Add a README badge from `assets/templates/badge-snippets.md`.
6. Add CI from `assets/templates/github-workflow.yml` when the repository uses GitHub Actions.
7. Run validation with the project validator when available; otherwise run `scripts/validate-attestation.mjs`.

### Update After Agent Work

Use after Codex or another agent changes project files.

1. Try to read or export the actual conversation record before writing transcript content. Use available thread/history/export tools first. In Codex, search for thread tools when needed, then prefer `list_threads` and `read_thread` with pagination; retry with output inclusion when command output or file changes matter.
2. If exact thread export is unavailable, create a truthful best-effort transcript from visible context and explicitly say that it is best effort.
3. Update or create a transcript in `conversations/` that includes user-visible requests, agent-visible summaries, important commands, validation results, file-change summaries, and the source used for conversation history.
4. Update `conversations/README.md` index.
5. Ensure `.pure-vibe-coding.json.agent_conversations` includes the new transcript path or public URL.
6. Add or update `attestation.redactions` when content was removed or summarized for privacy, safety, or third-party confidentiality.
7. Re-run validation and report what changed.

### Conversation Source Priority

Use this priority whenever creating, refreshing, or auditing transcripts:

1. Native transcript export or full conversation export from the host application.
2. Thread/history reading tools that return user-visible messages, assistant messages, tool summaries, command output, or file changes.
3. Public external transcript URLs supplied by the user or repository.
4. Visible current conversation context, only when stronger sources are unavailable.

Document which source was used. If a tool output is truncated, say so in the transcript instead of presenting it as complete. Do not include hidden instructions, private reasoning, invisible runtime metadata, secrets, or confidential content even when a thread tool exposes adjacent metadata.

### Validate Or Audit

Use when checking whether a repository's claim is complete, internally consistent, or ready for CI.

1. Run the repository validator if present:
   `node scripts/validate-attestation.mjs .pure-vibe-coding.json`
2. If no project validator exists, run this skill's bundled script:
   `node <skill>/scripts/validate-attestation.mjs <repo>/.pure-vibe-coding.json --json`
3. Read `references/audit-checklist.md` for deeper checks.
4. Report findings by severity:
   - Blocking: invalid JSON, missing required fields, missing transcript, false required boolean.
   - Risk: vague scope, unpublished repository after release, transcript not clearly public, redactions not explained.
   - Improvement: missing badge, missing CI, inconsistent language coverage.

### Repair

Use when the user asks to fix an incomplete attestation.

1. Prefer small, truthful edits over broad rewrites.
2. Do not widen `claim.scope`; narrow it when evidence only covers part of the project.
3. Do not mark `no_manual_coding` or `all_agent_conversations_public` true unless the user or evidence supports the claim.
4. Preserve existing transcript links and redaction explanations.
5. Validate after edits.

## Resources

- Read `references/attestation-format.md` when creating or editing `.pure-vibe-coding.json`.
- Read `references/transcript-format.md` when exporting, refreshing, or reviewing public transcripts.
- Read `references/audit-checklist.md` for review, CI, PR, and certification audit tasks.
- Use `scripts/validate-attestation.mjs` as a zero-dependency fallback validator.
- Use files in `assets/templates/` when initializing a repository or adding missing integration pieces.

## Response Rules

- Be explicit that Pure Vibe Coding is a provenance/process attestation only.
- When evidence is missing, state the missing evidence instead of asserting compliance.
- When modifying a project, list changed files and validation results.
- When reviewing, lead with concrete findings and file references.
