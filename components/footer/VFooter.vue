<template>
  <div class="footer">
    <NuxtLink to="/posts/" class="footer-logo">
      NEHABR
    </NuxtLink>
    <div class="footer-info">
      <NuxtLink to="/posts/" class="footer-info__item">
        About us
      </NuxtLink>
      <NuxtLink to="/posts/" class="footer-info__item">
        Categories
      </NuxtLink>
      <NuxtLink to="/posts/" class="footer-info__item">
        Join us
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background: #fff;
  border-top: 1px solid #eceef2;
}
.footer-logo {
  font-size: 22px;
}
.footer-info {
    display: flex;
		&__item {
      margin-right: 50px;
      font-size: 18px;
		}
}

</style>