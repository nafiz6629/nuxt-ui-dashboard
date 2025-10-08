INSERT INTO post (post_title, post_category_id, post_created_at)
VALUES
  ('Understanding NuxtHub Migrations', 1, strftime('%s','2025-10-08 10:00:00')),
  ('Exploring Cloudflare D1 Database', 2, strftime('%s','2025-10-07 15:30:00')),
  ('How to Seed Data in Nuxt', 3, strftime('%s','2025-10-06 09:45:00')),
  ('Optimizing SQLite Queries', 1, strftime('%s','2025-10-05 13:20:00')),
  ('Building a Blog with Nuxt 3', 2, strftime('%s','2025-10-04 18:10:00')),
  ('Deploying NuxtHub to Production', 3, strftime('%s','2025-10-03 11:05:00')),
  ('Using h3-zod for API Validation', 1, strftime('%s','2025-10-02 08:40:00')),
  ('Dynamic Routing in Nuxt 3', 2, strftime('%s','2025-10-01 16:15:00')),
  ('Serverless Databases Explained', 3, strftime('%s','2025-09-30 19:55:00')),
  ('NuxtHub Tips & Tricks', 1, strftime('%s','2025-09-29 12:00:00'));

INSERT INTO post_category (post_category_name, post_category_parent_id)
VALUES 
  ('Technology', 0),
  ('Travel', 0),
  ('Lifestyle', 0);

