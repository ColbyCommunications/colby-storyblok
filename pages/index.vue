<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
    import { useAsyncStoryblok } from 'your-storyblok-hook'; // Import your custom hook

    const { params, redirect } = defineProps(['params', 'redirect']);
    const slug = params.slug;

    const story = await useAsyncStoryblok(
        slug,
        { version: 'draft' },
        { customParent: 'https://app.storyblok.com' }
    );

    if (!story) {
        redirect('/404'); // Redirect to 404 page if content is not found
    }
</script>
