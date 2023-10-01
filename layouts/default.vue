<script setup lang="ts">
const isLoggedIn = useIsLoggedIn()
</script>
<template>
  <nav class="flex gap-3">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
    <a href="#" v-else @click.prevent="isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>