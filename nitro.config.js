export default defineNitroConfig({
    experimental: {
        tasks: true,
    },
    scheduledTasks: {
        '*/15 * * * *': ['directory'],
    },
});
