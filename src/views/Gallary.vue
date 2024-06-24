<template>
    <div>
        <div class="carousel-section">
            <GallaryCarousel :images="images" />
        </div>
    </div>
</template>

<script>
import GallaryCarousel from '@/components/GallaryCarousel.vue';

function importAll(r) {
  return r.keys().map(r);
}

const imageFiles = importAll(
  require.context('@/assets/imgs/gallary', false, /\.(png|jpe?g|svg)$/)
);

const images = imageFiles.reduce((acc, img) => {
  const fileName = img.split('/').pop().split('.')[0]; // Extract file name without extension
  acc[fileName] = img;
  return acc;
}, {});

export default {
    components: {
        GallaryCarousel,
    },
    data() {
        return {
            images,
        };
    },
    methods:{
    }
};
</script>

<style scoped>
.carousel-section {
    margin: 0 auto;
    width: 80%;
    height: 50vh;
    padding: 2rem;
}
</style>
