<template>
    <div v-html="dynmaicHeading"></div>
</template>

<script setup>
    const props = defineProps({ blok: Object });
    const classes = 'mb-4 text-indigo';
    let dynmaicHeading = '';

    if (props.blok.heading_type === 'h2') {
        dynmaicHeading = `<h2 class="${classes} text-24 leading-110 -tracking-3">${props.blok.text}</h2>`;
    }
    console.log(dynmaicHeading);
</script>
