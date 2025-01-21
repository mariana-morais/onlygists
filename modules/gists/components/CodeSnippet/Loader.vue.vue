<template>
  <div class="flex flex-col gap-2 py-8 w-full" v-if="props.loading">
    <Skeleton width="100%" height="20rem" />
  </div>

  <slot v-else />
</template>

<script lang="ts" setup>
   const props = withDefaults(defineProps<{
     loading: boolean;
  }>(), {
    loading: false,
  });
</script>

<style>

</style>