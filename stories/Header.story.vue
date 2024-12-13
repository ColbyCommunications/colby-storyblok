<template>
    <Story> <ColbyHeader :items="items" :config="config" /> </Story>
</template>

<script setup>
    import ColbyHeader from '../components/global/colby/Header.vue';
    const items = [
        {
            url: {
                id: '',
                url: 'https://www.colby.edu',
                linktype: 'url',
                fieldtype: 'multilink',
                cached_url: 'https://www.colby.edu',
            },
            _uid: '59bd475a-b176-42d7-88be-559fca72f5a7',
            label: 'Utility 2',
            component: 'nav_item',
        },
        {
            url: {
                id: 'e52e1c7a-904b-434b-bed7-b10a24b6481e',
                url: '',
                linktype: 'story',
                fieldtype: 'multilink',
                cached_url: 'https://localhost:3000/academics',
            },
            _uid: '1b179e7f-519b-4712-b7d9-c4bfcd405ad0',
            label: 'Utility 1',
            component: 'nav_item',
        },
    ];

    const config = {
        name: 'Config',
        created_at: '2024-11-11T20:47:54.354Z',
        published_at: '2024-11-12T18:08:28.075Z',
        updated_at: '2024-11-12T18:08:28.089Z',
        id: 15191227,
        uuid: 'f332cb92-f6ed-4a17-9ba9-bf7617694016',
        content: {
            _uid: '488b826e-0d44-4941-8502-82efb0c4c994',
            address: '',
            component: 'Config',
            site_logo: {
                id: 988320,
                alt: '',
                name: '',
                focus: '',
                title: '',
                source: '',
                filename:
                    'https://a-us.storyblok.com/f/1022169/149x75/49e694960a/colby_logo_002878.png',
                copyright: '',
                fieldtype: 'asset',
                meta_data: {},
                is_external_url: false,
            },
            site_name: '',
            navigation: [
                {
                    url: {
                        id: '',
                        url: 'https://www.colby.edu/',
                        linktype: 'url',
                        fieldtype: 'multilink',
                        cached_url: 'https://www.colby.edu/',
                    },
                    _uid: '9e01a2ca-929b-4bf2-9e05-de238c1c3fbb',
                    label: 'Home',
                    component: 'nav_item',
                },
                {
                    url: {
                        id: 'e52e1c7a-904b-434b-bed7-b10a24b6481e',
                        url: '',
                        linktype: 'story',
                        fieldtype: 'multilink',
                        cached_url: 'https://localhost:3000/academics',
                    },
                    _uid: 'a5240d34-f53f-4924-bfd0-b43985c03df6',
                    label: 'Academics',
                    component: 'nav_item',
                },
                {
                    url: {
                        id: '1548e749-534b-4c4b-99fb-09d2721e35f1',
                        url: '',
                        linktype: 'story',
                        fieldtype: 'multilink',
                        cached_url: 'https://localhost:3000/admissions/',
                    },
                    _uid: '974f98fa-401a-4d32-aeab-29f86fa87c75',
                    label: 'Admissions',
                    component: 'nav_item',
                },
            ],
            utility_navigation: [
                {
                    url: {
                        id: '',
                        url: 'https://www.colby.edu',
                        linktype: 'url',
                        fieldtype: 'multilink',
                        cached_url: 'https://www.colby.edu',
                    },
                    _uid: '59bd475a-b176-42d7-88be-559fca72f5a7',
                    label: 'Utility 2',
                    component: 'nav_item',
                },
                {
                    url: {
                        id: 'e52e1c7a-904b-434b-bed7-b10a24b6481e',
                        url: '',
                        linktype: 'story',
                        fieldtype: 'multilink',
                        cached_url: 'https://localhost:3000/academics',
                    },
                    _uid: '1b179e7f-519b-4712-b7d9-c4bfcd405ad0',
                    label: 'Utility 1',
                    component: 'nav_item',
                },
            ],
        },
        slug: 'config',
        full_slug: 'colby-edu/config',
        sort_by_date: null,
        position: -30,
        tag_list: [],
        is_startpage: false,
        parent_id: 13849877,
        meta_data: null,
        group_id: '6dae77e2-1ef4-4fe7-a7d1-b7bc866d2bc2',
        first_published_at: '2024-11-11T21:16:09.249Z',
        release_id: null,
        lang: 'default',
        path: 'config/',
        alternates: [
            {
                id: 17944752,
                name: 'Config',
                slug: 'config',
                published: true,
                full_slug: 'admissions/config',
                is_folder: false,
                parent_id: 17944751,
            },
        ],
        default_full_slug: null,
        translated_slugs: null,
    };
</script>
