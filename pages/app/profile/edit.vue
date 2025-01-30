<template>
  <EditProfile />
</template>

<script lang="ts" setup>
import EditProfile from '@/modules/users/screens/EditProfile/EditProfile.vue'

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})
</script>

<style>

</style>