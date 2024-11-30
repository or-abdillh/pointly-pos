<script setup lang="ts">

// instances
const runtimeConfig = useRuntimeConfig()

useHead({
    titleTemplate(title) {
        return title ? `${title} — ${runtimeConfig.public.appName}` : runtimeConfig.public.appName
    },
})

</script>

<template>
    <main class="min-h-screen box-border grid place-items-center bg-slate-50">
        <slot />
    </main>
</template>