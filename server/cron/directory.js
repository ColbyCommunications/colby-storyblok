import { defineCronHandler } from '#nuxt/cron';
import StoryblokClient from 'storyblok-js-client';

const spaceId = 1022169;

export default defineCronHandler('*/15 * * * *', () => {
    const Storyblok = new StoryblokClient({
        oauthToken: process.env.STORYBLOK_TOKEN,
    });

    Storyblok.post(`spaces/${spaceId}/stories`, {
        story: { name: 'xy', slug: 'xy' },
    });
});
