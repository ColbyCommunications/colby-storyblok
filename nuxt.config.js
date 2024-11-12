export default defineNuxtConfig({
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    css: ['@/assets/css/roboto.css'],

    modules: [
        [
            '@storyblok/nuxt',
            {
                accessToken: process.env.STORYBLOK_TOKEN,
                apiOptions: {
                    region: 'us',
                },
                componentsDir: '~/components/storyblok',
            },
        ],
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],

    compatibilityDate: '2024-10-25',

    runtimeConfig: {
        public: {
            siteName: process.env.SITE_NAME,
        },
    },

    pinia: {
        storesDirs: ['./stores/**'],
    },
});
