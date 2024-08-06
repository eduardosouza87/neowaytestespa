import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  const addFavorite = (article) => {
    if (!favorites.value.some(fav => fav.url === article.url)) {
      favorites.value.push(article)
    }
  }

  const removeFavorite = (articleUrl) => {
    favorites.value = favorites.value.filter(fav => fav.url !== articleUrl)
  }

  const isFavorite = (articleUrl) => {
    return favorites.value.some(fav => fav.url === articleUrl)
  }

  return { favorites, addFavorite, removeFavorite, isFavorite }
})