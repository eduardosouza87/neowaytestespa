import Modal from '@/components/Modal.vue'

export function useArticleModal() {
  const modal = useModal()
  const selectedArticle = ref({})

  function openArticleModal(article) {
    selectedArticle.value = article
    modal.open(Modal, {
      article: selectedArticle.value
    })
  }

  function closeModal() {
    modal.close()
  }

  return {
    openArticleModal,
    closeModal
  }
}
