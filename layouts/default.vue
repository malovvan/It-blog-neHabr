<script lang="ts">
import {
  defineComponent, useNuxtApp
} from '#app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

import Header from '~/components/header/VHeader.vue'
import Footer from '~/components/footer/VFooter.vue'
export default defineComponent({
  components: {
    Header, Footer
  },

  setup() {
    const { $store, $db } = useNuxtApp();
    $store.dispatch('getPosts', $db)
  }
});
</script>

<template>
  <div class="gradient-layout">
    <Header />
    <Nuxt style="flex: 1 0 auto" class="container" />
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
.gradient-layout {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: linear-gradient(110.86deg, #edd8f4 12.77%, #FFFFFF 59.13%);
  width: 100%;
  height: 100%;
}
.container {
  margin-top: 50px;

}
</style>
