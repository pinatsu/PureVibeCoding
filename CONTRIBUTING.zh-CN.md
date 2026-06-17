# 贡献指南

[English](CONTRIBUTING.md) | [简体中文](CONTRIBUTING.zh-CN.md)

贡献应帮助 Pure Vibe Coding 继续成为 agent 生成项目的 provenance 标准。这个项目不是代码质量、安全性或许可证合规认证；它关注的是生产过程是否公开、可审计、诚实。

## 项目简介

Pure Vibe Coding 提供：

- 面向 100% agent 生成项目范围的认证规则；
- 可以放进 README 的徽章资源；
- `.pure-vibe-coding.json` 认证声明格式和 JSON schema；
- 零依赖校验器和 GitHub Action 集成；
- 帮助 agent 初始化、更新、校验、审计和修复认证声明的 Codex skill；
- 用于审计的公开对话记录约定。

## 仓库结构

- `schema/`：`.pure-vibe-coding.json` 的 JSON schema。
- `scripts/`：本地校验脚本。
- `skills/pure-vibe-coding/`：Codex skill，以及它的模板、参考文档和 fallback validator。
- `badges/`：SVG 徽章和兼容徽章资源。
- `conversations/`：本仓库公开的 agent 对话记录。
- `examples/`：认证声明示例和使用说明。
- `action.yml`：GitHub Action 校验封装。
- `CERTIFICATION.zh-CN.md`：完整认证规则。
- `BADGE.zh-CN.md`：可复制的徽章片段。

## 适合贡献的方向

- 改进认证声明 schema 或 validator。
- 增加结构化校验输出、CLI 体验或更清晰的诊断信息。
- 改进 Codex skill、模板或审计参考文档。
- 澄清 transcript 格式和脱敏规则。
- 改进 GitHub Action 集成。
- 增加徽章变体或优化徽章使用文档。
- 改进示例、认证文档或审计案例。
- 在能力范围内改进翻译或语言覆盖。

## Agent 优先贡献流程

贡献应遵循本项目倡导的同一标准。

1. 通过 agent 对话生成变更。
2. 修改前，让 agent 阅读相关项目文档，例如 `README.zh-CN.md`、`CERTIFICATION.zh-CN.md`、`schema/pure-vibe-coding.schema.json`、本文件和相关 skill 文件。
3. 涉及认证声明的变更，优先使用 `$pure-vibe-coding` 或其他明确的 agent 工作流。
4. 修改后，在 `conversations/` 中更新或新增公开 transcript。
5. 优先使用线程读取或 transcript 导出工具，不要一上来就只靠上下文重建。如果输出或 diff 被截断，需要在 transcript 中说明。
6. 如果新 transcript 支撑了本仓库声明范围，更新 `.pure-vibe-coding.json`。
7. 提交 pull request 前运行 validator。
8. 在 pull request 中链接 transcript。

## Pull Request 检查清单

- [ ] 变更通过 agent 对话生成。
- [ ] transcript 已公开，或已在 pull request 中链接。
- [ ] transcript 说明了来源，例如原生导出、thread-read 工具、公开链接或 best-effort context。
- [ ] 没有把手写 patch 混入声明为 agent 生成的范围。
- [ ] 如果仓库认证声明需要新 transcript，已经更新 `.pure-vibe-coding.json`。
- [ ] validator 通过。
- [ ] 如果本次修改影响双语文档，已同步更新另一语言版本，或说明需要后续补翻译。

## 语言覆盖

欢迎保持双语一致，但这不是贡献门槛。如果你能同时更新英文和中文文档，欢迎这样做。如果你只熟悉一种语言，可以只提交该语言版本，并说明可能需要后续补翻译。

缺少翻译是文档质量问题，不是 Pure Vibe Coding provenance 失败。

## 不建议的贡献方式

- 不要手写变更后把它表示为 agent 生成。
- 不要在 agent 工作流之外偷偷修复生成结果。
- 不要伪造 transcript、commit 标识、仓库 URL 或审计证据。
- 不要把本项目描述为安全、质量或许可证合规认证。
- 不要把认证范围扩大到公开对话证据无法支持的部分。

如果某个贡献不能满足 Pure Vibe Coding 标准，请明确说明。项目仍然可以讨论它，但不应把它表示为纯血 vibe coding。
