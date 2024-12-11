<template>
    <div class="form-group mb-6" v-editable="blok">
        <label :for="blok.name">{{ blok.label }}</label>
        <input :id="blok.name" type="radio" :name="blok.group" :value="blok.value" />
    </div>
</template>

<script setup>
    const props = defineProps({ blok: Object });
</script>
