<template>
    <div v-editable="blok">
        <header class="md:pt-4 lg:pt-8 pb-9 md:pb-15">
            <div class="text-center">
                <h1 class="text-4xl font-bold md:text-5xl">{{ blok.headline }}</h1>

                <div class="flex flex-col mt-4 uppercase sm:block">
                    <span class="primary-category mr-2 sm:after:content-pipe sm:after:ml-2"
                        ><a href="https://news.colby.edu/story/category/announcements/">
                            {{ tags[0] }}
                        </a></span
                    ><span class="read-time">9 MIN READ</span>
                </div>

                <h2 class="text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-8 max-w-2xl mx-auto">
                    {{ blok.summary }}
                </h2>
            </div>
        </header>
        <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
</template>

<script setup>
    let props = defineProps({ blok: Object, tags: Array });
</script>
