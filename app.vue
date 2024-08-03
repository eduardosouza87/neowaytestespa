<template>
  <div>
    <div class="min-h-screen w-full py-10">
      <div class="container mx-auto">
        <div class="flex flex-col gap-y-8">
          <h1 class="text-4xl">Últimas Notícias</h1>
          <div v-if="error">{{ error.message }}</div>
          <div v-else-if="isLoading">Carregando...</div>
          <div
            v-else
            class="flex flex-col gap-y-4"
          >
            <div
              v-for="article in news.articles"
              :key="article.url"
              class="flex flex-col gap-y-1"
            >
              <h2 class="text-xl">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.apiBaseUrl)

const { data: news, pending: isLoading, error } = await useFetch(
  `?q=technology`,
  {
    server: false,
    baseURL: runtimeConfig.public.apiBaseUrl,
    headers: {
      authorization: `Bearer ${runtimeConfig.public.apiKey}`
    }
  }
)

// const { data: news, pending: isLoading, error } = await useFetch('/api/news')
</script>
