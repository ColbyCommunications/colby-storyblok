const StoryblokClient = require('storyblok-js-client');
const fs = require('fs');

// get args
const args = getArgs();

const Storyblok = new StoryblokClient({
    oauthToken: args.storyblokToken,
});

const spaceId = args.storyblokSpaceId;

function getArgs() {
    const args = {};
    process.argv.slice(2, process.argv.length).forEach((arg) => {
        // long arg
        if (arg.slice(0, 2) === '--') {
            const longArg = arg.split('=');
            const longArgFlag = longArg[0].slice(2, longArg[0].length);
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;
        }
        // flags
        else if (arg[0] === '-') {
            const flags = arg.slice(1, arg.length).split('');
            flags.forEach((flag) => {
                args[flag] = true;
            });
        }
    });
    return args;
}

async function sync() {
    try {
        const response = await Storyblok.post(`spaces/${spaceId}/stories`, {
            story: { name: 'xy', slug: 'xy' },
        });
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

sync().catch((error) => console.error('Error in sync function:', error));
