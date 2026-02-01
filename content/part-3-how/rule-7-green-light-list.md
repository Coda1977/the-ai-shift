---
title: "Build the Green Light List"
subtitle: "People are paralyzed because they don't know what's allowed."
weight: 31
part: "HOW — SYSTEM"
rule_number: 7
short_title: "Green Light List"
---

## The Story

GitHub has one of the most thoughtful AI governance frameworks in tech. Published as part of their enterprise playbook, it establishes a clear, tiered system that tells every employee exactly what they can and can't do with AI tools:

**Tier 1 — Approved/Enterprise Tools** (e.g., GitHub Copilot with enterprise agreement):
Full access to company data. Formally approved. Use freely.

**Tier 2 — Public AI Tools** (free tools without enterprise agreement):
**Public data only.** No proprietary code, customer data, or internal information. The rule is "simple and absolute."

**Local/On-Device Tools** (e.g., LM Studio, local models):
Generally safe for wider data since nothing leaves the device.

**Experimental** (new tools not yet fully reviewed):
Treated like Tier 2 (public data only), but sanctioned. "Creates a sanctioned space for R&D" with "a clear path to graduate to Tier 1 once proven."

The genius of this system isn't that it restricts. It's that it **clarifies**. Every employee knows: Green (Tier 1) — go. Yellow (Experimental/Local) — go carefully. Red (Tier 2 with sensitive data) — stop.

GitHub supplements this with:
- A **data classification foundation** (Public → Internal → Confidential).
- A dedicated **#security-help** Slack channel where employees get fast answers.
- Department-specific tool approval processes.
- An **"AI Advocate network"** that socializes policies across the company.

Compare this to the typical organization. Zapier found that **7 in 10 employees say their company doesn't have a clear AI usage policy**. Only **18.5%** of employees across industries are aware of any official company AI policy. Prosci research shows that when clarity is absent, the default is paralysis — or shadow AI.

The contrast is stark. Morgan Stanley trained a GenAI assistant on 100,000+ research reports but did not roll it out firm-wide until rigorous evaluation proved quality. Once deployed with proper guardrails, adoption hit **98%**. GitHub built a tiered system and saw broad adoption. Organizations without clear policies? Their people either freeze or go rogue.

When people don't know what's green-lit, they either do nothing or do everything in secret. Both outcomes are worse than the risk you were trying to avoid.

## The Science

**Nudge theory** demonstrates that simplification drives action. When choices are complex, people default to doing nothing (status quo bias). A clear Green/Yellow/Red list reduces cognitive load from "I need to evaluate every AI tool against every possible risk" to "I check the list."

**WOOP** (Wish-Outcome-Obstacle-Plan) by Gabriele Oettingen shows that the most effective way to achieve a goal is to identify the specific obstacle in advance and create an if-then plan. For AI adoption, the obstacle is often "I don't know if I'm allowed." The plan: a Green Light List that removes the obstacle entirely.

The Fortune/HBR finding that **only 6% of companies fully trust AI agents** to handle tasks shows the governance gap from the leadership side. Even leaders are paralyzed. A Green Light List serves both directions — it frees employees to act and gives leaders a governance framework they can trust.

## The Move: Monday Morning

1. **Create your Green Light List this week.** You don't need a perfect policy. You need a one-page list with three columns:
   - **Green**: Tools and use cases that are approved. Use freely.
   - **Yellow**: Tools and use cases that require caution. Follow these specific rules.
   - **Red**: Tools and use cases that are not approved. Don't use until further notice.

2. **Post it where everyone can see it.** Internal wiki, Slack channel, printed on the wall — wherever your team looks for answers. GitHub puts theirs in a central, simple page on their internal wiki.

3. **Create a fast-answer channel.** GitHub has #security-help. You need the equivalent: a place where people can ask "Can I use X for Y?" and get an answer within 24 hours. If the answer takes weeks, people will act without asking.

4. **Review and update monthly.** AI tools change fast. Your Green Light List should be a living document, not a policy carved in stone. Yellow tools should have a clear review process to graduate to Green.

## Worksheet 7: "Green Light List" Template

**Instructions:** Fill in this template with your team's AI tool and use case governance.

### Tool Classification

| Tool Name | Category | Data Allowed | Approved Use Cases | Restrictions | Status |
|---|---|---|---|---|---|
| *Example: ChatGPT Enterprise* | Green | Internal + Public | Drafting, brainstorming, analysis | No customer PII | Approved |
| *Example: Free ChatGPT* | Yellow | Public only | Personal learning, public research | No company data | Caution |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Use Case Classification

| Use Case | Status | Rules | Example |
|---|---|---|---|
| Drafting internal communications | Green / Yellow / Red | | |
| Analyzing customer data | Green / Yellow / Red | | |
| Writing code | Green / Yellow / Red | | |
| Creating external content | Green / Yellow / Red | | |
| Summarizing meetings | Green / Yellow / Red | | |
| Financial analysis | Green / Yellow / Red | | |

### Governance Infrastructure

| Element | Your Answer |
|---|---|
| Where is the list published? | |
| Who owns and updates it? | |
| How often is it reviewed? | |
| Where do people ask questions? (channel/person) | |
| SLA for answering questions | ___ hours / days |
| Process for graduating Yellow → Green | |
