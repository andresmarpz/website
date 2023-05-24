import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// migrations
const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });
export const migrateDatabase = () =>
  migrate(drizzle(migrationClient), {
    migrationsFolder: 'drizzle'
  });

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL!);
export const db: PostgresJsDatabase = drizzle(queryClient);
