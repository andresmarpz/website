CREATE DATABASE `drizzle`;
--> statement-breakpoint
CREATE TABLE `drizzle`.`posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` text NOT NULL,
	`views` int NOT NULL DEFAULT 0,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
