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
            },
        ],
        '@nuxtjs/tailwindcss',
    ],

    compatibilityDate: '2024-10-25',
});
