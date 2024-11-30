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
    <div>
        Layout: Authenticated
        <slot />
    </div>
</template>

<style scoped></style>
