<template>
  <main class="__app">
    <div class="app__wrapper">
      <div class="app__container">
        <div class="home-wrapper">
          <section class="home-news">
            <div class="home-news__header">
              <h1 class="home-news__title">Últimas Notícias</h1>
              <SearchInput v-model="searchKeyword" />
            </div>

            <div v-if="searchKeyword">
              <span>{{ filteredNewsCount }} notícias encontradas para a sua busca <b>{{ searchKeyword }}</b></span>
            </div>

            <NewsList :searchKeyword="searchKeyword" />
          </section>

          <aside
            class="favorites-news"
            :class="isOpenSidebar ? 'max-lg:translate-x-0 max-lg:h-screen' : 'max-lg:translate-x-full'"
          >
            <FavoriteList :favorites="favoritesStore.favorites" />
          </aside>
        </div>
      </div>
    </div>

    <div class="favorites-button">
      <div
        class="favorites-button__icon-container"
        @click="handleSidebar()"
      >
        <UIcon
          :name="isOpenSidebar ? 'material-symbols:close-rounded' : 'material-symbols:star'"
          class="favorites-button__icon"
        />
      </div>
    </div>

    <UModals />
    <UNotifications />
  </main>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/favorites';

useSeoMeta({
  title: 'Case técnico - Pessoa Desenvolvedor Frontend',
  description: 'Projeto desenvolvido para o teste de Eduardo de Souza',
})

const news = ref(null)
const isLoading = ref(true)
const error = ref(null)

const favoritesStore = useFavoritesStore()

const fetchNews = async () => {
  const result = await useGetNews()
  if (result.error) {
    error.value = result.error
  } else {
    news.value = result.articles
  }
  isLoading.value = false
}

onMounted(async () => {
  await fetchNews()
})

// onMounted(async () => {
//   try {
//     isLoading.value = true
//     const data = await $fetch('/api/news')
//     news.value = data
//   } catch (err) {
//     error.value = err
//   } finally {
//     isLoading.value = false
//   }
// })

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

// Computed para contar o número de itens filtrados
const filteredNewsCount = computed(() => filteredNews.value.length)

const isOpenSidebar = ref(false)
const handleSidebar = () => {
  isOpenSidebar.value = !isOpenSidebar.value
}
</script>

<style lang="postcss" scoped>
.__app {
  @apply relative max-lg:overflow-x-hidden;
}

.app__wrapper {
  @apply min-h-screen w-full py-6 lg:py-10 px-4;
}

.app__container {
  @apply container mx-auto;
}

.home-wrapper {
  @apply lg:flex lg:items-start lg:gap-x-10 w-full;
}

.home-news {
  @apply flex flex-col gap-y-8 lg:w-2/3 bg-white rounded-md shadow p-6 lg:p-8
}

.home-news__header {
  @apply flex flex-col max-lg:gap-y-4 lg:flex-row lg:justify-between items-center pb-4 border-b border-b-app-blue-400/20;
}

.home-news__title {
  @apply text-2xl lg:text-4xl text-app-blue-400;
}

.favorites-news {
  @apply bg-white lg:w-1/3 rounded-md p-4 lg:p-8 shadow fixed lg:sticky max-lg:right-0 top-0 lg:top-6 max-lg:z-10 transition-transform;
}

.favorites-button {
  @apply fixed right-6 bottom-8 z-50 lg:hidden;
}

.favorites-button__icon-container {
  @apply shadow p-3 flex flex-col items-center bg-app-blue-100 rounded-full cursor-pointer;
}

.favorites-button__icon {
  @apply w-6 h-6 text-app-blue-400;
}
</style>