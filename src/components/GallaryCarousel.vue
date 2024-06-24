<template>
  <div class="swiper-section">
    <!-- swiper1 -->
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      ref="swiperTop"
    >
      <swiper-slide
        class="banner-img"
        v-for="(img, idx) in imageList"
        :key="'banner-img' + idx"
      >
        <img :src="img" class="slide-image" />
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <swiper-slide
        class="banner-img"
        v-for="(img, idx) in imageList"
        :key="'thumb-img' + idx"
      >
        <img :src="img" class="thumb-image" />
        <div class="thumbnail-caption">{{ imageNames[idx] }}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>



<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  computed: {
    imageList() {
      return Object.values(this.images);
    },
    imageNames() {
      return Object.keys(this.images);
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>


<style scoped>
.swiper-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gallery-top {
  flex: 1 1 80%; /* Takes 80% of the height */
  padding-bottom: 5px;
}

.gallery-thumbs {
  flex: 1 1 20%; /* Takes 20% of the height */
  box-sizing: border-box;
  padding: 10px 0;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image,
.thumb-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.thumb-image {
  cursor: pointer;
}

.gallery-thumbs .swiper-slide {
  width: auto !important; 
  flex: 0 0 auto;
  flex-direction: column; 
  display: flex; 
  align-items: center; 
}

.thumbnail-caption {
    font-family: 'pretendard';
    color: #666;
  margin-top: 5px; 
  text-align: center;
  font-size: 11px; 
}
</style>
