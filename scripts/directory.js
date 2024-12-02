const exec = require('child_process').exec;

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

// get args
const args = getArgs();

async function postData() {
    try {
        const response = await fetch(
            `https://api-us.storyblok.com/v1/spaces/${args.storyblokSpaceId}/stories`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${args.storyblokToken}`,
                },
                body: JSON.stringify({
                    story: {
                        parent_id: 15980813,
                        name: 'Test Person 1',
                        slug: 'person-1',
                        content: { component: 'person', first_name: 'Test Person 1' },
                    },
                    publish: 1,
                }),
            }
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const response = await fetch(
            `https://api-us.storyblok.com/v1/spaces/${args.storyblokSpaceId}/stories`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${args.storyblokToken}`,
                },
                body: JSON.stringify({
                    story: {
                        parent_id: 15980813,
                        name: 'Test Person 2',
                        slug: 'person-2',
                        content: { component: 'person', first_name: 'Test Person 2' },
                    },
                    publish: 1,
                }),
            }
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

postData();
