<template>
    <div>
        <header class="mt-12 mb-8 page-header">
            <h1 class="mb-6 font-sans text-3xl font-bold sm:text-4xl md:text-6xl">
                {{ category.toUpperCase() }}
            </h1>
        </header>
        <div class="max-w-[56.25rem] mr-auto">
            <div class="mb-8 xl:mb-10">
                <span class="font-light uppercase text-md">Page 1 of 24</span>
            </div>

            <div class="border-t border-gray-700 post-list">
                <div class="post-list-item border-b border-gray-700">
                    <div v-for="(story, i) in storiesData.stories" :key="i" class="post-list-item">
                        <a
                            class="grid grid-cols-3 gap-y-2 gap-x-7 hover:bg-gray-100 py-3.5 sm:py-5"
                            href="https://news.colby.edu/story/professor-l-sandy-maisel-dies-at-age-79/"
                        >
                            <div class="">
                                <div class=""></div>
                            </div>
                            <div class="block col-span-2 space-y-2 lg:pt-6">
                                <h3 class="col-span-2 text-sm font-bold sm:text-xl">
                                    {{ story.content.headline }}
                                </h3>
                                <p class="col-span-2 text-xs sm:text-base">
                                    {{ story.content.summary }}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({ blok: Object });
    const config = useRuntimeConfig();
    const storyblokApi = useStoryblokApi();

    const category = props.blok.category;

    const { data: storiesData } = await storyblokApi.get('cdn/stories', {
        with_tag: category,
    });

    console.log(storiesData);
</script>
