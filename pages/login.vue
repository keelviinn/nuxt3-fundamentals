<script setup lang="ts">
definePageMeta({
  layout: 'plain'
})

const user = useUser()
</script>

<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label for="username">Username</label>
    <input type="text" id="username" />
    <label for="password">Password</label>
    <input type="password" id="password" />
    <button type="submit">Login</button>
  </form>
</template>