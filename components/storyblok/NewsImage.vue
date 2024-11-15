<template>
    <div v-editable="blok"><img :src="blok.image.filename" /></div>
</template>
<script setup>
    defineProps({ blok: Object });
</script>
