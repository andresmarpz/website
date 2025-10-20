CREATE TABLE "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"views" integer DEFAULT 0
);
--> statement-breakpoint
CREATE UNIQUE INDEX "slug_unique_index" ON "posts" USING btree ("slug");