<template>
    {{ dynamicHeading }}
</template>

<script setup>
    defineProps({ blok: Object });
    const classes = "mb-4 text-indigo";
    let dynmaicHeading = '';
    if(blok.heading_type === 'h2') {
        dynmaicHeading = `<h2 class="${classes}">${text}</h2>`;
    }
</script>
