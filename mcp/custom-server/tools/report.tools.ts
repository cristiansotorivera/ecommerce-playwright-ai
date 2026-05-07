import fs from 'node:fs';
import path from 'node:path';

export function getLatestTestResultsSummary() {
  const resultsDir = path.resolve('test-results');

  if (!fs.existsSync(resultsDir)) {
    return 'No test-results folder found. Run Playwright tests first.';
  }

  const files = fs.readdirSync(resultsDir, { recursive: true });

  if (files.length === 0) {
    return 'test-results folder exists, but no result files were found.';
  }

  return JSON.stringify(
    {
      resultsDirectory: resultsDir,
      filesFound: files,
    },
    null,
    2
  );
}