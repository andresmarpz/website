import { sql } from '@vercel/postgres';

async function createSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    views INT DEFAULT 0
  );
  `;
}

// Call the function to create the schema
createSchema();
