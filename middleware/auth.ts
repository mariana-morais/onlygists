import { useSession } from '~/modules/auth/composables/useSession/useSession'

export default defineNuxtRouteMiddleware(async (to, _) => {
  const session = useSession()
  const isLogged = session.isLogged()

  if (!isLogged) {
    console.log('* user not authenticated')

    if (to.path === '/auth/login') return

    return navigateTo({
      path: '/auth/login',
    })
  }
})