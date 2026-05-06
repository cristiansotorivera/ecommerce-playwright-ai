export const USERS = {
  standard: {
    username: process.env.TEST_USER_EMAIL || 'standard_user',
    password: process.env.TEST_USER_PASSWORD || 'secret_sauce',
  },
} as const;