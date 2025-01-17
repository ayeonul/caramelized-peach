<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="(chatData, chatIndex) in data"
      :key="'slide' + chatIndex"
    >
      <ChattingView :chatData="chatData" :chatViewerIndex="chatIndex"
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ChattingView from "@/components/ChattingView.vue";

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ChattingView,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper-wrapper {
  position: relative;
}

.swiper {
  padding-bottom: 50px;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px; /* Adjust this value to position the pagination */
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 25px;
  color: #fff;

  background-color: rgba(0, 0, 0, 0.4);
  padding: 6px 12px;
  border-radius: 50%;
}
</style>
