<template>
  <div
    class="flex flex-col gap-y-4"
    v-for="index in count"
    :key="index"
  >
    <div class="flex flex-row justify-between items-center lg:gap-x-10">
      <div class="flex flex-col gap-y-2 w-2/3">
        <USkeleton class="h-4 w-40" />
        <USkeleton class="h-8 w-2/3" />
        <USkeleton class="h-8 w-full" />
        <USkeleton class="h-8 w-64" />
      </div>
      <USkeleton class="h-64 w-80 rounded-md" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  count: {
    type: Number,
    default: 5
  }
})
</script>