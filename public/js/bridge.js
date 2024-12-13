function loadBridge(callback) {
    const existingScript = document.getElementById('storyblokBridge');

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = '//app.storyblok.com/f/storyblok-v2-latest.js';
        script.id = 'storyblokBridge';
        document.body.appendChild(script);
        script.onload = () => {
            callback();
        };
    } else {
        callback();
    }
}
window.onload = function () {
    loadBridge(() => {
        const { StoryblokBridge, location } = window;
        const storyblokInstance = new StoryblokBridge();
    });
};
