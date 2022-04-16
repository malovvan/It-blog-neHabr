<template>
  <h1>
    ItBlogNehabr
  </h1>
</template>
<script lang="ts">
import { defineComponent } from '#app'
import axios from 'axios'

export default defineComponent({
  setup() {
    async function jopa() {
      const test = await axios.get('https://it-blog-nehabr-default-rtdb.europe-west1.firebasedatabase.app/tests.json')
      console.log(test)
    }

    jopa();
  },
})
</script>
