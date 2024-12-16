<template>
    <fieldset class="form-group mb-6" v-editable="blok">
        <RadioOption
            v-for="option in blok.options"
            :key="option._uid"
            :blok="option"
            :groupName="blok.name"
        />
    </fieldset>
</template>

<script setup>
    import RadioOption from './RadioOption.vue';
    const props = defineProps({ blok: Object });
</script>
