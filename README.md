# 🛒 Ecommerce Playwright AI Framework

![CI](https://github.com/YOUR_USERNAME/ecommerce-playwright-ai/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-E2E-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Framework-blue)
![AI](https://img.shields.io/badge/AI-Copilot%20%2B%20MCP-purple)

A **modern, AI-augmented test automation framework** designed for scalable ecommerce testing.

---

## 🚀 Why This Project Matters

Most automation frameworks:

* ❌ focus only on test execution
* ❌ ignore maintainability
* ❌ don’t leverage AI effectively

This framework solves that by combining:

* 🎭 **Playwright** → reliable browser automation
* 🧠 **GitHub Copilot** → AI-assisted development
* 🤖 **MCP (Model Context Protocol)** → AI agents that can run and analyze tests
* ⚡ **GitHub Actions** → CI/CD automation

👉 Result: a **future-ready QA framework**.

---

## ✨ Key Features

* Scalable **TypeScript Playwright framework**
* Page Object Model + Fixtures
* Environment-based configuration (dev / qa / stage)
* Test tagging strategy (@smoke, @cart, @checkout)
* Authentication reuse (storage state)
* CI/CD pipeline with GitHub Actions
* AI-ready architecture (Copilot + MCP)
* Custom MCP server for:

  * running tests
  * reading test data
  * analyzing results

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

Install browsers:

npx playwright install

Create `.env` file:

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

## 🔐 Authentication Strategy

* Login runs once in setup project
* Session is reused across all tests
* Improves performance and stability

---

## 🏷️ Test Strategy

@smoke → critical user flows
@cart → cart functionality
@checkout → checkout scenarios
@account → user flows
@regression → full coverage

---

## 🤖 AI + MCP Integration

### Playwright MCP

* UI inspection
* Locator discovery
* Browser automation

### Custom Ecommerce MCP

Tools available:

* run_smoke_tests
* run_cart_tests
* run_tests_by_tag
* list_test_products
* list_test_users
* get_latest_test_results

👉 Enables **AI-driven testing workflows**:

* generate tests
* run tests
* analyze failures

---

## 🧠 GitHub Copilot Integration

This project includes:

* Custom instructions
* Prompt templates
* Structured workflows

Copilot is used to:

* generate tests
* refactor code
* debug flaky tests

---

## ⚡ CI/CD Pipeline

* Runs on push & pull requests
* Executes smoke tests
* Uploads reports and results

👉 Ensures continuous validation of the application.

---

## 📊 Reporting

* HTML reports → playwright-report/
* Test results → test-results/
* Debug artifacts → screenshots, videos, traces

---

## 📚 Documentation

MCP Guide → docs/MCP-USAGE.md

---

## 🛠️ Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* GitHub Copilot
* MCP (Model Context Protocol)

---

## 🔥 Future Enhancements

* Allure reporting
* Visual regression testing
* API contract validation
* AI-generated test suites
* Advanced failure analysis agents

---

## 👨‍💻 Author

Cristian Soto
QA Engineer

---

## ⭐ What Makes This Different

This is not just a test framework.

It is:

* ✅ AI-integrated
* ✅ scalable
* ✅ CI-ready
* ✅ built for real-world teams

---

## 📌 Notes

Replace:

YOUR_USERNAME

with your actual GitHub username to activate the CI badge.
