# MCP Usage Guide

This framework uses MCP to connect AI agents with Playwright and ecommerce testing tools.

## MCP Servers

### 1. Playwright MCP
Used for browser automation and UI exploration.

Configured in:
.vscode/mcp.json

### 2. Ecommerce Framework MCP
Used for framework-specific actions.

Available tools:
- run_smoke_tests
- run_cart_tests
- run_tests_by_tag
- list_test_products
- list_test_users
- get_latest_test_results

## How to use with Copilot

Example prompts:

- Use the ecommerce-framework MCP server to run smoke tests and summarize the result.
- Use Playwright MCP to inspect the login page and suggest better locators.
- List available test products and generate a cart test.
- Run @cart tests and analyze failures.

## Safety Rules

- Do not commit .env
- Do not expose credentials
- Keep MCP tools limited and safe
- Review AI-generated code before committing