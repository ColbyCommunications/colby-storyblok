<template>
    <NuxtLayout :name="layout" :config="siteConfig" :story="story">
        <StoryblokComponent v-if="story" :blok="story.content" :tags="story.tag_list" />
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute();
    const storyblokApi = useStoryblokApi();

    const config = useRuntimeConfig();

    const slug = route.params.slug;

    const resolveRelations = ['form-wrapper.form'];

    let storyBlokSlug = config.public.siteName + '/' + slug.join('/');

    const story = await useAsyncStoryblok(
        storyBlokSlug,
        {
            version: 'draft',
            resolve_relations: resolveRelations,
        },
        {
            resolveRelations,
        }
    );
    console.log(story);

    // console.log(useStoryblokBridge(story.value.id));

    const {
        data: { story: siteConfig },
    } = await storyblokApi.get(`cdn/stories/${config.public.siteName}/config`);

    definePageMeta({
        layout: false,
    });

    let layout = '';

    switch (config.public.siteName) {
        case 'colby-news':
            layout = 'news';
            break;
        case 'colby-afa':
            layout = 'afa';
            break;
        default:
            siteConfig.contentLayout = story.value.content.template;
            layout = 'colby';
            break;
    }

    if (story.value.content.component === 'form') {
        layout = 'form';
    }
</script>
