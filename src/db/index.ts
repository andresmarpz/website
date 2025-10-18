import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" });

const sql = neon(process.env.POSTGRES_DATABASE_URL as string);
export const db = drizzle({ client: sql });
