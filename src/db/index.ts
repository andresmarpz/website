import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

config({ path: ".env" });

const sql = neon(process.env.STORAGE_DATABASE_URL as string);
export const db = drizzle({ client: sql, schema });
