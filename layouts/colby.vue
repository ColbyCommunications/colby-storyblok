<template>
    <div id="content">
        <Header :items="props.config.content.utility_navigation" :config="props.config" />
        <slot></slot>
    </div>
</template>

<script setup>
    import Header from '../components/global/colby/Header.vue';
    const props = defineProps(['config']);
</script>
<style lang="scss">
    @use '~/assets/scss/colby/styles.scss';
</style>
