<template>
  <UDashboardPanel id="postId">
    <template #header>
      <UDashboardNavbar title="Post Details">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <div v-if="status !='pending'">
        post id: {{ data.post_id }} <br />
        post title: {{ data.post_title }} <br />
      </div>
    </template>
    <!-- {{ data }} -->
  </UDashboardPanel>
</template>

<script setup lang="ts">
const { data, status, refresh }: any = await useLazyFetch('/api/post/' + useRoute().params.id,
  {
    method: 'GET',
    watch: false
  }
)
console.log(data)
</script>
