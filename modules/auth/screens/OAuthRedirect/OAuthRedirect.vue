<template>
    <MainContent>
        <template #content>
            <p class="font-[Inter] text-gray-800 text-regular">
                🤩 Redirecionando ...
            </p>
        </template>
    </MainContent>
</template>

<script setup lang="ts">
    const router = useRouter()

    const navigateToPanel = async () => {
        await new Promise(resolve => setTimeout(resolve, 2_000));
        router.push('/app/panel')
    }

    onMounted(() => {
        navigateToPanel()
    })
</script>