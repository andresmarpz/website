import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

const connection = connect({
  url: process.env.DATABASE_URL!
});

export const db = drizzle(connection);
