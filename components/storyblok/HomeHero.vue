<template>
    <div
        v-editable="blok"
        class="home-hero relative h-[calc(100vh_-_145px)] md:h-[calc(100vh_-_100px)] overflow-hidden md:[&+.carousel]:mt-[-30px]"
    >
        <div
            class="home-hero__bottom absolute bottom-0 left-0 w-full pt-24 pb-[30px] space-y-12 md:space-y-20"
            style="
                background: linear-gradient(
                    180deg,
                    rgba(1, 33, 105, 0) 0%,
                    rgba(14, 20, 34, 0.4) 25%
                );
            "
        >
            <div
                class="home-hero__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
            >
                <div class="home-hero__main md:col-start-6 md:col-span-7">
                    <div class="context w-full space-y-5">
                        <div class="text-group text-group--animated">
                            <h1
                                class="text-group__heading font-extended font-normal text-48 md:text-48 leading-110 -tracking-3 text-left text-white mt-2"
                            >
                                {{ blok.heading }}
                            </h1>
                            <!-- <p v-if="blok.paragraph" class="text-group__p font-body font-normal {{ paragraphSizeMobile }} {{ paragraphSize }} leading-130 {{ textAlign }} {{ paragraphColor }} mt-2">{{ paragraph }}</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-if="blok.caption"
                class="home-hero__inner max-w-screen-2xl w-full px-5 my-0 mx-auto"
            >
                <div
                    class="font-extended font-bold text-12 tracking-8 text-canary uppercase text-right md:text-left"
                >
                    {{ blok.caption }}
                </div>
            </div>
        </div>
        <video
            v-if="blok.video.source"
            class="z-[-10] absolute min-w-full min-h-full w-auto h-auto bg-repeat bg-cover top-0 right-0 bottom-0 left-0 object-cover"
            playsinline
            autoplay
            muted
            loop
            poster=""
        >
            <source src="" type="video/mp4" />
        </video>
        <img
            v-else
            class="z-[-10] absolute top-0 left-0 w-full h-full object-cover"
            :src="blok.image.filename"
            alt=""
        />
    </div>
</template>

<script setup>
    defineProps({ blok: Object });
</script>
