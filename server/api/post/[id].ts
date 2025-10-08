export default defineEventHandler(async (event) => {
  const db = hubDatabase()
  const id = getRouterParam(event, 'id')

  const results = await db.prepare(`SELECT 
    post.*, 
    post_category.post_category_name, 
    GROUP_CONCAT(post_tag.post_tag_name) AS tags
    FROM post LEFT JOIN post_category ON post.post_category_id = post_category.post_category_id 
    LEFT JOIN post_tag ON FIND_IN_SET(post_tag.post_tag_id, post.post_tag_id)
    WHERE post.post_id = ?1`)
    .bind(id).first()

  return results
})
