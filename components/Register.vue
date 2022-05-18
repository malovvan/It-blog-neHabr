<script lang="ts">
import { defineComponent, ref, useNuxtApp, useRouter } from '#app'
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

export default defineComponent({
  layout: 'guest',
  setup() {
    const { $auth, $store } = useNuxtApp();
    const name = ref('');
    const password = ref('');
    const passwordCheck = ref('');
    const router = useRouter();
    const onSubmit = () => {
      if (password.value === passwordCheck.value) {
        createUserWithEmailAndPassword ($auth, name.value, password.value)
          .then((userCredential: any) => {
            console.log('userCredential', userCredential);
            $store.dispatch('signIn', userCredential.user.reloadUserInfo.email)
            router.push('/posts/')

          })
          .catch((error) => {
            console.log('errors', error)
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
          });
      } else {
        alert('Пароли не совпадают')
      }
      }
        


    return {
      onSubmit,
      name,
      password,
      passwordCheck,
    }
  },
})
</script>
<template>
  <div class="container">
    <div class="login-form">
      <a-form>
      <a-form-item label="Введите email">
        <a-input v-model="name" />
      </a-form-item>
      <a-form-item label="Введите пароль">
        <a-input v-model="password" type="password" />
      </a-form-item>
      <a-form-item label="Повторите пароль">
        <a-input v-model="passwordCheck" type="password" />
      </a-form-item>
      <a-form-item class="login-footer">
        <a-button block type="primary" @click="onSubmit">Войти</a-button>
      </a-form-item>
      <div class="login-register">
        <router-link to="/login/"> Уже есть аккаунт? Войти</router-link>
      </div>
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

.login-register {
  margin-top: 20px;
  font-weight: 600;
  color: #9d13a6;
}
</style>
