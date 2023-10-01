export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false // TODO: check if user is logged in

  if (!userIsLoggedIn) {
    return navigateTo({
      path: '/login',
    })
  }

})
