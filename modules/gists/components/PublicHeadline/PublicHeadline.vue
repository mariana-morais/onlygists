<template>
  <div class="w-full flex flex-col justify-center gap-2 my-5">
    <div class="flex flex-wrap items-center gap-2">
      <h1 class="font-[Inter] text-gray-700 font-bold text-2xl md:text-3xl">{{props.title}}</h1>
      <Chip class="text-sm" :label="props.lang" icon="pi pi-bolt" />
    </div>
    <div div v-html="description" class="font-[Inter] text-gray-700 font-regular text-base md:text-lg"></div>
    <p class="font-[Inter] font-regular text-gray-500 text-sm md:text-base">
      <i class="pi pi-star"></i>
      by
      <NuxtLink class="text-primary-500" :to="`/${props.author}`">@{{ props.author }}</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
  const { render } = useMarkdown();

  const props = withDefaults(defineProps<{
    title: string;
    lang: string;
    description: string;
    author: string;
  }>(), {
    title: 'currency_format.py',
    lang: 'python',
    description: 'Função em python para formatação de moeda',
    author: 'mariana',
  });

  const description = computed(() => {
    return render(props.description);
  });
</script>

<style>

</style>