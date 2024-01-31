ALTER TABLE `posts` MODIFY COLUMN `slug` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `drizzle`.`posts` ADD CONSTRAINT `posts_slug_unique` UNIQUE(`slug`);--> statement-breakpoint
RENAME TABLE `drizzle`.`posts` TO `posts`;
--> statement-breakpoint
DROP DATABASE `drizzle`;
