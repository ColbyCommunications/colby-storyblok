<template>
    <div class="form-group mb-6" v-editable="blok">
        <select>
            <SelectOption v-for="option in sortedOptions" :key="option._uid" :blok="option" />
        </select>
    </div>
</template>

<script setup>
    import SelectOption from './SelectOption.vue';
    const props = defineProps({ blok: Object });

    const sortedOptions = computed(() => {
        if (!props.blok.options) return [];

        if (props.blok.order_by === 'alphabetical') {
            return [...props.blok.options].sort((a, b) =>
                (a.option_value || '').localeCompare(b.option_value || '')
            );
        } else if (props.blok.order_by === 'chronological') {
            return [...props.blok.options].sort(
                (a, b) => new Date(a.date || 0) - new Date(b.date || 0)
            );
        } else {
            return props.blok.options;
        }
    });
</script>
