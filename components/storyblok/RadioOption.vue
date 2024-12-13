<template>
    <div class="form-group mb-6" v-editable="blok">
        <input :id="blok.name" type="radio" :name="blok.group" :value="blok.name" />
        <label :for="blok.name">{{ blok.label }}</label>
    </div>
</template>

<script setup>
    const props = defineProps({ blok: Object });
</script>
