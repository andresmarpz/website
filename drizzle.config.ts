import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
  schema: './drizzle/schema.ts',
  dbCredentials: {
    uri: process.env.DATABASE_URL!
  },
  driver: 'mysql2'
});
