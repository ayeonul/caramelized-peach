<template>
  <div class="bg-archive">
    <ChatCarousel :data="ChatData" />
  </div>
</template>

<script>
import ChatCarousel from "@/components/ChatCarousel.vue";
import axios from "axios";

export default {
  components: {
    ChatCarousel,
  },
  data() {
    return {
      ChatData: [],
    };
  },
  async created() {
    try {
      const baseUrl =
        process.env.NODE_ENV === "production" ? "/caramelized-peach/" : "/";
      const response = await axios.get(`${baseUrl}data/data.json`);
      this.ChatData = response.data;
    } catch (error) {
      console.error(
        "데이터 로딩에 실패했어요. 신고는 1588-핑공핑공",
        error
      );
    }
  },
};
</script>

<style scoped>
.bg-archive {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
