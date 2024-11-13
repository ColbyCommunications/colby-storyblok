import { reactive } from 'vue';

export const store = reactive({
    menuOpen: false,
    searchOpen: false,
    openSearch() {
        this.menuOpen = false;

        useHead({
            bodyAttrs: {
                class: 'no-scroll',
            },
        });

        this.searchOpen = true;
    },
    closeSearch() {
        const el = document.body;
        el.classList.remove('no-scroll');
        this.searchOpen = false;
    },
    openMenu() {
        this.searchOpen = false;
        useHead({
            bodyAttrs: {
                class: 'no-scroll',
            },
        });
        this.menuOpen = true;
    },
    closeMenu() {
        const el = document.body;
        el.classList.remove('no-scroll');
        this.menuOpen = false;
    },
});
