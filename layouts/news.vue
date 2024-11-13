<template>
    <Header />
    <div id="content">
        <slot></slot>
    </div>
    <SearchModal />
    <MenuModal />
</template>

<script setup>
    import Header from '../components/global/news/Header.vue';
    import SearchModal from '../components/global/news/SearchModal.vue';
    import MenuModal from '../components/global/News/MenuModal.vue';
</script>
