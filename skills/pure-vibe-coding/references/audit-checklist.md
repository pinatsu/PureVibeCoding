# Audit Checklist

Use this checklist for reviews, CI reports, and repair tasks.

## Blocking Issues

- `.pure-vibe-coding.json` is missing, invalid JSON, or not an object.
- `version` is not `1`.
- Required `claim`, `attestation`, `agent_conversations`, or `maintainers` data is missing.
- `attestation.no_manual_coding` is not `true`.
- `attestation.all_agent_conversations_public` is not `true`.
- A local transcript path listed in `agent_conversations` does not exist.
- A URL transcript is not an HTTP(S) URL.
- `repository` is neither a GitHub repository URL nor `unpublished`.
- `repository` is `unpublished` but `publication_status` is not `unpublished`.

## Risk Issues

- `claim.scope` is vague.
- `claim.commit` is `main` when a fixed release or commit would be more auditable.
- Transcript content is too summarized to support the claim.
- Transcript was reconstructed from visible context without first attempting available conversation export or thread-reading tools.
- Transcript does not state whether it came from native export, thread-read tools, public links, or best-effort context.
- Transcript includes tool or diff excerpts without noting known truncation.
- Redactions exist but are not documented in both transcript and attestation.
- The README badge links to the wrong project or an unrelated certification page.
- Project has releases or public README claims while the attestation still says `unpublished`.

## Improvement Issues

- Missing GitHub Action validation.
- Missing PR checklist item for agent-generated changes.
- Missing bilingual updates in a bilingual repository.
- Missing maintainer contact.
- Badge uses an older style while the project has a preferred full attestation badge.

## Report Shape

Lead with findings ordered by severity. Include file references and specific fields. Then provide a short summary and validation command/result.
