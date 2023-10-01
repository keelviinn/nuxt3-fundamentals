<script setup>
useHead({
  title: 'Movies',
  titleTemplate: (title) => (title ? `${title} - Movies` : 'Movies'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'A movie app built with Nuxt.js',
    },
  ],
})
</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/movies">Movies</NuxtLink> |
    </nav>
    <NuxtPage />
  </div>
</template>
