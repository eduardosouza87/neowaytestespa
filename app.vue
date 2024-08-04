<template>
  <div>
    <UButton
      label="Reveal modal"
      @click="openModal"
    />


    <div class="min-h-screen w-full py-10">
      <div class="container max-w-5xl mx-auto">
        <div class="flex flex-col gap-y-8">

          <div v-if="error">{{ error.message }}</div>
          <div v-else-if="isLoading">Carregando...</div>
          <div
            v-else
            class="flex flex-col gap-y-4"
          >

            <div class="flex flex-col lg:flex-row lg:justify-between items-center">
              <h1 class="text-4xl text-app-blue-400">Últimas Notícias</h1>
              <UInput
                class="max-lg:order-2"
                icon="i-heroicons-magnifying-glass-20-solid"
                size="lg"
                color="white"
                :trailing="false"
                placeholder="Buscar notícias..."
                v-model="searchKeyword"
                @focus="startTracking"
                @input="resetTimer"
                @blur="clearTimer"
              />
            </div>

            <div class="flex flex-col">
              <div
                v-for="article in filteredNews"
                :key="article.url"
                class="flex flex-row justify-between items-center lg:gap-x-10 border-t border-t-app-blue-100 first:border-t-0 pt-6 mt-6"
              >
                <div class="flex flex-col gap-y-2 w-2/3">
                  <span class="uppercase text-sm text-app-blue-400">{{ article.source.name }}</span>
                  <h2 class="text-xl text-app-orange-400">{{ article.title }}</h2>
                  <p class="text-sm">{{ article.description }}</p>
                </div>

                <NuxtImg
                  v-if="article.urlToImage"
                  :src="`${article.urlToImage}`"
                  class="w-80 h-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <UModals />
  </div>
</template>

<script setup>
import Modal from './components/Modal.vue';

const runtimeConfig = useRuntimeConfig()

const { data: news, pending: isLoading, error } = await useFetch(
  `?q=technology`,
  {
    server: false,
    baseURL: runtimeConfig.public.apiBaseUrl,
    headers: {
      authorization: `Bearer ${runtimeConfig.public.apiKey}`
    }
  }
)

// composable autoBlur input
const { startTracking, resetTimer, clearTimer } = useAutoBlur()

// Variável reativa para o valor do input
const searchKeyword = ref('')

// Variável reativa para armazenar a lista de notícias processada
const newsList = ref([])

watchEffect(() => {
  if (news.value) {
    const newData = news.value
    newsList.value = newData.articles.map((article) => article)
  }
})

const filteredNews = computed(() => {
  if (!searchKeyword.value) {
    return newsList.value || []
  }

  // Filtra as notícias baseada no título da notícia
  return newsList.value.filter(article =>
    article.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})


const toast = useToast()
const modal = useModal()
const count = ref(0)

function openModal() {
  count.value += 1
  modal.open(Modal, {
    count: count.value,
    onSuccess() {
      toast.add({
        title: 'Success !',
        id: 'modal-success'
      })
    }
  })
}
// const { data: news, pending: isLoading, error } = await useFetch('/api/news')
</script>
