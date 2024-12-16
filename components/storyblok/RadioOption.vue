<template>
    <div class="form-group mb-6" v-editable="blok">
        <input
            :id="sanitizedId"
            type="radio"
            :name="groupName"
            :value="sanitizedValue"
            class="form-radio"
        />
        <label :for="sanitizedId" class="form-label">{{ blok.label }}</label>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        blok: Object,
        groupName: String,
    });

    // Sanitize `id`: Remove special characters, replace spaces with dashes, and convert to lowercase
    const sanitizedId = computed(() => {
        if (!props.blok.label) return '';
        return props.blok.label
            .toLowerCase() // Convert to lowercase
            .trim() // Remove leading and trailing whitespace
            .replace(/[^a-z0-9\s]/g, '') // Remove special characters
            .replace(/\s+/g, '-'); // Replace spaces with dashes
    });

    // Sanitize `value`: Remove special characters but retain spaces, and trim whitespace
    const sanitizedValue = computed(() => {
        if (!props.blok.label) return '';
        return props.blok.label
            .trim() // Remove leading and trailing whitespace
            .replace(/[^a-z0-9\s]/gi, ''); // Remove special characters but keep spaces
    });
</script>
