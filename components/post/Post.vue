<script lang="ts">
import { defineComponent } from '#app'

export default defineComponent({
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    console.log('props', props);
    
  },
})
</script>

<template>
<div class="post-card">
  <div class="post-img">
    <img src="@/static/background.webp" >
  </div>
  <div class="post-body">
    <div class="post-body__meta">
      <div class="post-body__meta-category">
        {{post.category}}
      </div>
      <div class="post-body__meta-date">
        <span> {{post.date}}</span>
      </div>
    </div>
    <div class="post-body__title">
      <NuxtLink to="/">
        {{post.title}}
      </NuxtLink>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.post-card {
  display: flex;
  flex-direction: column;
}
.post-img {
  transition: .2s opacity;
  margin-bottom: 10px;
  img {
    height: auto;
    width: 100%;
    max-width: 720px;
    object-fit: cover;
  }
  &:hover {
    opacity: 0.9;
  }
}
.post-body {

  &__meta {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  &__meta-category {
    background-color: var(--color-purple);
    margin-right: 30px;
    font-size: 13px;
    text-transform: uppercase;
    padding: 3px 10px;
    font-weight: 600;
    border-radius: 2px;
    margin-right: 15px;
    color: #fff;
  }

  &__meta-date {
    font-size: 13px;
    font-weight: 600;
    color: #3d455c;
  }

  &__title {
    font-size: 18px;
    a {
      font-weight: 600;
      color: #212631;
      text-decoration: none;
    }
  }
}

</style>