<template>
    <div v-editable="blok" class="flex justify-center p-12">
        <form name="contact" method="POST" @submit.prevent="handleSubmit">
            <StoryblokComponent
                v-for="field in blok.form.content.fields"
                :key="field._uid"
                :blok="field"
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
    const props = defineProps({ blok: Object });
</script>
