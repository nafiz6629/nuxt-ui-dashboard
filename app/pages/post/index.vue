<template>
  <UDashboardPanel id="post">
    <template #header>
      <UDashboardNavbar title="Post">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
        <template #right>
          <CustomersAddModal />
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <table>
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Title
            </th>
            <th class="text-left">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in data"
              :key="post.post_id"
          >
            <td>{{ post.post_id }}</td>
            <td>
              <NuxtLink :to="`/post/${post.post_id}`">
                {{ post.post_title }}
              </NuxtLink>
            </td>
            <td>{{ post.post_category_name }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
const { data, status, refresh }: any = await useLazyFetch('/api/post_list',
  {
    method: 'GET',
    watch: false,
    key: 'post-list'

  }
)
</script>

<style scoped>
table, th, td {
  /* Set a border style, width, and color */
  border: 1px solid #ccc; /* 1 pixel thick, solid line, light gray color */
}

table {
  /* This is important for making the borders look like a single, crisp line */
  border-collapse: collapse;
  /* Optional: make the table take up the full width */
  width: 100%;
}

/* Optional: Add padding for better spacing */
th, td {
  padding: 8px;
  text-align: left;
}
</style>
