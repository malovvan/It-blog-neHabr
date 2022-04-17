<script lang="ts">
import { defineComponent } from '#app'
import CatalogPosts from '~/components/post/Catalog.vue'
export default defineComponent({
  components: {
    CatalogPosts
  },
})
</script>

<template>
  <CatalogPosts />
</template>
