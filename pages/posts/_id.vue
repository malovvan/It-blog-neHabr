
<script lang="ts">
import { useNuxtApp, useRoute } from '@nuxt/bridge/dist/runtime'
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const { $store,  $db } = useNuxtApp();
    const route = useRoute();
    const posts = computed(() => $store.state.postList)
    const post = ref('')
    if (posts.value) {
      post.value = posts.value?.find((post: any) => post.id === route.params.id)
    } else {
      $store.dispatch('getPosts', $db).then(() => {
        const test = $store.state.postList
        post.value = test.find((post: any) => post.id === route.params.id)
      })
    }
    return {
      post
    }
  },
})
</script>

<template>
  <div class="post" v-if="post">
    <span class="post__header">
      {{post.title}}
    </span>
    <div class="post__image">
      <img src="@/static/background.webp" >
    </div>
    <div class="post__body">
      {{post.description}}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post {
  max-width: 800px;
  width: 100%;
  background: #fff;
  padding: 30px;
  text-align: left;
  &__header {
    color: #333;
    font-size: 26px;
    margin-bottom: 20px;
  }
  &__image {
    margin-bottom: 20px;
  }
  &__body {
    font-size: 19px;
    font-weight: 500;
  }
}
</style>