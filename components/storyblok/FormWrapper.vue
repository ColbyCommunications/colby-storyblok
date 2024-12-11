<template>
    <div v-editable="blok" class="flex justify-center p-12">
        <form name="contact" method="POST" @submit.prevent="handleSubmit">
            <StoryblokComponent
                v-for="formBlok in blok.forms"
                :key="formBlok._uid"
                :blok="formBlok"
            />
            <button
                type="submit"
                class="w-full rounded-[8px] bg-indigo px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md"
            >
                Send
            </button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const message = ref('');
    const messageClass = ref('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData(event.target);
    //     const data = Object.fromEntries(formData.entries());

    //     const story = {
    //         name: `Submission - ${new Date().toISOString()}`,
    //         slug: `submission-${Date.now()}`,
    //         content: {
    //             component: 'submission',
    //             ...data,
    //         },
    //     };

    //     try {
    //         const response = await $fetch(
    //             'https://api.storyblok.com/v2/cdn/spaces/1022169/stories',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     Authorization: `Bearer ztPg5u0DSLCmPYEmQE7GAgtt`,
    //                 },
    //                 body: story,
    //             }
    //         );

    //         message.value = 'Submission saved successfully!';
    //         messageClass.value = 'text-green-600';
    //         console.log('Response:', response);
    //     } catch (error) {
    //         console.error('Error saving submission:', error);
    //         message.value = 'Error saving submission. Please try again.';
    //         messageClass.value = 'text-red-600';
    //     }
    // };
</script>
