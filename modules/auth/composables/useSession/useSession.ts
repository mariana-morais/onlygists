export function useSession() {
    const user = useSupabaseUser()
    const services = useServices()

    const isLogged = () => {
      const hasUserLoggedIn = Boolean(user.value)
      return hasUserLoggedIn
    }

    const logout = async () => {
      const response = await services.auth.signOut()
      return response
    }

    return {
      user,
      logout,
      isLogged,
    }
}