<template>
    <div id="content">
        <Header :items="props.config.content.utility_navigation" :config="props.config" />
        <slot></slot>
    </div>
</template>

<script setup>
    import Header from '../components/global/Header.vue';
    const props = defineProps(['config']);
    console.log(props.config);
</script>
