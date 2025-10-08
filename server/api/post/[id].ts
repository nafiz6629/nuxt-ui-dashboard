export default defineEventHandler(async (event) => {
  const db = hubDatabase()
  const id = getRouterParam(event, 'id')

  const results = await db.prepare(`SELECT * FROM post LEFT JOIN post_category ON post.post_category_id = post_category.post_category_id WHERE post.post_id = ?1`)
    .bind(id).first()

  return results
})
