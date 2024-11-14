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

    // useHead({
    //     script: [
    //         // {
    //         //     src: 'https://cdn.jsdelivr.net/npm/search-insights@2.0.2/dist/search-insights.iife.min.js',
    //         //     body: false,
    //         // },
    //         // {
    //         //     src: 'https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch.umd.js',
    //         //     body: false,
    //         // },
    //         // {
    //         //     src: 'https://cdnjs.cloudflare.com/ajax/libs/instantsearch.js/4.23.0/instantsearch.production.min.js',
    //         //     body: false,
    //         // },
    //         // {
    //         //     src: '/js/algolia.js',
    //         //     body: false,
    //         // },
    //     ],
    // });
</script>
<style lang="scss">
    @use '~/assets/scss/news/tailwind.scss';
</style>
