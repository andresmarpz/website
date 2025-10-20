import { integer, pgTable, text, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const posts = pgTable(
  "posts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull(),
    views: integer("views").default(0),
  },
  (table) => ([
    uniqueIndex("slug_unique_index").on(table.slug),
  ])
);
