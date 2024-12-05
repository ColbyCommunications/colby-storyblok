<template>
    <img :class="classes" :src="src" :alt="alt" />
</template>

<script setup>
    defineProps(['classes', 'src', 'alt']);
</script>
