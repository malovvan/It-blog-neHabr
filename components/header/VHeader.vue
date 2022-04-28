<script lang="ts">
import { defineComponent, useNuxtApp, useRouter } from '#app'

export default defineComponent({
  setup() {
    const { $store } = useNuxtApp();
    const router = useRouter();
    const logout = () => {
      $store.dispatch('signOut');
      router.push('login');
    }; 
    return {
      logout
    }
  },
})
</script>

<template>
  <div class="header">
    <div class="header__content container">
      <div class="header-nav">
        <NuxtLink to="/posts/" class="header__logo header__item">
          <h3>NeHabr</h3>
        </NuxtLink>
        <NuxtLink to="/flows/news/" class="header__item">
          <h3>News</h3>
        </NuxtLink>
        <NuxtLink to="/flows/popular/" class="header__item">
          <h3>Popular</h3>
        </NuxtLink>
        <NuxtLink to="/flows/webdesign/" class="header__item">
          <h3>Web Design</h3>
        </NuxtLink>
        <NuxtLink to="/flows/js/" class="header__item">
          <h3>JS</h3>
        </NuxtLink>
        <NuxtLink to="/flows/css/" class="header__item">
          <h3>css</h3>
        </NuxtLink>
      </div>
      
      <div class="header__profile">
        <NuxtLink to="/posts/new/">
          <span>Добавить статью</span>
         </NuxtLink>
         <span class="header-signout" v-text="'Выйти'" @click="logout" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
    background-color: #fff;
    border-bottom: 1px solid #F8FAFB;
    padding: 0 20px;
		&__content {
      display: flex;
      justify-content: space-between;
		}
    &__profile {
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
    &-nav {
      display: flex;

    }
    &__item {
      padding: 20px 25px;
      border-right: 1px solid #eceef2;
      &:hover {
        box-shadow: inset 0 -3px 0 0 var(--color-purple);
        cursor: pointer;
      }
    }
    &-signout {
      margin-left: 30px;
      cursor: pointer;
    }
}

</style>