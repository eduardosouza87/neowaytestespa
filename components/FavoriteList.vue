<template>
  <h3 class="text-xl text-app-blue-400 border-b border-b-app-blue-400/20 pb-1 mb-4">Meus Favoritos</h3>
  <ul class="flex flex-col gap-y-2">
    <li
      v-for="favorite in favorites"
      :key="favorite.url"
      @click="openFavoriteArticle(favorite)"
      class="cursor-pointer"
    >
      <span class="text-app-orange-400 hover:underline">{{ favorite.title }}</span>
    </li>
  </ul>
</template>

<script setup>

const props = defineProps({
  favorites: {
    type: Array,
    required: true
  }
})

const { openArticleModal } = useArticleModal()

const openFavoriteArticle = (article) => {
  openArticleModal(article)
}
</script>