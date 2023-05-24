import { InferModel } from 'drizzle-orm';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  slug: text('slug').primaryKey(),
  views: integer('views')
});

export type Post = InferModel<typeof posts>;
