<template>
    <div v-editable="blok">
        <form>
            <StoryblokComponent v-for="blok in blok.fields" :key="blok._uid" :blok="blok" />
        </form>
    </div>
</template>

<script setup>
    defineProps({ blok: Object });
</script>
