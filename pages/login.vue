<script setup lang="ts">
definePageMeta({
  layout: 'plain'
})

const isLoggedIn = useIsLoggedIn()

function login() {
  isLoggedIn.value = true
  useRouter().push('/')
}
</script>

<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <label for="username">Username</label>
    <input type="text" id="username" />
    <label for="password">Password</label>
    <input type="password" id="password" />
    <button type="submit">Login</button>
  </form>
</template>