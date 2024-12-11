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

<script setup></script>
