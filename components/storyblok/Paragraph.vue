<template>
    <div v-editable="blok" v-html="resolvedRichText"></div>
</template>
<script setup>
    const props = defineProps({ blok: Object });
    const resolvedRichText = computed(() => renderRichText(props.blok.content));
</script>
