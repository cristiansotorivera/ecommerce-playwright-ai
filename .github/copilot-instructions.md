# Playwright Framework Instructions

## General Rules
- Use TypeScript
- Use Playwright Test Runner
- Do NOT use hard waits (waitForTimeout)
- Prefer auto-waiting locators

## Locator Strategy
Always prefer:
1. getByRole
2. getByLabel
3. getByText
4. getByTestId

Avoid:
- XPath unless necessary
- fragile CSS selectors

## Framework Structure
- Pages → src/pages
- Components → src/components
- Fixtures → src/fixtures
- Test data → src/data
- Tests → tests/ui and tests/api

## Page Object Rules
- Keep methods simple and reusable
- Do not mix assertions with actions unless necessary
- Use meaningful method names

## Test Rules
- Tests should be readable
- Use fixtures instead of creating page objects manually
- Keep assertions inside tests when possible

## Data Usage
- Do not hardcode product names
- Use data from src/data files

## Example Pattern
test('example', async ({ productsPage }) => {
  await productsPage.open('/inventory.html');
});