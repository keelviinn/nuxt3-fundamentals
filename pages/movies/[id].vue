<script lang="ts" setup>
interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

const route = useRoute()
const { data } = await useFetch<Movie>(
  `http://www.omdbapi.com/?apikey=6647c460&i=${route.params.id}`,
  {
    key: `/movie/${route.params.id}`,
    pick: ['Title', 'Year', 'Poster', 'Plot'],
    onResponse({ request, response }) {
      if (response._data.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, message: 'Movie not found' })
      }
    },
  }
)

useHead({
  title: data.value?.Title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: data.value?.Plot,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: data.value?.Title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: data.value?.Plot,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: data.value?.Poster,
    }
  ],
})
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
