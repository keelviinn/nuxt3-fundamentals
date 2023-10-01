export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser()

  console.log('userIsLoggedIn', user)

  if (!user.isLoggedIn) {
    return navigateTo({
      path: '/login',
    })
  }

})
