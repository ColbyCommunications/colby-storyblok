<template>
    <nav
        class="header__utility flex md:block h-[118px] md:h-auto pt-4 md:pt-0 px-5 bg-indigo-100"
        aria-label="Utility menu"
    >
        <ul
            class="grid md:inline-flex grid-cols-3 md:grid-cols-none grid-rows-2 md:grid-rows-none gap-x-5 md:gap-0 w-full md:w-auto md:space-x-6"
        >
            <li
                v-for="item in props.items"
                :key="item._uid"
                class="font-body font-normal text-16 md:text-10 leading-110"
            >
                <a
                    class="block py-2 text-indigo-800 hover:text-indigo-1000 hover:underline transition-all duration-200 ease-in-out"
                    :href="item.url"
                    >{{ item.label }}</a
                >
            </li>
        </ul>
        <ul
            class="absolute md:static top-0 right-5 hidden md:block float-right bg-indigo-100 md:bg-transparent px-5 md:px-0 space-x-6"
        >
            <li class="inline-block group font-body font-normal text-14 md:text-10 leading-110">
                <a
                    class="flex py-2 text-indigo-800 group-hover:text-indigo-1000 group-hover:underline transition-all duration-200 ease-in-out"
                    href="https://my.colby.edu/"
                    ><svg
                        class="fill-indigo-500 group-hover:fill-indigo-700 w-[16px] md:w-[10px] mr-1.5 transition-all duration-200 ease-in-out"
                        x="0"
                        y="0"
                        viewBox="0 0 14 15"
                        xml:space="preserve"
                    >
                        <path
                            d="M7 6c1.7 0 3-1.3 3-3S8.7 0 7 0 4 1.3 4 3s1.3 3 3 3zM0 15c0-3.9 3.1-7 7-7s7 3.1 7 7H0z"
                        ></path>
                    </svg>
                    myColby
                </a>
            </li>
            <li class="inline-block group font-body font-normal text-14 md:text-10 leading-110">
                <p>Search</p>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    const props = defineProps(['items']);
</script>
