<template>
    <HeadlineEditLoader :loading="loading">
        <HeadlineEdit
            :username="user.username"
            :avatar-url="user.avatarUrl"
            @navigate-to-profile="handleShare"
            @share="handleNavigateToProfile"
            class="my-10"
        />
    </HeadlineEditLoader>
</template>

<script lang="ts" setup>
import HeadlineEdit from '@/modules/users/components/HeadlineEdit/HeadlineEdit.vue'
import HeadlineEditLoader from '@/modules/users/components/HeadlineEdit/Loader.vue'
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself';
import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types';

const { user, loading } = inject(myselfKey) as MyselfContextProvider

const handleNavigateToProfile = (username: string) => {
    router.push(`/${username}`)
}

const handleShare = (username: string) => {
    console.log('share', username)
}
</script>