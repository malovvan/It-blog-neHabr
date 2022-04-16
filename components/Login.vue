<script lang="ts">
import { defineComponent, ref, useRoute, useRouter } from '#app'
import axios from 'axios'

export default defineComponent({
  layout: 'guest',
  setup() {
    const name = ref('');
    const password = ref('');
    const router = useRouter();
    const onSubmit = () => {
      console.log('submit!', name.value, password.value);
      router.push('posts/')
    };

    // async function jopa() {
    //   const test = await axios.get('https://it-blog-nehabr-default-rtdb.europe-west1.firebasedatabase.app/tests.json')
    //   console.log(test)
    // }
    return {
      onSubmit,
      name,
      password
    }
  },
})
</script>
<template>
  <div class="container">
    <div class="login-form">
      <a-form>
      <a-form-item label="Введите имя">
        <a-input v-model="name" />
      </a-form-item>
      <a-form-item label="Введите пароль">
        <a-input v-model="password" />
      </a-form-item>
      <a-form-item class="login-footer">
        <a-button block type="primary" @click="onSubmit">Войти</a-button>
      </a-form-item>
    </a-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
}
.form {
  background-color: white;
  border: 1px solid gray;
  padding: 30px;
}
.login-form {
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;
}
.login-footer {
  width: 100%;
  margin-top: 20px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
}
</style>
