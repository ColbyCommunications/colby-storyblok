<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
    const route = useRoute();
    const story = useState();
    const storyblokApi = useStoryblokApi();

    console.log('TEST');

    const slug = route.params.slug;

    const { data } = await storyblokApi.get(`cdn/stories/${process.env.SITE_NAME}/${slug}`, {
        version: 'draft',
    });
    story.value = data.story;
</script>
