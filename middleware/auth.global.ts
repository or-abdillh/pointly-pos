import { useAuthStore } from "~/composables/stores/auth.store"

export default defineNuxtRouteMiddleware((to, from) => {

    // stores
    const authStote = useAuthStore()

    // blacklist for login and register pages
    const blacklist = ["/login", "/register"]

    // check if user is authenticated
    if (!authStote.isAuthenticated && !blacklist.includes(to.path)) {
        return navigateTo("/login")
    }
})
