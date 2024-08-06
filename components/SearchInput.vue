<template>
  <UInput
    class="max-lg:w-full"
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
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const searchKeyword = ref('')

const { startTracking, resetTimer, clearTimer } = useAutoBlur()

watch(searchKeyword, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>