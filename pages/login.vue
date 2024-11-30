<script setup lang="ts">

import { useAuthStore } from '~/composables/stores/auth.store';
import type { LoginRequest } from '~/services/auth/login.schema';
import { AuthLoginService } from '~/services/auth/login.service';
import { FwbButton, FwbInput } from 'flowbite-vue'

useHead({
    title: "Sign In"
})

// services
const loginService = new AuthLoginService()

// stores
const authStore = useAuthStore()

// reactives
const form = reactive<LoginRequest>({
    email: '',
    password: ''
})

// refs
const isSubmitting = ref<boolean>(false)

// handler: form submit
const submit = async () => {

    // start
    isSubmitting.value = true

    // login user
    const { data, error } = await loginService.handleLoginRequest(form)

    // success
    if (data.value) {

        // parse data
        const { user, token } = data.value.data

        // set user data
        authStore.setAuthenticatedUser(user, token)

        // redirect into index
        return navigateTo("/")
    }

    // done
    isSubmitting.value = false
}

</script>

<template>
    <NuxtLayout name="base">
        <main
            class="w-full min-h-screen lg:min-h-fit lg:w-5/12 xl:w-4/12 mx-auto p-4 py-6 lg:px-10 lg:py-12 rounded-2xl bg-white border border-slate-100">
            <!-- copywriting -->
            <section class="text-center border-b border-slate-100 pb-4 mb-12">
                <h1 class="text-3xl font-semibold text-slate-900 font-primary mb-3">Sign In</h1>
                <p class="text-slate-600">
                    Welcome back! Sign in to your account to continue and explore our platform.
                </p>
            </section>

            <!-- form -->
            <form @submit.prevent="submit">
                <!-- email -->
                <div class="mb-5">
                    <FormsLabel text="Email address" />
                    <FwbInput v-model="form.email" placeholder="ex: johndoe@gmail.com" type="email" size="lg">
                        <template #prefix>
                            <i class="fa-solid fa-envelope text-slate-500"></i>
                        </template>
                    </FwbInput>
                </div>

                <!-- password -->
                <div class="mb-8">
                    <FormsLabel text="Password" />
                    <FwbInput v-model="form.password" placeholder="Type your password" type="password" size="lg">
                        <template #prefix>
                            <i class="fa-solid fa-lock text-slate-500"></i>
                        </template>
                    </FwbInput>
                </div>

                <!-- action -->
                <section>
                    <FwbButton :loading="isSubmitting" :disabled="isSubmitting" type="submit" size="xl" color="green"
                        class="w-full">
                        Sign In
                    </FwbButton>
                </section>
            </form>
        </main>
    </NuxtLayout>
</template>
