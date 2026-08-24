<div align="center">

[![Nerdboard CRM MCP](.github/assets/header.svg)](https://nerdboard.kr)

**Run CRM campaigns for your Cafe24 store from Claude Code and Codex CLI — just by asking.**

[![npm version](https://img.shields.io/npm/v/%40nerdlab-dev%2Fcrm-mcp?logo=npm&color=cb3837)](https://www.npmjs.com/package/@nerdlab-dev/crm-mcp)
[![npm downloads](https://img.shields.io/npm/dm/%40nerdlab-dev%2Fcrm-mcp)](https://www.npmjs.com/package/@nerdlab-dev/crm-mcp)
[![CI](https://github.com/nerdlab-dev/crm/actions/workflows/ci.yml/badge.svg)](https://github.com/nerdlab-dev/crm/actions/workflows/ci.yml)
[![Node.js ≥ 20](https://img.shields.io/node/v/%40nerdlab-dev%2Fcrm-mcp?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

[![Works with Claude Code](https://img.shields.io/badge/Works_with-Claude_Code-4A4A4A?style=flat-square)](https://claude.com/claude-code)
[![Works with OpenAI](https://img.shields.io/badge/Works_with-OpenAI-000000?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB3aWR0aD0iNzE2IiBoZWlnaHQ9IjcxNiIgdmlld0JveD0iMCAwIDcxNiA3MTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwOC43NDkgMzE3LjM5OUM1MTYuNzc3IDI4Ny4zMTQgNTA4Ljk5MSAyNTMuODg0IDQ4NS4zODkgMjMwLjI4MkM0NjEuNzg4IDIwNi42ODEgNDI4LjM2IDE5OC44OTUgMzk4LjI3MyAyMDYuOTIzQzM3Ni4yMzEgMTg0LjkyOCAzNDMuMzkgMTc0Ljk1NiAzMTEuMTQ4IDE4My41OTZDMjc4LjkwNiAxOTIuMjM0IDI1NS40NSAyMTcuMjkyIDI0Ny4zNiAyNDcuMzYxQzIxNy4yOTEgMjU1LjQ1MSAxOTIuMjMzIDI3OC45MSAxODMuNTk1IDMxMS4xNDlDMTc0Ljk1NyAzNDMuMzkxIDE4NC45MjcgMzc2LjIzMiAyMDYuOTI0IDM5OC4yNzRDMTk4Ljg5NiA0MjguMzU5IDIwNi42ODMgNDYxLjc4OSAyMzAuMjg0IDQ4NS4zOTFDMjUzLjg4NSA1MDguOTkyIDI4Ny4zMTMgNTE2Ljc3OSAzMTcuNDAxIDUwOC43NUMzMzkuNDQyIDUzMC43NDUgMzcyLjI4NiA1NDAuNzE3IDQwNC41MjUgNTMyLjA3OUM0MzYuNzY3IDUyMy40NDEgNDYwLjIyMyA0OTguMzg0IDQ2OC4zMTMgNDY4LjMxNUM0OTguMzgzIDQ2MC4yMjQgNTIzLjQ0IDQzNi43NjYgNTMyLjA3OCA0MDQuNTI2QzU0MC43MTYgMzcyLjI4NSA1MzAuNzQ3IDMzOS40NDMgNTA4Ljc0OSAzMTcuNDAyVjMxNy4zOTlaTTQ3MC44OTkgMjQ0Ljc3NkM0ODYuODkyIDI2MC43NyA0OTMuNDg4IDI4Mi42MDEgNDkwLjY4NyAzMDMuNDEyTDQxNS41NzcgMjYwLjA0NkM0MTIuNDExIDI1OC4yMTggNDA4LjUwOSAyNTguMjE4IDQwNS4zNDUgMjYwLjA0NkwzMTcuNDAxIDMxMC44MlYyNzcuNTI2QzMxNy40MDEgMjc1LjE5MSAzMTguNjUyIDI3My4wMDUgMzIwLjY3NiAyNzEuODM3TDM4Ny42NDQgMjMzLjE3NEM0MTQuMTc4IDIxOC4zNTMgNDQ4LjM0NiAyMjIuMjIzIDQ3MC45MDEgMjQ0Ljc3Nkg0NzAuODk5Wk0zNTcuODM3IDMxMS4xNDRMMzk4LjI3NSAzMzQuNDkxVjM4MS4xODVMMzU3LjgzNyA0MDQuNTMyTDMxNy4zOTggMzgxLjE4NVYzMzQuNDkxTDM1Ny44MzcgMzExLjE0NFpNMjY0Ljc3NiAyNjkuNjkzQzI2NS4yMDcgMjM5LjMwNSAyODUuNjQ0IDIxMS42NDkgMzE2LjQ1MyAyMDMuMzkzQzMzOC4zIDE5Ny41NCAzNjAuNTA1IDIwMi43NDQgMzc3LjEyNyAyMTUuNTczTDMwMi4wMTQgMjU4LjkzN0MyOTguODQ4IDI2MC43NjQgMjk2Ljg5OCAyNjQuMTQ0IDI5Ni44OTggMjY3Ljc5OFYzNjkuMzQ2TDI2OC4wNjUgMzUyLjY5OUMyNjYuMDQzIDM1MS41MzEgMjY0Ljc3NiAzNDkuMzUzIDI2NC43NzYgMzQ3LjAxN1YyNjkuNjkxVjI2OS42OTNaTTIwMy4zOTEgMzE2LjQ1NEMyMDkuMjQ0IDI5NC42MDggMjI0Ljg1NCAyNzcuOTc4IDI0NC4yNzYgMjY5Ljk5OVYzNTYuNzNDMjQ0LjI3NiAzNjAuMzg0IDI0Ni4yMjYgMzYzLjc2MyAyNDkuMzkyIDM2NS41OTFMMzM3LjMzNyA0MTYuMzY1TDMwOC41MDMgNDMzLjAxM0MzMDYuNDgxIDQzNC4xODEgMzAzLjk2MSA0MzQuMTg4IDMwMS45MzkgNDMzLjAyTDIzNC45NzEgMzk0LjM1N0MyMDguODY4IDM3OC43ODkgMTk1LjEzOCAzNDcuMjYxIDIwMy4zOTEgMzE2LjQ1NFpNMjQ0Ljc3NSA0NzAuOUMyMjguNzgxIDQ1NC45MDYgMjIyLjE4NiA0MzMuMDc1IDIyNC45ODYgNDEyLjI2NEwzMDAuMDk2IDQ1NS42M0MzMDMuMjYzIDQ1Ny40NTcgMzA3LjE2NCA0NTcuNDU3IDMxMC4zMjggNDU1LjYzTDM5OC4yNzMgNDA0Ljg1NlY0MzguMTQ5QzM5OC4yNzMgNDQwLjQ4NSAzOTcuMDIyIDQ0Mi42NzEgMzk0Ljk5NyA0NDMuODM5TDMyOC4wMjkgNDgyLjUwMkMzMDEuNDk1IDQ5Ny4zMjIgMjY3LjMyNyA0OTMuNDUyIDI0NC43NzIgNDcwLjlIMjQ0Ljc3NVpNNDUwLjg5NyA0NDUuOTgyQzQ1MC40NjYgNDc2LjM3MSA0MzAuMDI5IDUwNC4wMjcgMzk5LjIyIDUxMi4yODNDMzc3LjM3MyA1MTguMTM2IDM1NS4xNjggNTEyLjkzMiAzMzguNTQ3IDUwMC4xMDJMNDEzLjY1OSA0NTYuNzM4QzQxNi44MjYgNDU0LjkxMSA0MTguNzc1IDQ1MS41MzIgNDE4Ljc3NSA0NDcuODc3VjM0Ni4zMjlMNDQ3LjYwOSAzNjIuOTc3QzQ0OS42MzEgMzY0LjE0NSA0NTAuODk3IDM2Ni4zMjMgNDUwLjg5NyAzNjguNjU5VjQ0NS45ODVWNDQ1Ljk4MlpNNTEyLjI4MiAzOTkuMjIxQzUwNi40MjkgNDIxLjA2OCA0OTAuODE5IDQzNy42OTcgNDcxLjM5NyA0NDUuNjc2VjM1OC45NDZDNDcxLjM5NyAzNTUuMjkyIDQ2OS40NDggMzUxLjkxMiA0NjYuMjgxIDM1MC4wODVMMzc4LjMzNiAyOTkuMzExTDQwNy4xNyAyODIuNjYzQzQwOS4xOTIgMjgxLjQ5NSA0MTEuNzEyIDI4MS40ODcgNDEzLjczNCAyODIuNjU1TDQ4MC43MDIgMzIxLjMxOEM1MDYuODA1IDMzNi44ODcgNTIwLjUzNiAzNjguNDE1IDUxMi4yODIgMzk5LjIyMVoiIGZpbGw9IndoaXRlIi8+PC9zdmc+)](https://developers.openai.com/codex/cli/)
[![Built on Model Context Protocol](https://img.shields.io/badge/Built_on-Model_Context_Protocol-000000?style=flat-square&logo=modelcontextprotocol&logoColor=white)](https://modelcontextprotocol.io)

![Demo — ask for a CRM campaign and watch the segment, coupon, UTM, and creative get set up automatically](.github/assets/demo.gif)

</div>

Running a CRM campaign means clicking through admin screens for every segment, coupon, and message. With Nerdboard's hosted remote MCP, your AI coding agent does it for you — **no self-hosting, no API keys on your machine**.

This repository is the thin MIT-licensed installer. All CRM features run on Nerdboard's managed server.

## What you can do

- **Target precisely** — build customer segments from purchase history, sign-up dates, cart activity, and more, and preview the audience size before sending.
- **Create coupons safely** — issue store coupons with built-in guardrails against risky discounts, or link existing coupons for tracking.
- **Send campaigns** — schedule one-off sends, run A/B tests, and set up always-on automations like cart reminders, refill reminders, and welcome messages.
- **Track performance** — delivery, clicks, and attributed orders through natural conversation.
- **Get strategy help** — pull your store's CRM context so your agent can propose the next campaign.

## Quick start

Requires **Node.js 20+** and **Claude Code** or **Codex CLI**. Setup takes about 2 minutes.

```bash
npx -y @nerdlab-dev/crm-mcp@latest install
```

If both clients are installed, pick one:

```bash
npx -y @nerdlab-dev/crm-mcp@latest install --client claude
npx -y @nerdlab-dev/crm-mcp@latest install --client codex
```

Then sign in:

- **Claude Code** — run `/mcp` and complete the login in your browser.
- **Codex CLI** — run:

  ```bash
  codex mcp login \
    --scopes crm:segment:read,crm:segment:write,crm:coupon:read,crm:coupon:write,crm:campaign:read,crm:campaign:write,crm:campaign:send,crm:strategy:read,ad-asset:read,ad-asset:write \
    nerdboard-crm
  ```

During login you choose your Nerdboard workspace and permissions. If you still need a subscription or a connected store, Nerdboard walks you through it on screen.

That's it — ask your agent for a campaign.

## How it works

```mermaid
flowchart LR
    installer["This CLI<br/>(thin installer, MIT)"] -. registers .-> client
    client["Claude Code / Codex CLI"] -- "MCP over HTTPS + OAuth" --> server["Nerdboard remote MCP"]
    server -- "Cafe24 API + messaging channels" --> store["Your store & customers"]
```

The installer registers `nerdboard-crm` in your MCP client using each product's official `mcp add` command. Every CRM operation runs on Nerdboard's managed server, which talks to your store and messaging channels on your behalf. Using it requires a Nerdboard account, an active subscription, and a connected Cafe24 store.

## Security & transparency

What the installer does:

- Detects whether Codex CLI and Claude Code are installed.
- Checks whether a `nerdboard-crm` connection already exists.
- Registers the connection with the product's official `mcp add` command.
- Leaves everything untouched when the same connection already exists.
- Refuses to overwrite when the same name points to a different URL.

What the installer never does:

- Read or store store credentials or access tokens.
- Proxy or process CRM requests locally.
- Include Nerdboard server code or campaign logic.
- Delete or overwrite your existing MCP configuration.

On the server side, anything that actually sends messages to customers is gated behind an explicit confirmation in the conversation — your agent cannot fire a campaign without you saying so.

Every push and pull request runs an automated public-content check covering file allowlists, credential patterns, and prohibited terms.

## Manual install

Claude Code:

```bash
claude mcp add --transport http --scope user nerdboard-crm https://nerdboard.kr/mcp
```

Codex CLI:

```bash
codex mcp add nerdboard-crm --url https://nerdboard.kr/mcp
```

Any other remote-MCP-capable client (Cursor, etc.) can register the URL directly:

```text
https://nerdboard.kr/mcp
```

## Development

```bash
npm test
npm run check
npm run check:public
npm pack --dry-run
```

## License

The CLI source in this repository is [MIT licensed](./LICENSE). The Nerdboard service and its remote MCP server are governed by separate terms of service.

## Trademarks

OpenAI and Codex are trademarks of OpenAI. Claude and Claude Code are trademarks of Anthropic, PBC. Cafe24 is a trademark of Cafe24 Corp. All marks are used here only to describe compatibility. This project is independent and is not affiliated with, endorsed by, or sponsored by any of them.

---

<p align="center">Made by <a href="https://nerdboard.kr">Nerdboard</a></p>
