<template>
    <div v-editable="blok" class="hero relative py-20 space-y-16">
        <div
            class="hero__inner grid md:items-center md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto space-y-16 md:space-y-0"
        >
            <div class="hero__main" :class="blok.align_center ? 'md:col-start-3' : 'md:col-span-8'">
                <TextGroupMacro
                    size="medium"
                    hero="true"
                    date=""
                    :subheading="blok.subheading"
                    :heading="blok.heading"
                    :paragraph="blok.paragraph"
                    :align="blok.align_center"
                    :buttons="blok.buttons"
                    isStatic="false"
                />
            </div>

            <div class="hero__secondary md:col-span-4" v-if="blok.image">
                <div
                    class="hero__image relative pb-[70.73170731707317%]"
                    :class="
                        blok.image_orientation == 'portrait'
                            ? 'md:pb-[119.44444444444444%]'
                            : ' md:pb-[80.55555555555556%]'
                    "
                >
                    <PictureMacro
                        classes="absolute top-0 left-0 w-full h-full object-cover"
                        :src="blok.image.filename"
                    />
                </div>
                <p
                    class="hero__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"
                    v-if="blok.image.caption"
                >
                    {{ blok.image.caption }}
                </p>
            </div>
        </div>
        <div
            class="hero__inner grid md:items-center md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
            v-if="blok.images && blok.align_center"
        >
            <div
                class="mb-10"
                :class="columns === 4 ? 'md:col-span-3' : 'md:col-span-4'"
                v-for="(image, index) in blok.images"
                v-bind:key="index"
            >
                <div
                    class="hero__image relative pb-[70.73170731707317%]"
                    :class="
                        columns === 4 ? 'pb-[165.3846153846154%]' : 'md:pb-[80.55555555555556%]'
                    "
                >
                    <PictureMacro
                        classes="absolute top-0 left-0 w-full h-full object-cover"
                        src="image.filename"
                    />
                </div>
                <p
                    class="hero__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"
                    v-if="image.caption"
                >
                    {{ image.caption }}
                </p>
            </div>
        </div>
        <div
            class="hero__pattern z-[-1] absolute bg-hero__pattern top-0 left-0 w-full h-full opacity-50 !mt-0"
        ></div>
    </div>
</template>

<script setup>
    import TextGroupMacro from '../global/colby/TextGroup.macro.vue';
    import PictureMacro from '../global/colby/Picture.macro.vue';
    const props = defineProps({ blok: Object });
    console.log(props);
</script>

<style></style>
