<template>
    <div>
        <div class="gallary-info">
            아래 이미지는 모두 커미션 혹은 지인들에게 선물받은 그림으로, 모든
            저작권은 그림의 작가님께 있습니다.
        </div>
        <div class="carousel-section">
            <GallaryCarousel :images="images" />
        </div>
        <div class="toggle-section">
            <input type="checkbox" id="NSFWToggle" v-model="showNSFW" />
            <label for="NSFWToggle" class="checkbox-label"
                >후방주의 그림 표시하기</label
            >
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
    computed: {
        showNSFW: {
            get() {
                return this.$store.state.showNSFW;
            },
            set(value) {
                this.$store.state.showNSFW = value;
            },
        },
    },
    data() {
        return {
            images,
        };
    },
    methods: {},
};
</script>

<style scoped>
.gallary-info {
    font-family: 'pretendard';
    text-align: center;
    font-size: 0.9rem;
    color: rgba(71, 45, 45, .8);
}
.toggle-section {
    font-family: 'pretendard';
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(71, 45, 45, .8);
    align-content: center;
    text-align: center;
}

.carousel-section {
    height: 50vh;
    margin: 1rem 0;
}
</style>
