<template>
    {{ user?.name ??'Carregando...' }}
</template>

<script setup lang="ts">
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself';
import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types';

const { user } = inject(myselfKey) as MyselfContextProvider
</script>