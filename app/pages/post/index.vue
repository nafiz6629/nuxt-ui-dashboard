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
