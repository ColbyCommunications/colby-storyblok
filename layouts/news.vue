<template>
    <Header />
    <main id="primary" class="relative z-0 w-full overflow-hidden site-main print:static">
        <article id="post-16" class="post-16 page type-page status-publish hentry mb-6">
            <slot></slot>
        </article>
    </main>
    <SearchModal />
    <MenuModal />
</template>

<script setup>
    import Header from '../components/global/news/Header.vue';
    import SearchModal from '../components/global/news/SearchModal.vue';
    import MenuModal from '../components/global/news/MenuModal.vue';
</script>
<style lang="scss">
    // @use '~/assets/scss/news/tailwind.scss';
</style>
