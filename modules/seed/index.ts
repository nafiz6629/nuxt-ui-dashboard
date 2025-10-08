import { createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-auth-module'
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('hub:database:queries:paths', (queries) => {
      // Add SQL files to run after migrations
      queries.push(resolve('./db-queries/seed-db.sql'))
    })
  }
})
