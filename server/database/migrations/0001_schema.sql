-- Migration number: 0001 	 2025-10-08T10:05:15.754Z
CREATE TABLE `post` (
  `post_id` integer PRIMARY KEY AUTOINCREMENT,
  `post_title` text NOT NULL,
  `post_category_id` integer NOT NULL,
  `post_created_at` integer NOT NULL
);

CREATE TABLE `post_category` (
  `post_category_id` integer PRIMARY KEY AUTOINCREMENT,
  `post_category_name` text NOT NULL,
  `post_category_parent_id` integer NOT NULL
);

CREATE TABLE `post_tag` (
  `post_tag_id` integer PRIMARY KEY AUTOINCREMENT,
  `post_tag_name` text
);

ALTER TABLE `post`
ADD `post_tag_id` text;