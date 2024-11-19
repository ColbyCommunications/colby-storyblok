import { defineCronHandler } from '#nuxt/cron';
import StoryblokClient from 'storyblok-js-client';

const spaceId = 1022169;

export default defineTask({
    meta: {
        name: 'directory',
        description: 'Sync directory',
    },
    run({ payload, context }) {
        const Storyblok = new StoryblokClient({
            oauthToken: process.env.STORYBLOK_TOKEN,
        });

        Storyblok.post(`spaces/${spaceId}/stories`, {
            story: { name: 'xy', slug: 'xy' },
        });
        return { result: 'Success' };
    },
});
