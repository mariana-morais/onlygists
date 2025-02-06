import { useClipboard, useShare } from "@vueuse/core"

export function useUserProfileActions() {

    const toast = useToast();
    const { share: nativeShare, isSupported } = useShare();
    const { copy } = useClipboard();

    const share = async (username: string) => {
        const url = `${window.location.origin}/${username}`

        if(!isSupported.value) {
            await copy(url);

            toast.add({
                severity: 'info',
                summary: 'Sucesso!',
                detail: 'Link de perfil copiado para a área de transferência',
                life: 2000
            });

            return;
        }

        nativeShare({
            title: 'Perfil do Onlygist',
            text: `Veja esse perfil do @${username} no Onlygist`,
            url
        })
    }

    return {
        share
    }
}
