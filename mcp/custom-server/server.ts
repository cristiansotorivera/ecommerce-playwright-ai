import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const server = new McpServer({
  name: 'ecommerce-playwright-framework',
  version: '1.0.0',
});

server.registerTool(
  'run_smoke_tests',
  {
    title: 'Run Playwright Smoke Tests',
    description: 'Runs the Playwright smoke test suite for the ecommerce framework.',
    inputSchema: {},
  },
  async () => {
    const { stdout, stderr } = await execAsync('npm run test:smoke');

    return {
      content: [
        {
          type: 'text',
          text: stdout || stderr || 'Smoke tests completed.',
        },
      ],
    };
  }
);

server.registerTool(
  'run_cart_tests',
  {
    title: 'Run Cart Tests',
    description: 'Runs Playwright tests tagged with @cart.',
    inputSchema: {},
  },
  async () => {
    const { stdout, stderr } = await execAsync('npm run test:cart');

    return {
      content: [
        {
          type: 'text',
          text: stdout || stderr || 'Cart tests completed.',
        },
      ],
    };
  }
);

server.registerTool(
  'run_tests_by_tag',
  {
    title: 'Run Tests By Tag',
    description: 'Runs Playwright tests by tag, for example @smoke or @checkout.',
    inputSchema: {
      tag: z.string().describe('The Playwright tag to run, for example @smoke'),
    },
  },
  async ({ tag }) => {
    const safeTag = tag.replace(/[^a-zA-Z0-9@:_-]/g, '');
    const { stdout, stderr } = await execAsync(`npx playwright test -g ${safeTag}`);

    return {
      content: [
        {
          type: 'text',
          text: stdout || stderr || `Tests completed for tag ${safeTag}.`,
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});