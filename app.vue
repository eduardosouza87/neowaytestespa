<template>
  <div class="relative">
    <div class="min-h-screen w-full py-10 px-4">
      <div class="container mx-auto">
        <div class="flex items-start gap-x-10">
          <div class="flex flex-col gap-y-8 lg:w-2/3 bg-white rounded-md shadow p-6 lg:p-8">
            <div
              class="flex flex-col max-lg:gap-y-4 lg:flex-row lg:justify-between items-center pb-4 border-b border-b-app-blue-400/20"
            >
              <h1 class="text-2xl lg:text-4xl text-app-blue-400">Últimas Notícias</h1>
              <SearchInput v-model="searchKeyword" />
            </div>

            <div v-if="error">{{ error.message }}</div>

            <div
              v-else-if="isLoading"
              class="flex flex-col gap-y-8"
            >
              <SkeletonLoader :count="5" />
            </div>

            <NewsList
              v-if="filteredNews"
              :news="filteredNews"
            />
          </div>

          <div class="sticky top-6 lg:w-1/3 bg-white rounded-md p-8 shadow">
            <FavoriteList :favorites="favoritesStore.favorites" />
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="fixed right-6 bottom-6">
      <div class="shadow p-4 flex flex-col items-center bg-white rounded-full">
        <UIcon
          name="material-symbols:star"
          class="w-8 h-8 text-amber-600"
        />
      </div>
    </div> -->

    <UModals />
    <UNotifications />
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/favorites';
const favoritesStore = useFavoritesStore()
const runTimeConfig = useRuntimeConfig()

const { data: news, pending: isLoading, error } = await useFetch(
  `?q=technology`,
  {
    server: false,
    baseURL: runTimeConfig.public.apiBaseUrl,
    headers: {
      authorization: `Bearer ${runTimeConfig.public.apiKey}`
    }
  }
)

const searchKeyword = ref('')
const newsList = ref([])

// Watch para atualizar a lista de notícias
watchEffect(() => {
  if (news.value) {
    newsList.value = news.value.articles
  }
})

// Computed que retorna ou a lista completa das news
// ou o filtro pelo input de busca
const filteredNews = computed(() => {
  if (!searchKeyword.value) {
    return newsList.value || []
  }

  return newsList.value.filter(article =>
    article.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})
</script>
