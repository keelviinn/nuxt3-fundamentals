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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
