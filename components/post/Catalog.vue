<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const posts = [
    {
      id: 1,
      title: 'Lorem ipsuamLorem ipsuamLorem ipsuam',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    {
      id: 2,
      title: 'title',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    {
      id: 3,
      title: 'title',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    {
      id: 4,
      title: 'title',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    {
      id: 5,
      title: 'Lorem ipsuamLorem ipsuamLorem ipsuam',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    {
      id: 6,
      title: 'title',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    {
      id: 7,
      title: 'title',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    {
      id: 8,
      title: 'title',
      category: 'category',
      date: '2022-01-03',
      description: 'Lorem ipsuam asmdkjasodksadl askdo asd koasdasd',
    },
    ];

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