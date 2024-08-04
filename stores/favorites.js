import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorite(article) {
      if (!this.favorites.find(fav => fav.url === article.url)) {
        this.favorites.push(article)
      }
    },
    removeFavorite(articleUrl) {
      this.favorites = this.favorites.filter(fav => fav.url !== articleUrl)
    },
    clearFavorites() {
      this.favorites = []
    },
    getFavorite(articleUrl) {
      return this.favorites.find(fav => fav.url === articleUrl) || null
    }
  },
  getters: {
    isFavorite: (state) => (articleUrl) => {
      return state.favorites.some(fav => fav.url === articleUrl)
    }
  }
})