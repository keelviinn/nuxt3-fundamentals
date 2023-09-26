<script lang="ts" setup>
interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface ApiResponse {
  Response: "True" | "False"
  Search: Movie[]
  totalResults: string
}

const query = ref("")
const movies = ref<Movie[]>([])

async function search() {
  const { Search }: ApiResponse = await $fetch(`http://www.omdbapi.com/?apikey=6647c460&s=${query.value}`)
  movies.value = Search
}
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" placeholder="Search for a movie" v-model="query" />
      <button>Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{
          name: 'movies-id',
          params: {
            id: movie.imdbID
          }
        }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
