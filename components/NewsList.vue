<template>
  <div class="flex flex-col">
    <div
      v-for="article in news"
      :key="article.url"
      class="flex flex-row justify-between items-center lg:gap-x-10 border-t border-t-app-blue-100/10 first:border-t-0 py-8 first:pt-0"
    >
      <div class="flex flex-col gap-y-2 lg:w-2/3">
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
        class="w-80 h-64 object-cover rounded-md max-lg:hidden"
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