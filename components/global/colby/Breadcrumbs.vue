<template>
    <nav
        aria-label="Breadcrumbs"
        class="breadcrumbs flex items-center h-9 bg-gray-100 overflow-x-auto"
    >
        <div class="breadcrumbs__inner max-w-screen-2xl w-full px-5 mx-auto">
            <ul class="flex items-center [&>li+li]:ml-5">
                <li
                    class="font-body font-bold text-10 leading-140 text-indigo-800 whitespace-nowrap"
                >
                    <a
                        class="text-indigo-800 hover:text-indigo transition-all duration-200 ease-in-out"
                        href="/"
                    >
                        <span class="sr-only">Homepage</span>
                        <span
                            class="material-icons-sharp text-18 align-middle fill-indigo-800 hover:fill-indigo transition-all duration-200 ease-in-out"
                            >home</span
                        >
                    </a>
                </li>
                <li
                    class="font-body font-bold text-10 leading-140 text-indigo-800 whitespace-nowrap"
                    v-for="page in finalParts"
                    :key="page.id"
                >
                    <a
                        class="text-indigo-800 hover:text-indigo transition-all duration-200 ease-in-out"
                        :href="`/${page.path}`"
                        >{{ page.name }}</a
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/`, {
        version: 'published',
        content_type: 'page',
    });

    let colbyPages = data.stories.filter((story) => {
        return story.full_slug.includes('colby-edu');
    });
    const router = useRouter();
    console.log(colbyPages);
    const currentPath = router.currentRoute.value.path;

    const pathParts = currentPath.split('/').filter((elem) => elem !== '');

    console.log(pathParts);
    let finalParts = [];
    // pathParts.forEach((part, i) => {
    //     let finalPart = colbyPages.find((elem) => {
    //         let fullPathProcessed = elem.full_slug
    //             .replace('colby-edu/', '')
    //             .split('/')
    //             .filter((elem) => elem !== '');
    //         // console.log(fullPathProcessed);
    //         return fullPathProcessed[fullPathProcessed.length - 1] === part;
    //     });

    //     finalParts.push(finalPart);
    // });
</script>
