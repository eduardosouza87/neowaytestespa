<template>
  <div class="news-list">
    <div
      v-for="article in news"
      :key="article.url"
      class="news-list__item"
    >
      <div class="news-list__content">
        <span class="news-list__source">{{ article.source.name }}</span>
        <h1
          class="news-list__title"
          @click="openArticleModal(article)"
        > {{ article.title }}
        </h1>
        <p class="news-list__description">{{ article.description }}</p>

        <div>
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
        class="news-list__thumb"
      />
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/favorites';

const props = defineProps({
  news: {
    type: Array,
    required: true
  }
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

const getIcon = (articleUrl) => {
  return isFavorite(articleUrl) ? 'material-symbols:favorite' : 'material-symbols:favorite-outline'
}
</script>

<style lang="postcss" scoped>
.news-list {
  @apply flex flex-col;
}

.news-list__item {
  @apply flex flex-col lg:flex-row lg:justify-between lg:items-center max-lg:gap-y-4 lg:gap-x-10 border-t border-t-app-blue-100/10 first:border-t-0 py-4 lg:py-8 first:pt-0;
}

.news-list__content {
  @apply flex flex-col gap-y-2 lg:w-2/3 max-lg:order-2;
}

.news-list__source {
  @apply uppercase text-xs lg:text-sm text-app-blue-400;
}

.news-list__title {
  @apply text-lg lg:text-xl text-app-orange-400 hover:text-app-orange-900 cursor-pointer transition-colors;
}

.news-list__description {
  @apply text-sm;
}

.news-list__thumb {
  @apply w-full h-32 max-lg:order-1 lg:w-80 lg:h-64 object-cover rounded-md;
}
</style>