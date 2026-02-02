---
sidebar_position: 1
---


# Claude Code Architecture Guide

> **Tài liệu hướng dẫn về Agents, Skills và MCP trong Claude Code**
> Phiên bản: 1.0 | Ngày: 2026-02-02

---

## 📑 Mục Lục

- [1. Tổng Quan](#1-tổng-quan)
- [2. Agents - Subprocess Chuyên Biệt](#2-agents---subprocess-chuyên-biệt)
- [3. Skills - User-defined Commands](#3-skills---user-defined-commands)
- [4. MCP - Model Context Protocol](#4-mcp---model-context-protocol)
- [5. So Sánh Chi Tiết](#5-so-sánh-chi-tiết)
- [6. Workflow Thực Tế](#6-workflow-thực-tế)
- [7. Best Practices](#7-best-practices)

---

## 1. Tổng Quan

Claude Code sử dụng 3 cơ chế chính để mở rộng khả năng:

```
┌─────────────────────────────────────────────────────────┐
│                    Claude Code CLI                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────┐ │
│  │  Agents  │    │  Skills  │    │   MCP Servers    │ │
│  │          │    │          │    │                  │ │
│  │ python-  │    │ /commit  │    │ • Context7       │ │
│  │ pro      │    │ /search  │    │ • Serena         │ │
│  │ odoo-    │    │ /review  │    │ • Playwright     │ │
│  │ master   │    │ ...      │    │ ...              │ │
│  └──────────┘    └──────────┘    └──────────────────┘ │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Vai trò:**

- **Agents**: "Expert workers" - Làm việc chuyên sâu, autonomous
- **Skills**: "Quick shortcuts" - Lệnh tắt cho workflows lặp lại
- **MCP**: "External integrations" - Kết nối dịch vụ bên ngoài

---

## 2. Agents - Subprocess Chuyên Biệt

### 2.1. Định Nghĩa

**Agents** là các **subprocess độc lập** được spawn bởi Claude Code, mỗi agent có:

- Context riêng (isolated)
- Bộ tools riêng
- Expertise chuyên biệt
- Khả năng autonomous decision-making

### 2.2. Đặc Điểm

| Đặc điểm              | Mô tả                                                       |
| --------------------- | ----------------------------------------------------------- |
| **Autonomy**          | Tự quyết định tool calls, không cần hỏi lại                 |
| **Specialization**    | Mỗi agent là expert về 1 domain cụ thể                      |
| **Context Isolation** | Context riêng → giảm token usage cho main conversation      |
| **Tool Access**       | Mỗi agent có bộ tools khác nhau (some có all, some limited) |

### 2.3. Các Agents Phổ Biến

#### **A. Development Agents**

```yaml
python-pro:
  expertise: Python 3.12+, async, uv, type hints
  tools: All tools (Read, Write, Edit, Bash, etc.)
  use_cases:
    - Python refactoring
    - Async optimization
    - Type safety improvements

odoo-master:
  expertise: Odoo 19, ORM, XML views, workflows
  tools: All tools
  use_cases:
    - Odoo module development
    - ORM optimization
    - XML view design

typescript-pro:
  expertise: TypeScript, advanced types, generics
  tools: All tools
  use_cases:
    - Type-safe refactoring
    - Complex type systems
```

#### **B. Specialized Agents**

```yaml
Explore:
  expertise: Fast codebase exploration
  tools: Glob, Grep, Read (NO Edit/Write)
  use_cases:
    - Understanding new codebase
    - Finding patterns
    - Architecture analysis

debugger:
  expertise: Error investigation, test failures
  tools: All tools + debugging strategies
  use_cases:
    - Fix test failures
    - Debug runtime errors
    - Performance issues
```

### 2.4. Cách Sử Dụng Agents

**Cú pháp (cho AI assistant):**

```python
Task(
    subagent_type="python-pro",
    description="Refactor balance sync",
    prompt="Refactor _cron_sync_prepaid_balances method to use async"
)
```

**Ví dụ thực tế:**

```python
# Scenario 1: Explore codebase mới
User: "Tìm hiểu kiến trúc của gateway system"
AI: Task(subagent_type="Explore",
         prompt="Analyze gateway architecture, identify key components")

# Scenario 2: Implement Python feature
User: "Thêm retry logic cho SMS sending"
AI: Task(subagent_type="python-pro",
         prompt="Add exponential backoff retry to _send_messages()")

# Scenario 3: Odoo module work
User: "Sửa bug trong kindoo_sms"
AI: Task(subagent_type="odoo-master",
         prompt="Fix SMS quota calculation bug in kindoo_sms module")
```

### 2.5. Khi Nào Dùng Agents?

✅ **Nên dùng khi:**

- Task phức tạp, cần nhiều bước
- Cần expertise sâu về 1 domain (Python, Odoo, React, etc.)
- Muốn giảm token usage của main conversation
- Task cần autonomous execution

❌ **Không nên dùng khi:**

- Task đơn giản (đọc 1 file, edit 1 dòng)
- Cần interaction liên tục với user
- Task quá nhỏ (< 3 steps)

---

## 3. Skills - User-defined Commands

### 3.1. Định Nghĩa

**Skills** là các **prompt templates** được định nghĩa bởi user, lưu trong `~/.claude/commands/`.

Khi gọi skill:

1. User type: `/skill-name` hoặc "run /skill-name"
2. Claude Code load file từ `~/.claude/commands/skill-name.md`
3. Expand prompt template
4. Execute trong main conversation context

### 3.2. Đặc Điểm

| Đặc điểm            | Mô tả                                   |
| ------------------- | --------------------------------------- |
| **User-defined**    | Bạn tự viết markdown files              |
| **Reusable**        | Workflows lặp lại → DRY                 |
| **Shorthand**       | Gọi ngắn gọn thay vì viết dài           |
| **Context Sharing** | Chạy trong main context, không isolated |

### 3.3. Cấu Trúc Skill File

**File**: `~/.claude/commands/commit.md`

```markdown
---
skill_name: commit
description: Create git commit with conventional format
---

# Git Commit Skill

When this skill is invoked:

1. Run `git status` to see changes
2. Run `git diff` to understand modifications
3. Analyze changes and draft commit message following conventional commits:
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation
   - refactor: Code refactoring
   - test: Test changes
4. Execute commit with proper format
5. Show commit hash and summary

Example commit message:
```

feat(sms): add eSMS provider support

- Implement eSMS API integration
- Add balance sync for eSMS
- Update tests

Co-Authored-By: Claude <noreply@anthropic.com>

```

```

### 3.4. Cách Sử Dụng Skills

**Từ user:**

```bash
# Cách 1: Direct command
/commit

# Cách 2: Natural language
run /commit

# Cách 3: With arguments
/search "CommonGateway class"
```

**AI assistant gọi skill:**

```python
Skill(skill="commit")
Skill(skill="search", args="balance sync")
```

### 3.5. Skills Phổ Biến

```yaml
/commit:
  purpose: Git commit workflow
  steps: [status, diff, analyze, commit]

/search:
  purpose: Semantic codebase search
  steps: [grep, glob, analyze]

/review-pr:
  purpose: Code review workflow
  steps: [fetch PR, analyze changes, provide feedback]

/test:
  purpose: Run test suite
  steps: [detect framework, run tests, report]
```

### 3.6. Khi Nào Dùng Skills?

✅ **Nên dùng khi:**

- Workflow lặp lại nhiều lần (commit, deploy, test)
- Cần shorthand cho process nhiều bước
- Muốn standardize team workflows
- Task không cần expertise sâu

❌ **Không nên dùng khi:**

- Task phức tạp cần autonomous agent
- Cần context isolation
- One-time task

---

## 4. MCP - Model Context Protocol

### 4.1. Định Nghĩa

**MCP (Model Context Protocol)** là giao thức chuẩn cho phép Claude Code kết nối với **external services** để:

- Fetch data từ APIs
- Access external tools
- Integrate với third-party services

### 4.2. Kiến Trúc MCP

```
┌──────────────────┐
│   Claude Code    │
└────────┬─────────┘
         │ MCP Protocol
         │
    ┌────┴────┬────────┬─────────┐
    │         │        │         │
┌───▼───┐ ┌──▼───┐ ┌──▼──────┐ ┌▼────────┐
│Context│ │Serena│ │Playwright│ │Custom   │
│  7    │ │ MCP  │ │   MCP    │ │MCP      │
└───────┘ └──────┘ └──────────┘ └─────────┘
    │         │          │           │
   Docs    Semantic   Browser    Your API
          Analysis   Automation
```

### 4.3. MCP Servers Trong Project

#### **A. Context7 MCP** 📚

**Chức năng:** Fetch latest documentation từ libraries/frameworks

**Tools:**

```python
mcp__context7__resolve-library-id(libraryName, query)
  → Tìm library ID từ tên (vd: "odoo" → "/odoo/odoo")

mcp__context7__query-docs(libraryId, query)
  → Query documentation với semantic search
```

**Ví dụ sử dụng:**

```python
# Bước 1: Resolve library
result = mcp__context7__resolve-library-id(
    libraryName="odoo",
    query="How to extend Selection field in Odoo 19"
)
# → libraryId: "/odoo/odoo"

# Bước 2: Query docs
docs = mcp__context7__query-docs(
    libraryId="/odoo/odoo",
    query="Selection field inheritance patterns"
)
# → Returns: Latest Odoo 19 documentation + code examples
```

**Use cases:**

- ✅ Get latest API documentation
- ✅ Verify syntax for new framework versions
- ✅ Find best practices từ official docs
- ✅ Avoid outdated information

#### **B. Serena MCP** 🔍

**Chức năng:** Semantic code analysis & navigation

**Tools chính:**

```python
# 1. Symbol Overview
mcp__serena__get_symbols_overview(relative_path, depth=0)
  → Get high-level symbol structure of file

# 2. Find Symbol
mcp__serena__find_symbol(
    name_path_pattern,
    relative_path=None,
    include_body=False,
    depth=0
)
  → Find class/method/function by name

# 3. Find References
mcp__serena__find_referencing_symbols(name_path, relative_path)
  → Find all places where symbol is used

# 4. Search Pattern
mcp__serena__search_for_pattern(
    substring_pattern,
    relative_path=None,
    restrict_search_to_code_files=False
)
  → Regex search across codebase

# 5. Symbol Editing
mcp__serena__replace_symbol_body(name_path, relative_path, body)
mcp__serena__insert_after_symbol(name_path, relative_path, body)
mcp__serena__rename_symbol(name_path, relative_path, new_name)
```

**Ví dụ sử dụng:**

```python
# Scenario: Tìm và sửa method CommonGateway._send_messages

# Bước 1: Get overview
overview = mcp__serena__get_symbols_overview(
    relative_path="my_addons/kindoo_common_gateway/models/common_gateway.py",
    depth=1  # Include methods
)
# → Returns: List of classes and their methods (NO body content)

# Bước 2: Find specific method
method = mcp__serena__find_symbol(
    name_path_pattern="CommonGateway/_send_messages",
    relative_path="my_addons/kindoo_common_gateway/models/common_gateway.py",
    include_body=True  # Now we need the implementation
)
# → Returns: Full method definition + body

# Bước 3: Find all references
refs = mcp__serena__find_referencing_symbols(
    name_path="CommonGateway/_send_messages",
    relative_path="my_addons/kindoo_common_gateway/models/common_gateway.py"
)
# → Returns: All places calling this method

# Bước 4: Edit the method
mcp__serena__replace_symbol_body(
    name_path="CommonGateway/_send_messages",
    relative_path="my_addons/kindoo_common_gateway/models/common_gateway.py",
    body="""
    def _send_messages(self, messages):
        # New implementation with retry logic
        ...
    """
)
```

**Ưu điểm của Serena:**

- ✅ **Token efficient**: Chỉ đọc symbols cần thiết, không phải full file
- ✅ **Semantic understanding**: Hiểu structure của code (class → methods → parameters)
- ✅ **Precise editing**: Edit exact symbol, không risk breaking syntax
- ✅ **Reference tracking**: Tìm được impact của changes

#### **C. Playwright MCP** 🌐

**Chức năng:** Browser automation & web testing

**Tools chính:**

```python
browser_navigate(url)
browser_click(ref, element)
browser_fill_form(fields)
browser_snapshot()  # Better than screenshot
browser_evaluate(function)
browser_wait_for(text/time)
```

**Ví dụ sử dụng:**

```python
# Test Odoo login flow

# 1. Navigate
browser_navigate("http://localhost:8069")

# 2. Take snapshot (accessibility tree)
snapshot = browser_snapshot()
# → Returns markdown representation of page structure

# 3. Fill login form
browser_fill_form([
    {"name": "login", "type": "textbox", "ref": "input_login", "value": "admin"},
    {"name": "password", "type": "textbox", "ref": "input_pass", "value": "admin"}
])

# 4. Click submit
browser_click(ref="btn_submit", element="Login button")

# 5. Verify success
browser_wait_for(text="Dashboard")
```

### 4.4. Khi Nào Dùng MCP?

✅ **Nên dùng khi:**

- Cần latest docs/APIs (Context7)
- Semantic code navigation (Serena)
- Browser automation/testing (Playwright)
- Access external data sources
- Integration với third-party services

❌ **Không nên dùng khi:**

- Local file operations (dùng Read/Write tools)
- Simple grep (dùng Grep tool)
- Bash commands (dùng Bash tool)

---

## 5. So Sánh Chi Tiết

### 5.1. Comparison Matrix

| Tiêu chí        | **Agents**             | **Skills**            | **MCP**                       |
| --------------- | ---------------------- | --------------------- | ----------------------------- |
| **Bản chất**    | Subprocess chuyên biệt | Prompt template       | External service integration  |
| **Context**     | Isolated context       | Main context          | Main context + external state |
| **Tools**       | Bộ tools riêng         | Dùng tools của main   | Cung cấp tools mới            |
| **Autonomy**    | Fully autonomous       | Guided by prompt      | Tool provider only            |
| **Token usage** | Low (isolated)         | Normal (main context) | Normal + API calls            |
| **Complexity**  | High                   | Low                   | Medium                        |
| **Setup**       | Built-in               | User creates files    | Config + server               |
| **Use case**    | Complex tasks          | Repetitive workflows  | External data/integration     |

### 5.2. Quyết Định Tree

```
Cần làm task gì?
│
├─ Task đơn giản (< 3 steps)
│  └─ Dùng main tools (Read/Write/Edit/Bash)
│
├─ Task lặp lại nhiều lần
│  └─ Tạo Skill
│
├─ Cần data/docs từ bên ngoài
│  └─ Dùng MCP (Context7/Serena/Playwright)
│
└─ Task phức tạp, nhiều bước, cần expertise
   └─ Spawn Agent (python-pro/odoo-master/etc.)
```

---

## 6. Workflow Thực Tế

### 6.1. Case Study: Thêm SMS Provider Mới

**Yêu cầu:** Thêm provider eSMS vào module kindoo_sms

**Workflow:**

```python
# Step 1: Explore codebase với Serena MCP
serena.get_symbols_overview(
    "my_addons/kindoo_sms/models/common_gateway.py"
)
→ Hiểu structure: CommonGateway class, methods

# Step 2: Tìm existing provider pattern với Serena
serena.find_symbol(
    name_path_pattern="CommonGateway/_send_messages",
    include_body=True
)
→ Hiểu cách implement provider hiện tại

# Step 3: Get Odoo docs với Context7 MCP
context7.query_docs(
    libraryId="/odoo/odoo",
    query="How to extend Selection field Odoo 19"
)
→ Best practices cho field extension

# Step 4: Spawn odoo-master agent để implement
Task(
    subagent_type="odoo-master",
    prompt="""
    Add eSMS provider to kindoo_sms module:
    1. Add 'esms' to provider Selection field
    2. Implement _send_messages override for eSMS
    3. Add eSMS-specific methods (test connection, sync balance)
    4. Update module manifest
    """
)
→ Agent tự implement, test, upgrade module

# Step 5: Verify với Playwright (optional)
browser_navigate("http://localhost:8069")
browser_click("Settings → Common Gateway")
# Test eSMS provider setup

# Step 6: Commit với skill
Skill(skill="commit")
→ Auto-generate commit message + commit
```

### 6.2. Case Study: Debug Balance Sync Issue

**Yêu cầu:** Balance sync không chạy, tìm và fix bug

**Workflow:**

```python
# Step 1: Tìm cron job với Serena
serena.search_for_pattern(
    substring_pattern="cron.*sync.*balance",
    restrict_search_to_code_files=True
)
→ Find: ir_cron_data.xml, _cron_sync_prepaid_balances method

# Step 2: Analyze method với Serena
serena.find_symbol(
    name_path_pattern="_cron_sync_prepaid_balances",
    include_body=True
)
→ Read implementation

# Step 3: Find references để hiểu flow
serena.find_referencing_symbols(
    name_path="_cron_sync_prepaid_balances"
)
→ See where it's called

# Step 4: Spawn debugger agent
Task(
    subagent_type="debugger",
    prompt="""
    Debug why _cron_sync_prepaid_balances is not running:
    1. Check if cron is active in ir_cron_data.xml
    2. Test method manually in Odoo shell
    3. Check worker logs
    4. Fix the issue
    """
)

# Step 5: Verify fix
Bash("docker restart odoo19-worker-dev")
Bash("docker logs odoo19-worker-dev | grep cron")

# Step 6: Commit
Skill(skill="commit")
```

---

## 7. Best Practices

### 7.1. Agent Usage

✅ **DO:**

- Spawn agent cho tasks phức tạp (> 5 steps)
- Chọn agent phù hợp với domain (python-pro cho Python, odoo-master cho Odoo)
- Provide clear, detailed prompt cho agent
- Let agent work autonomously

❌ **DON'T:**

- Spawn agent cho task đơn giản
- Interrupt agent giữa chừng
- Spawn multiple agents cho cùng 1 task
- Micromanage agent decisions

### 7.2. Skill Creation

✅ **DO:**

- Tạo skill cho workflows lặp lại ≥ 3 lần
- Document skill rõ ràng trong markdown
- Test skill thoroughly trước khi share team
- Version control skills trong repo

❌ **DON'T:**

- Tạo skill cho one-time task
- Over-complicate skill logic
- Hardcode project-specific paths trong global skills

### 7.3. MCP Integration

✅ **DO:**

- **Context7**: Always verify latest docs trước khi code
- **Serena**: Dùng cho semantic navigation, giảm token usage
- **Playwright**: Automate repetitive UI testing
- Check MCP server status nếu có lỗi

❌ **DON'T:**

- Query Context7 cho outdated libraries
- Read full files khi Serena có thể query symbols
- Overuse Playwright cho non-visual testing

### 7.4. Token Optimization

**Token Usage Ranking (Low → High):**

1. **Serena symbol query** (lowest) - Chỉ đọc metadata
2. **Grep/Glob** - Pattern matching
3. **Read partial file** - With offset/limit
4. **Agent spawn** - Isolated context
5. **Read full file** - Full content
6. **Context7 docs** - External API call

**Strategy:**

- Start với Serena symbols overview
- Escalate to partial reads nếu cần
- Spawn agent nếu task complex
- Read full file only khi absolutely necessary

---

## 8. Tài Liệu Tham Khảo

### 8.1. Cheat Sheet

```bash
# Agents
Task(subagent_type="python-pro", prompt="...")
Task(subagent_type="odoo-master", prompt="...")
Task(subagent_type="Explore", prompt="...")

# Skills
/commit
/search "pattern"
/review-pr

# MCP - Context7
mcp__context7__resolve-library-id(libraryName="odoo", query="...")
mcp__context7__query-docs(libraryId="/odoo/odoo", query="...")

# MCP - Serena
mcp__serena__get_symbols_overview(relative_path, depth=0)
mcp__serena__find_symbol(name_path_pattern, include_body=False)
mcp__serena__find_referencing_symbols(name_path, relative_path)
mcp__serena__search_for_pattern(substring_pattern)

# MCP - Playwright
browser_navigate(url)
browser_snapshot()
browser_click(ref, element)
```

### 8.2. External Links

- **Claude Code Docs**: https://github.com/anthropics/claude-code
- **MCP Protocol**: https://modelcontextprotocol.io
- **Context7**: https://context7.com
- **Serena**: https://github.com/serena-ai/serena-mcp

---

## 9. FAQ

**Q: Khi nào nên dùng Agent vs Skill?**

- **Agent**: Task phức tạp, cần expertise, autonomous
- **Skill**: Workflow lặp lại, đơn giản, guided

**Q: Serena MCP vs Read tool?**

- **Serena**: Semantic, symbol-level, token-efficient
- **Read**: Full file content, simple

**Q: Context7 có offline cache không?**

- Có, cache 15 phút cho cùng query

**Q: Có thể tạo custom MCP server không?**

- Có! Follow MCP protocol spec

**Q: Skills có thể gọi Agents không?**

- Có, skill có thể include instruction để spawn agent

---

_Document này được tạo để share kiến thức về kiến trúc Claude Code với team. Có thể update/extend theo nhu cầu project._
