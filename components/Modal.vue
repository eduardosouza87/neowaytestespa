<template>
  <UModal>
    <UCard>
      <UButton
        color="primary"
        variant="ghost"
        icon="i-heroicons-x-mark-20-solid"
        class="modal-news__close"
        @click="closeModal"
      />

      <div class="modal-news__container">
        <div class="modal-news__content">
          <h1 class="modal-news__title">{{ article.title }}</h1>
          <span class="modal-news__description">{{ article.description
            }}</span>
          <span class="modal-news__author">Por: {{ article.author }}</span>
        </div>


        <NuxtImg
          v-if="article.urlToImage"
          :src="article.urlToImage"
          class="modal-news__thumb"
        />

        <div>
          {{ article.content }}
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

const { closeModal } = useArticleModal()
</script>

<style lang="postcss">
.modal-news__close {
  @apply -my-1 absolute right-4 top-4 rounded-full;
}

.modal-news__container {
  @apply flex flex-col gap-y-4;
}

.modal-news__content {
  @apply flex flex-col gap-y-2 lg:gap-y-4 pr-4
}

.modal-news__title {
  @apply text-app-orange-400 font-bold text-xl lg:text-2xl;
}

.modal-news__description {
  @apply text-base lg:text-lg italic text-app-blue-400;
}

.modal-news__author {
  @apply text-sm italic;
}

.modal-news__thumb {
  @apply w-full h-64 object-cover rounded;
}
</style>