# 🛒 Ecommerce Playwright AI Framework

![Playwright](https://img.shields.io/badge/Playwright-Testing-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)
![CI](https://img.shields.io/badge/CI-GitHub_Actions-success)
![Status](https://img.shields.io/badge/Tests-Smoke_Passing-brightgreen)

A modern end-to-end testing framework powered by:

* 🎭 Playwright (UI + API testing)
* 🧠 GitHub Copilot (AI-assisted development)
* 🤖 MCP (Model Context Protocol for AI agents)
* ⚡ GitHub Actions (CI/CD)

---

## 🚀 Features

* Scalable Playwright framework (TypeScript)
* Page Object Model + Fixtures
* Environment-based configuration (dev / qa / stage)
* Test tagging (@smoke, @cart, @checkout, etc.)
* Authentication reuse (storage state)
* GitHub Actions integration
* AI-ready with Copilot + MCP
* Custom MCP server for test execution and data access

---

## 📁 Project Structure

ecommerce-playwright-ai/
├── src/
│   ├── pages/
│   ├── components/
│   ├── fixtures/
│   ├── api/
│   ├── data/
│   ├── utils/
│   └── config/
├── tests/
│   ├── ui/
│   └── api/
├── mcp/
│   └── custom-server/
├── .github/
│   ├── workflows/
│   └── prompts/
├── docs/
└── README.md

---

## ⚙️ Setup

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Create a `.env` file:

BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://www.saucedemo.com
TEST_USER_EMAIL=standard_user
TEST_USER_PASSWORD=secret_sauce

---

## 🧪 Running Tests

npm test
npm run test:ui
npm run test:smoke
npm run test:cart
npm run test:checkout
npm run test:headed
npm run test:debug
npm run report

---

## 🔐 Authentication

* Login runs once in setup project
* Session reused across tests

---

## 🏷️ Test Tags

@smoke → Critical flows
@cart → Cart functionality
@checkout → Checkout flows
@account → Account features
@regression → Full regression suite

---

## 🤖 AI + MCP Integration

Playwright MCP:

* Browser automation
* UI inspection
* Locator discovery

Ecommerce MCP (Custom Tools):

* run_smoke_tests
* run_cart_tests
* run_tests_by_tag
* list_test_products
* list_test_users
* get_latest_test_results

---

## 🧠 GitHub Copilot

Includes:

* Copilot instructions (.github/copilot-instructions.md)
* Prompt files (.github/prompts/)

Use Copilot to:

* Generate tests
* Refactor code
* Debug flaky tests

---

## ⚡ CI/CD (GitHub Actions)

* Runs on push and pull requests
* Executes smoke tests
* Uploads reports and results

---

## 📊 Reports

* playwright-report/
* test-results/
* screenshots, videos, traces on failure

---

## 📚 Documentation

docs/MCP-USAGE.md

---

## 🛠️ Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* GitHub Copilot
* MCP (Model Context Protocol)

---

## 🔥 Future Improvements

* Allure reporting
* Visual testing
* API contract testing
* AI-generated test cases
* Advanced MCP agents

---

## 👨‍💻 Author

Cristian Soto
QA Engineer
