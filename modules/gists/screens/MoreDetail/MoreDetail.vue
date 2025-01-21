<template>
    <PublicHeadline />
    <GistCodeSnippet />
    <DialogPaymentSuccess v-model:visible="isPaymentSuccessfully" />
</template>

<script setup lang="ts">
import PublicHeadline from '@/modules/gists/components/PublicHeadline/PublicHeadline.vue';
import GistCodeSnippet from '@/modules/gists/components/CodeSnippet/CodeSnippet.vue';
import DialogPaymentSuccess from '@/modules/payments/components/DialogPaymentSuccess/DialogPaymentSuccess.vue';

const route = useRoute();
const isPaymentSuccessfully = ref<boolean>(false);

onMounted(() => {
  const { success_payment } = route.query;

  if(success_payment) {
    isPaymentSuccessfully.value = true;
  }
});
</script>