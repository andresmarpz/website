CREATE TABLE IF NOT EXISTS "posts" (
  "id" serial PRIMARY KEY NOT NULL,
  "title" text NOT NULL,
  "subtitle" text,
  "views" numeric(1)
);
