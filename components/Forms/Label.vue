<script setup lang="ts">

interface Props {
    for?: string,
    text: string,
}

// props
const props = defineProps<Props>()

</script>

<template>
    <label :for="props.for" class="block mb-2 text-sm font-medium text-slate-800 dark:text-white">
        {{ props.text }}
    </label>
</template>
