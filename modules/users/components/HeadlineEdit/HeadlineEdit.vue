<template>
  <div class="w-full flex flex-col items-center justify-center gap-2">
    <div class="w-24 md:w-32 rounded-full overflow-hidden">
      <img :src="props.avatarUrl" alt="Profile Picture">
    </div>

    <h1 class="font[Inter] text-2xl md:text-3xl font-bold text-gray-700">
      @{{ props.username }}
    </h1>
    
    <div class="flex gap-2 mt-2">
      <Button
        @click="() => emit('navigate-to-profile', props.username)"
        label="Ver perfil"
        size="small"
        icon="pi pi-star"
        icon-pos="right"
      />
      <Button
        @click="() => emit('share', props.username)"
        label="Compartilhar"
        size="small"
        icon="pi pi-share-alt"
        icon-pos="right"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'share', username: string): void
  (e: 'navigate-to-profile', username: string): void
}>()

const props = defineProps<{
  username: string,
  avatarUrl: string,
}>()
</script>