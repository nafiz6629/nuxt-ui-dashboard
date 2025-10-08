export default defineEventHandler(async (event) => {
  const db = hubDatabase()
  const { results } = await db.prepare('SELECT * FROM post LEFT JOIN post_category ON post.post_category_id = post_category.post_category_id LIMIT 2').all()

  return results
})
