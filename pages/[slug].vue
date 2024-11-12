<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
    const route = useRoute();
    const story = useState();
    const storyblokApi = useStoryblokApi();

    const config = useRuntimeConfig();

    const slug = route.params.slug;

    const { data } = await storyblokApi.get(`cdn/stories/${config.public.siteName}/${slug}`, {
        version: 'draft',
    });
    story.value = data.story;

    switch (process.env.SITE_NAME) {
        case 'colby-news':
            definePageMeta({
                layout: 'news',
            });
            break;
        case 'colby-afa':
            definePageMeta({
                layout: 'afa',
            });
            break;
        default:
            definePageMeta({
                layout: 'colby',
            });
            break;
    }
</script>
