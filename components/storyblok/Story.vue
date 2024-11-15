<template>
    <div v-editable="blok">
        <StoryblokComponent v-for="blok in blok.content" :key="blok._uid" :blok="blok" />
    </div>
</template>

<script setup>
    defineProps({ blok: Object });
</script>
