<template>
  <div class="favorites">
    <h3 class="favorites__title">Meus Favoritos</h3>

    <div v-if="!favoritesStore.favorites.length">
      <div class="flex flex-col gap-y-2">
        <USkeleton class="h-8 w-full" />
        <USkeleton class="h-8 w-full" />
        <USkeleton class="h-8 w-full" />
      </div>
    </div>

    <ul
      v-else
      class="favorites-list"
    >
      <li
        v-for="favorite in favoritesStore.favorites"
        :key="favorite.url"
        @click="openFavoriteArticle(favorite)"
        class="favorites-list__item"
      >
        <NuxtImg
          v-if="favorite.urlToImage"
          :src="favorite.urlToImage"
          class="favorites-list__item-thumb"
        />
        <span class="favorites-list__item-title">{{ favorite.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const favoritesStore = useFavoritesStore()
const { openArticleModal } = useArticleModal()

const fetchFavorites = async () => {
  const data = await $fetch('/api/favorites')
  favoritesStore.favorites = data || []
}

onMounted(fetchFavorites)

const openFavoriteArticle = (article) => {
  openArticleModal(article)
}
</script>

<style lang="postcss" scoped>
.favorites__title {
  @apply text-xl text-app-blue-400 border-b border-b-app-blue-400/20 pb-1 mb-4;
}

.favorites-list {
  @apply flex flex-col gap-y-2;
}

.favorites-list__item {
  @apply cursor-pointer flex flex-row items-center gap-x-4 border-t border-t-app-blue-100/10 first:border-t-0 py-2 first:pt-0;
}

.favorites-list__item-title {
  @apply text-sm text-app-orange-400 hover:underline;
}

.favorites-list__item-thumb {
  @apply h-12 w-12 object-cover rounded-md;
}
</style>