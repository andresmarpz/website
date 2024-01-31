import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

export const posts = mysqlTable('posts', {
  id: int('id').primaryKey().autoincrement(),
  slug: varchar('slug', {
    length: 255
  })
    .notNull()
    .unique(),
  views: int('views').notNull().default(0)
});

export type SelectPost = InferSelectModel<typeof posts>;
export type InsertPost = InferInsertModel<typeof posts>;
