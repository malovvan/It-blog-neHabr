<script lang="ts">
import { defineComponent, ref, useNuxtApp } from '#app'
import { Post } from '~/types/models/Post';

export default defineComponent({
  setup() {
    const { $store, $db, $fireStorage } = useNuxtApp();
    const form = ref<Post>({
      category: '',
      created_at: new Date(),
      description: '',
      image: 'TodoImage',
      title: '',
    });

    const uploadImg = (() => {
      console.log('$fireStorage', $fireStorage);
    })
    const onSubmit = (() => {
      uploadImg();
      $store.dispatch('createPost', { db: $db, post: form.value })
    })
    return {
      form,
      onSubmit,
    }
  },
})
</script>

<template>
  <div class="admin-panel">
    <div class="admin-panel__title">
      <h1> Добавить Пост</h1>
    </div>
    <a-form class="form-add">
      <a-form-item label="Название">
        <a-input type="text" v-model="form.title" placeholder="Введите название" />
      </a-form-item>
      <a-form-item label="Категория">
        <a-input type="text" v-model="form.category" placeholder="Введите Категорию" />
      </a-form-item>
      <a-form-item label="Описание">
        <a-input type="textarea" v-model="form.description" placeholder="Введите описание" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="onSubmit">Опубликовать пост</a-button>
      </a-form-item>

    </a-form>
  </div>
</template>
<style lang="scss" scoped>
.admin-panel {
}
</style>