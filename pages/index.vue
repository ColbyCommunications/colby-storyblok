<template>
    <NuxtLayout :name="layout" :config="siteConfig">
        <StoryblokComponent v-if="story" :blok="story.content" />
    </NuxtLayout>
</template>

<script setup>
    const story = useState();
    const storyblokApi = useStoryblokApi();
    const config = useRuntimeConfig();
    const { data } = await storyblokApi.get(`cdn/stories/${config.public.siteName}/home`, {
        version: 'draft',
        resolve_relations: 'featured-story.story',
    });
    story.value = data.story;

    const {
        data: { story: siteConfig },
    } = await storyblokApi.get(`cdn/stories/${config.public.siteName}/config`);

    definePageMeta({
        layout: 'false',
    });
    console.log(story);
    let layout = '';
    switch (config.public.siteName) {
        case 'colby-news':
            layout = 'news';
            break;
        case 'colby-afa':
            layout = 'afa';
            break;
        default:
            layout = 'colby';
            break;
    }
</script>
