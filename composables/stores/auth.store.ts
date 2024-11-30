import { defineStore } from "pinia";
import type { User } from "~/schemas/user.schema";

export const useAuthStore = defineStore("auth-store", () => {

    // states
    const user = ref<User>()
    const token = ref<string>()

    // getters
    const isAuthenticated = computed(() => !!user.value && !!token.value)

    // setters
    const setAuthenticatedUser = (authenticated: User, authenticatedToken: string) => [user.value, token.value] = [authenticated, authenticatedToken]

    return {
        user,
        token,
        isAuthenticated,
        setAuthenticatedUser
    }
}, {
    persist: {
        storage: sessionStorage
    }
})