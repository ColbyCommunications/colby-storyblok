<template>
    <div v-html="blok.embedcode"></div>
</template>

<script setup>
    defineProps({ blok: Object });
</script>
