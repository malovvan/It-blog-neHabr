<script lang="ts">
import { defineComponent, computed, useNuxtApp } from '#app'

export default defineComponent({
  setup() {
    const { $store } = useNuxtApp();
    const posts = computed(() => $store.state.postList)
    return {
      posts
    }
  },
})
</script>

<template>
  <div class="catalog-posts">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<style lang="scss" scoped>
.catalog-posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  margin-top: 50px;
}
</style>