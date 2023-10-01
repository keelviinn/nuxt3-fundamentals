<script setup lang="ts">
const user = useUser()
</script>
<template>
  <nav class="flex gap-3">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="/admin">Admin</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a href="#" v-else @click.prevent="user.logout">Logout</a>
  </nav>
  <slot></slot>
</template>