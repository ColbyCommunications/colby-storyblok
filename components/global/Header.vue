<template>
    <header class="header z-50 relative flex justify-center h-[145px] md:h-auto pt-7 md:pt-0">
        <div class="header__inner flex justify-between max-w-screen-2xl w-full gap-y-10 px-5">
            <div class="header__left flex items-center justify-between w-full md:w-auto">
                <a href="/">
                    <span class="sr-only">Link to Homepage</span>
                    <img
                        src="https://a-us.storyblok.com/f/1022169/149x75/49e694960a/colby_logo_002878.png"
                        alt="Colby College Logo"
                        class="fill-indigo w-[120px] md:w-[100px]"
                    />
                </a>
                <div class="header__hamburger-group flex md:hidden items-center space-x-4">
                    <label
                        class="header__hamburger-label font-body font-normal text-20 text-indigo-800"
                        >Menu</label
                    >
                    <button
                        class="header__hamburger flex items-center justify-center w-[56px] h-[52px] text-[0] bg-indigo-100 rounded-sm border border-indigo-300 border-solid"
                        @click="toggleActive()"
                    >
                        <span
                            class="relative block w-6 h-0.5 bg-indigo transition-all duration-200 ease-in-out"
                            :class="{ 'bg-transparent': state.active }"
                        >
                            <span
                                class="absolute left-0 w-full h-full bg-indigo origin-center top-[-6px] transition-all duration-200 ease-in-out"
                                :class="{ '!top-0 rotate-45': state.active }"
                            ></span>
                            <span
                                class="absolute left-0 w-full h-full bg-indigo origin-center top-[6px] transition-all duration-200 ease-in-out"
                                :class="{ '!top-0 rotate-[-45deg]': state.active }"
                            ></span>
                        </span>
                        Menu Button
                    </button>
                </div>
            </div>

            <div
                class="header__menus absolute md:static visible md:visible flex md:block md:justify-end top-[145px] left-0 w-full md:w-auto h-[calc(100vh_-_145px)] md:h-auto bg-white md:bg-transparent border-t md:border-t-0 border-indigo-300 border-solid md:transform-none transition-all duration-200 ease-in-out"
                :class="{ 'translate-x-[-100%] invisible': !state.active }"
            >
                <div
                    class="md:hidden w-full md:w-0 flex flex-col justify-between h-[calc(100vh_-_145px)]"
                >
                    <div class="py-12 overflow-auto">
                        <ul
                            class="header__main flex md:flex-row flex-col justify-center md:justify-end md:h-auto md:space-x-12 md:space-y-0 space-y-6 md:px-6 pl-16 md:px-4 w-full md:w-auto overflow-y-auto"
                        >
                            <li
                                v-for="item in props.config.content.navigation"
                                :key="item._uid"
                                class="font-extended font-normal text-20 md:text-14 leading-110 !ml-8 lg:!ml-12 md:[&:first-child]:!ml-0"
                            >
                                <a
                                    class="block md:py-7 text-indigo-800 hover:text-indigo-1000 border-b-2 border-solid border-transparent md:hover:border-azure md:focus:border-canary md:outline-0 transition-all duration-200 ease-in-out"
                                    :class="{
                                        '!text-indigo md:border-azure': checkUrl(item.label),
                                    }"
                                    :href="item.url"
                                    >{{ item.label }}</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="bg-indigo-100 w-full p-5 pb-20">
                        <UtilityBar :items="props.items" />
                    </div>
                </div>
                <div class="hidden md:visible md:block md:w-full w-0">
                    <UtilityBar :items="props.items" />
                    <ul
                        class="header__main flex md:flex-row flex-col justify-center md:justify-end h-[calc(100%_-_170px)] md:h-auto md:space-x-12 md:space-y-0 space-y-6 md:px-6 pl-24 md:px-4 w-full md:w-auto overflow-y-auto"
                        aria-label="Main menu"
                    >
                        <li
                            v-for="item in props.config.content.navigation"
                            :key="item._uid"
                            class="font-extended font-normal text-24 md:text-14 leading-110 !ml-6 lg:!ml-12 md:[&:first-child]:!ml-0"
                        >
                            <a
                                class="block md:py-7 text-indigo-800 hover:text-indigo-1000 border-b-2 border-solid border-transparent md:hover:border-canary md:focus:border-azure md:outline-0 transition-all duration-200 ease-in-out"
                                :class="{
                                    '!text-indigo md:border-azure': checkUrl(item.label),
                                }"
                                :href="item.url"
                                >{{ item.label }}</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import UtilityBar from './UtilityBar.vue';
    const props = defineProps(['items', 'config']);

    const route = useRoute();

    import { reactive } from 'vue';

    const state = reactive({
        active: false,
    });

    function toggleActive() {
        const el = document.body;
        if (state.active) {
            state.active = false;
            el.classList.remove('no-scroll');
        } else {
            state.active = true;
            el.classList.add('no-scroll');
        }
    }

    function checkUrl(title) {
        console.log(route);
        const pathSegments = route.fullPath.split('/');
        if (pathSegments.length > 1) {
            // Get the first segment after the initial slash
            const firstSegment = pathSegments[1].toLowerCase();
            const formattedTitle = (title.replace(/\s+/g, '-') || '').toLowerCase();
            return firstSegment.indexOf(formattedTitle) > -1;
        }
        return false;
    }
</script>
