<template>
  <UModal>
    <UCard>
      <UButton
        color="primary"
        variant="ghost"
        icon="i-heroicons-x-mark-20-solid"
        class="-my-1 absolute right-4 top-4 rounded-full"
        @click="closeModal"
      />

      <div class="flex flex-col gap-y-4">
        <div class="modal-heading flex flex-col gap-y-2 lg:gap-y-4 pr-4">
          <h1 class="text-app-orange-400 font-bold text-xl lg:text-2xl">{{ article.title }}</h1>
          <span class="text-base lg:text-lg italic text-app-blue-400">{{ article.description }}</span>
          <span class="text-sm italic">Por: {{ article.author }}</span>
        </div>


        <NuxtImg
          v-if="article.urlToImage"
          :src="article.urlToImage"
          class="w-full h-64 object-cover rounded"
        />

        <div>
          {{ article.content }}
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

const { closeModal } = useArticleModal()
</script>