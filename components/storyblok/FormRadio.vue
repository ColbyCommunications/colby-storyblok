<template>
    <div class="form-group mb-6" v-editable="blok">
        <label>{{ blok.label }}</label>
        <input type="radio" :name="blok.name" :value="blok.value" />
    </div>
</template>

<script setup>
    const props = defineProps({ blok: Object });
</script>
