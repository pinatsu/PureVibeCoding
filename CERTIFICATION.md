# 纯血 vibe coding 认证规则

## 定义

“纯血 vibe coding”指一个项目在声明范围内的可交付内容，完全由 agent 根据公开对话生成。人类的角色是提出目标、提供反馈、选择方案、授权命令、审阅结果和发布项目，而不是直接编辑最终产物。

## 必须满足

### 1. 100% agent 生成

声明范围内的代码、配置、文档、测试、脚本和资源文件必须由 agent 生成或修改。

允许：

- 人类编写 prompt、需求、验收标准和审阅意见。
- 人类选择 agent 提出的方案。
- 人类运行命令、批准权限、提供环境信息。
- 人类要求 agent 重写、修复、回滚或补充内容。

不允许：

- 人类直接手工编辑项目文件。
- 人类把本地手写 patch 混入 agent 产物。
- 人类先手工搭框架，再让 agent 填空，却把整个项目声明为纯血。
- 人类偷偷修复 agent 生成代码里的 bug，然后继续声称是 100% agent-made。

### 2. 对话公开

所有影响声明范围的 agent 对话必须公开，并能从 `.pure-vibe-coding.json` 找到。

对话记录应包含：

- 用户给 agent 的需求、反馈和修改要求。
- agent 的主要回答、计划、实现说明和最终总结。
- 与实现相关的命令、错误、测试结果或审阅结论。

允许脱敏：

- API key、token、密码、cookie、私钥。
- 个人隐私信息。
- 无权公开的第三方商业或安全信息。

脱敏必须保留足够上下文，并说明脱敏原因。

### 3. 声明范围明确

认证可以覆盖整个仓库，也可以只覆盖某个目录、模块或版本。范围必须写在 `.pure-vibe-coding.json` 的 `claim.scope` 字段中。

推荐值：

- `entire-repository`
- `directory:path/to/module`
- `release:v1.2.3`
- `commit:<sha>`

如果项目尚未发布到 GitHub，可以临时使用：

```json
{
  "repository": "unpublished",
  "publication_status": "unpublished",
  "commit": "working-tree-before-first-commit",
  "scope": "entire-repository"
}
```

发布后必须把 `repository` 替换为真实 GitHub 仓库 URL，并把 `commit` 更新为可审计的提交、分支或 release。

### 4. 可审计

项目应把认证声明文件放在仓库根目录：

```text
.pure-vibe-coding.json
```

对话记录可以放在仓库内：

```text
conversations/
  2026-06-17-initial-build.md
  2026-06-18-bugfix.md
```

也可以链接到公开 issue、discussion、gist、网页或导出的 transcript。

## 违规处理

如果发现项目不满足认证要求，维护者应：

1. 立即移除徽章，或把声明范围缩小到真实纯血的部分。
2. 在仓库 issue、README 或认证声明中说明问题。
3. 通过公开 agent 对话完成后续修复，再恢复徽章。

## 认证不是

这个徽章不表示：

- 代码没有漏洞。
- 项目设计合理。
- 依赖许可证完全合规。
- agent 没有犯错。
- 维护者不需要负责。

它只表示：项目在声明范围内没有古法手工编程，并且公开了生成过程。
