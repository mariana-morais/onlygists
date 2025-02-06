<template>
    <HeadlineEditLoader :loading="loading">
        <HeadlineEdit
            :username="user?.username"
            :avatar-url="user?.avatarUrl"
            @navigate-to-profile="handleNavigateToProfile"
            @share="handleShare"
            class="my-10"
        />
    </HeadlineEditLoader>

    <WidgetDefault title="Informações básicas">
        <BasicInfoForm v-model="user" />
    </WidgetDefault>

    <WidgetDefault title="Endereço" class="mt-5">
        <AddressForm v-model="address" @trigger-address-search="handleZipCodeSearch" :loading="addressLoading" />
    </WidgetDefault>
</template>

<script lang="ts" setup>
import HeadlineEdit from '@/modules/users/components/HeadlineEdit/HeadlineEdit.vue'
import HeadlineEditLoader from '@/modules/users/components/HeadlineEdit/Loader.vue'
import BasicInfoForm from '@/modules/users/components/BasicInfoForm/BasicInfoForm.vue'
import AddressForm from '@/modules/users/components/AddressForm/AddressForm.vue'
import { useUserProfileActions } from '@/modules/users/composables/useUserProfileActions/useUserProfileActions'
import { useAddressUpdate } from '@/modules/users/composables/useAddressUpdate/useAddressUpdate'
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself';
import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types';

const { user, loading } = inject(myselfKey) as MyselfContextProvider;
const router = useRouter();
const { share } = useUserProfileActions();

const { loading: addressLoading, searchZipCode, address } = useAddressUpdate({ user });

const handleZipCodeSearch = () => {
    searchZipCode();
}

const handleShare = (username: string) => {
    share(username);
}

const handleNavigateToProfile = (username: string) => {
    router.push(`/${username}`);
}
</script>