<template>
  <div>
    <div class="min-h-screen w-full py-10 px-4">
      <div class="container mx-auto">
        <div class="flex items-start gap-x-10">
          <div class="flex flex-col gap-y-8 w-2/3 bg-white rounded-md shadow p-8">
            <div v-if="error">{{ error.message }}</div>

            <div v-else-if="isLoading">
              <div class="flex items-center space-x-4">
                <div class="flex justify-between items-center w-full">
                  <USkeleton class="h-8 w-[250px]" />
                  <USkeleton class="h-8 w-[200px]" />
                </div>
              </div>
              <span>Carregando...</span>
            </div>

            <div
              v-else
              class="flex flex-col gap-y-"
            >
              <div
                class="flex flex-col lg:flex-row lg:justify-between items-center pb-4 mb-4 border-b border-b-app-blue-400/20"
              >
                <h1 class="text-4xl text-app-blue-400">Últimas Notícias</h1>
                <UInput
                  class="max-lg:order-2"
                  icon="i-heroicons-magnifying-glass-20-solid"
                  size="lg"
                  color="white"
                  :trailing="false"
                  placeholder="Buscar notícias..."
                  v-model="searchKeyword"
                  @focus="startTracking"
                  @input="resetTimer"
                  @blur="clearTimer"
                />
              </div>

              <div class="flex flex-col">
                <div
                  v-for="article in filteredNews"
                  :key="article.url"
                  class="flex flex-row justify-between items-center lg:gap-x-10 border-t border-t-app-blue-100 first:border-t-0 pt-6 mt-6"
                >
                  <div class="flex flex-col gap-y-2 w-2/3">
                    <span class="uppercase text-sm text-app-blue-400">{{ article.source.name }}</span>
                    <h1
                      class="text-xl text-app-orange-400 hover:text-app-orange-900 cursor-pointer transition-colors"
                      @click="openArticleModal(article)"
                    > {{ article.title }}
                    </h1>
                    <p class="text-sm">{{ article.description }}</p>

                    <div class="flex items-center">
                      <UButton
                        :icon="getIcon(article.url)"
                        :color="isFavorite(article.url) ? 'red' : 'primary'"
                        variant="outline"
                        class="px-2"
                        @click="toggleFavorite(article)"
                      >
                        {{ isFavorite(article.url) ? 'Remover dos Favoritos' : 'Salvar como Favorito' }}
                      </UButton>
                    </div>
                  </div>

                  <NuxtImg
                    v-if="article.urlToImage"
                    :src="article.urlToImage"
                    class="w-80 h-64 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="w-1/3 bg-white rounded-md p-8 shadow">
            <h3 class="text-xl text-app-blue-400 border-b border-b-app-blue-400/20 pb-1 mb-4">Meus Favoritos</h3>
            <ul class="flex flex-col gap-y-2">
              <li
                v-for="favorite in favoritesStore.favorites"
                :key="favorite.url"
                @click="openFavoriteArticle(favorite.url)"
                class="cursor-pointer"
              >
                <span class="text-app-orange-400 hover:underline">{{ favorite.title }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <UModals />
    <UNotifications />
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/favorites';
const runtimeConfig = useRuntimeConfig()

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

// composable autoBlur input
const { startTracking, resetTimer, clearTimer } = useAutoBlur()

// Variável reativa para o valor do input
const searchKeyword = ref('')

// Variável reativa para armazenar a lista de notícias processada
const newsList = ref([])

watchEffect(() => {
  if (news.value) {
    const newData = news.value
    newsList.value = newData.articles.map((article) => article)
  }
})

const filteredNews = computed(() => {
  if (!searchKeyword.value) {
    return newsList.value || []
  }

  // Filtra as notícias baseada no título da notícia
  return newsList.value.filter(article =>
    article.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})

const favoritesStore = useFavoritesStore()
const { openArticleModal } = useArticleModal()
const toast = useToast()

const toggleFavorite = (article) => {
  if (favoritesStore.isFavorite(article.url)) {
    favoritesStore.removeFavorite(article.url)
    toast.add({
      title: `${article.title} removido dos favoritos.`,
      timeout: 2000,
    })
  } else {
    favoritesStore.addFavorite(article)
    toast.add({
      title: `${article.title} adicionado aos favoritos.`,
      timeout: 2000,
    })
  }
}

const isFavorite = (articleUrl) => {
  return favoritesStore.isFavorite(articleUrl)
}

const openFavoriteArticle = (articleUrl) => {
  const article = favoritesStore.getFavorite(articleUrl)
  if (article) {
    openArticleModal(article)
  }
}

const getIcon = (articleUrl) => {
  return isFavorite(articleUrl) ? 'material-symbols:favorite' : 'material-symbols:favorite-outline'
}

// const { data: news, pending: isLoading, error } = await useFetch('/api/news')
</script>
