<template>
    <div class="text-group text-group--animated" v-html="macroContent"></div>
</template>

<script setup>
    const props = defineProps([
        'size',
        'align',
        'type',
        'subheading',
        'heading',
        'paragraph',
        'isStatic',
        'hero',
        'date',
    ]);

    let macroContent = '';

    let subheadingSize = '';
    let headingSize = '';
    let headingSizeMobile = '';
    let headingWeight = '';
    let paragraphSize = '';
    let paragraphSizeMobile = '';
    let textAlign = '';
    let subheadingColor = '';
    let headingColor = '';
    let paragraphColor = '';
    let subheadingTag = '';
    let headingTag = '';

    if (props.size === 'xlarge') {
        subheadingSize = 'text-24';
        headingSize = 'md:text-48';
        headingSizeMobile = 'text-48';
        headingWeight = 'font-normal';
        paragraphSize = 'md:text-20';
        paragraphSizeMobile = 'text-20';
    } else if (props.size == 'large') {
        subheadingSize = 'text-18';
        headingSize = 'md:text-36';
        headingSizeMobile = 'text-28';
        headingWeight = 'font-normal';
        paragraphSize = 'md:text-18';
        paragraphSizeMobile = 'text-18';
    } else if (props.size == 'medium') {
        subheadingSize = 'text-14';
        headingSize = 'md:text-24';
        headingSizeMobile = 'text-28';
        headingWeight = 'font-normal';
        paragraphSize = 'md:text-16';
        paragraphSizeMobile = 'text-18';
    } else if (props.size == 'small' && isStatic == true) {
        subheadingSize = 'text-12';
        headingSize = 'text-20';
        headingWeight = 'font-normal';
        paragraphSize = 'text-14';
    } else if (props.size == 'small') {
        subheadingSize = 'text-12';
        headingSize = 'md:text-20';
        headingSizeMobile = 'text-28';
        headingWeight = 'font-normal';
        paragraphSize = 'md:text-14';
        paragraphSizeMobile = 'text-18';
    } else if (props.size == 'xsmall') {
        subheadingSize = 'text-12';
        headingSize = 'md:text-18';
        headingSizeMobile = 'text-24';
        headingWeight = 'font-bold';
        paragraphSize = 'md:text-12';
        paragraphSizeMobile = 'text-12';
    }

    if (props.align == 'center') {
        textAlign = 'text-center';
    } else {
        textAlign = 'text-left';
    }

    if (props.type == 'light') {
        subheadingColor = 'text-canary';
        headingColor = 'text-white';
        paragraphColor = 'text-indigo-200';
    } else {
        subheadingColor = 'text-azure';
        headingColor = 'text-indigo';
        paragraphColor = 'text-indigo-800';
    }

    if (props.hero) {
        if (props.date) {
            subheadingTag = 'div';
        } else {
            subheadingTag = 'h1';
        }
    } else if (heading) {
        subheadingTag = 'div';
    } else {
        subheadingTag = 'h2';
    }

    if (props.date) {
        headingTag = 'h1';
    } else {
        headingTag = 'h2';
    }

    if (props.subheading) {
        macroContent += `<${subheadingTag} class="text-group__subheading font-extended font-bold ${subheadingSize} leading-130 tracking-8 ${textAlign} ${subheadingColor} uppercase">${props.subheading}</${subheadingTag}>`;
    }
    if (props.heading) {
        macroContent += `<${headingTag} class="text-group__heading font-extended ${headingWeight} ${headingSizeMobile} ${headingSize} leading-110 -tracking-3 ${textAlign} ${headingColor} mt-2">${props.heading}</${headingTag}>`;
    }

    if (props.paragraph) {
        macroContent += `<p class="text-group__p font-body font-normal ${paragraphSizeMobile} ${paragraphSize} leading-130 ${textAlign} ${paragraphColor} mt-2">${props.paragraph}</p>`;
    }
</script>
