<template>
  <!-- <div>
    <h1>Últimas Notícias</h1>
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="isLoading">Carregando...</div>
    <div v-else>
      <div
        v-for="article in news.articles"
        :key="article.url"
      >
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div> -->
</template>

<script setup>
// const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig.public.apiBaseUrl)

// const { data: news, pending: isLoading, error } = await useFetch(
//   `?q=technology`,
//   {
//     server: false,
//     baseURL: runtimeConfig.public.apiBaseUrl,
//     headers: {
//       authorization: `Bearer ${runtimeConfig.public.apiKey}`
//     }
//   }
// )

// const { data: news, pending: isLoading, error } = await useFetch('/api/news')
</script>
