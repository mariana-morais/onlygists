<template>
  <OAuthRedirect />
</template>

<script lang="ts" setup>
  import OAuthRedirect from '@/modules/auth/screens/OAuthRedirect/OAuthRedirect.vue'

  definePageMeta({
    layout: 'default'
  })
</script>