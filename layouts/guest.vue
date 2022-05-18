<script lang="ts">
import {
  defineComponent
} from '#app';

export default defineComponent({
});
</script>

<template>
  <div class="gradient-layout">
    <Nuxt />
  </div>
</template>
<style lang="scss" scoped>
.gradient-layout {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: linear-gradient(110.86deg, #edd8f4 12.77%, #FFFFFF 59.13%);
  width: 100%;
  min-height: 100%;
}
</style>
