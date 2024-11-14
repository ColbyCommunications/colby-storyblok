<template>
    <div class="wp-block" v-editable="blok">
        <div>
            <h1 class="sr-only">Colby College News</h1>
            <div class="pt-8 xl:-mx-container-gutter flex flex-col items-center">
                <div
                    class="max-w-[88rem] space-y-6 xl:space-y-0 xl:grid xl:grid-cols-12 xl:gap-16 xl:items-center"
                >
                    <div
                        class="-mx-container-gutter xl:mx-0 xl:self-stretch xl:col-span-7 2xl:col-span-8 descendant-img:h-auto"
                    >
                        <figure>
                            <img :src="blok.story[0].content.content[1].image.filename" />
                        </figure>
                    </div>
                    <div
                        class="xl:pl-container-gutter xl:order-first xl:col-span-5 2xl:col-span-4 2xl:ml-auto 2xl:pl-12"
                    >
                        <div class="mb-3 text-sm uppercase">
                            <a href="https://news.colby.edu/story/category/announcements/">
                                {{  }}
                            </a>
                        </div>

                        <h2 class="text-4xl font-bold md:text-5xl">
                            Colby to Establish Public Policy Lab
                        </h2>

                        <h2 class="text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-8">
                            {{ blok.story[0].content.summary }}
                        </h2>

                        <div class="mt-16">
                            <a
                                href="https://news.colby.edu/story/colby-to-establish-public-policy-lab/"
                                class="px-10 py-2 text-sm text-white uppercase transition-colors bg-black rounded-lg hover:bg-gray-800 focus:bg-gray-800"
                                >Read More</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({ blok: Object });
</script>
