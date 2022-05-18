<script lang="ts">
import { defineComponent, computed, useNuxtApp, watch } from '#app'

export default defineComponent({
  setup() {
    const { $store,  $db } = useNuxtApp();

    const posts = computed(() => $store.state.postList)

    if (!posts.value) {
      $store.dispatch('getPosts', $db)
    }
    return {
      posts
    }
  },
})
</script>

<template>
  <div class="catalog-posts">
    <Post v-for="post in posts" :key="post.id" :post="post"  />
  </div>
</template>
<style lang="scss" scoped>
.catalog-posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  row-gap: 40px;
  margin-top: 50px;
}
</style>