<template>
    <div id="content">
        <Header :items="props.config.content.utility_navigation" :config="props.config" />
        <Breadcrumbs />
        <main id="main">
            <slot></slot>
            <Hero
                :blok="{
                    heading: heroHeading,
                    subheading: heroSubheading,
                    paragraph: heroParagraph,
                    align_center: false,
                }"
            />
            <section
                class="sidebar-page"
                v-if="props.config.contentLayout === 'page-with-side-bar'"
            >
                <div
                    class="sidebar-page__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto md:mt-20 mt-16"
                >
                    <div
                        class="sidebar-page__secondary md:col-span-3 xl:col-span-2 mb-16 md:mb-0 [&>div+div]:mt-7"
                    ></div>
                    <div class="sidebar-page__main xl:col-start-4 md:col-span-9">
                        <slot></slot>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
    import Header from '../components/global/colby/Header.vue';
    import Breadcrumbs from '../components/global/colby/Breadcrumbs.vue';
    import Hero from '../components/storyblok/Hero.vue';
    const props = defineProps(['config', 'story']);

    let heroHeading = '';
    let heroSubheading = '';
    let heroParagraph = '';

    if (props.story.tag_list.includes('Department')) {
        heroHeading = props.story.content.hero_heading;
        heroSubheading = props.story.content.hero_subheading;
        heroParagraph = props.story.content.hero_paragraph;
    } else {
        heroSubheading = props.story.name;
    }
</script>
<style lang="scss">
    @use '~/assets/scss/colby/styles.scss';
</style>
