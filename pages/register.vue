<script setup lang="ts">

import { FwbInput, FwbButton } from 'flowbite-vue'
import { useAuthStore } from '~/composables/stores/auth.store';
import type { RegisterRequest } from '~/services/auth/register.schema';
import { AuthRegisterService } from '~/services/auth/regsiter.service';

useHead({
    title: "Create Account"
})

// services
const registerService = new AuthRegisterService()

// stores
const authStore = useAuthStore()

// reactives
const form = reactive<RegisterRequest>({
    name: '',
    email: '',
    password: ''
})

// refs
const isSubmitting = ref<boolean>(false)

// handler: form submit
const submit = async () => {

    // start
    isSubmitting.value = true

    // register user
    const { data, error } = await registerService.handlRegisterRequest(form)

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
                <h1 class="text-3xl font-semibold text-slate-900 font-primary mb-3">Create Account</h1>
                <p class="text-slate-600">
                    Hello there! Sign up to get started and enjoy the benefits of our platform.
                </p>
            </section>

            <!-- form -->
            <form @submit.prevent="submit">
                <!-- name -->
                <div class="mb-5">
                    <FormsLabel text="Your name" />
                    <FwbInput v-model="form.name" placeholder="ex: John Doe" type="text" size="lg">
                        <template #prefix>
                            <i class="fa-solid fa-user text-slate-500"></i>
                        </template>
                    </FwbInput>
                </div>

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
                    <FwbInput v-model="form.password" placeholder="choose stronger password" type="password" size="lg">
                        <template #prefix>
                            <i class="fa-solid fa-lock text-slate-500"></i>
                        </template>
                    </FwbInput>
                </div>

                <!-- action -->
                <section>
                    <FwbButton :loading="isSubmitting" :disabled="isSubmitting" type="submit" size="xl" color="green"
                        class="w-full">
                        Create Account
                    </FwbButton>
                </section>
            </form>
        </main>
    </NuxtLayout>
</template>
