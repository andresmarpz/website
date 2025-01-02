import { integer, pgTable, text, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

export const posts = pgTable(
  'posts',
  {
    id: uuid('id').defaultRandom().notNull(),
    slug: text('slug').notNull(),
    views: integer('views').default(0)
  },
  (table) => ({
    slugUniqueIndex: uniqueIndex('slugUniqueIndex').on(table.slug)
  })
);
