import type { Database } from "@/libs/supabase/schema"
import AuthService from "@/modules/auth/services/services"
import UserService from '@/modules/users/services/services'

export function useServices() {
    const supabaseClient = useSupabaseClient<Database>()
    const config = useRuntimeConfig()
    const redirectToUrl = `${config.public.siteUrl}/auth/github`

    return {
        auth: AuthService(supabaseClient, { redirectToUrl }),
        users: UserService(supabaseClient)
    }
}