export default defineNuxtConfig({
    server: {
        port: process !== 'undefined' ? process.env.PORT : 443,
        host: 'localhost',
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
        // '@nuxtjs/storybook',
    ],

    compatibilityDate: '2024-10-25',

    runtimeConfig: {
        public: {
            siteName: process.env.SITE_NAME,
            GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        },
    },

    tailwindcss: {
        configPath: `~/${process !== 'undefined' ? process.env.TAILWIND_CONFIG : env.TAILWIND_CONFIG}`,
    },

    components: {
        dirs: [
            {
                path: '~/components/storyblok',
                global: true,
            },
        ],
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Sharp',
                },
            ],
        },
    },
});
