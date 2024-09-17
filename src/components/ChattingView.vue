<template>
  <div class="bg-chatviewer" @wheel="handleScroll">
    <Chat
      v-for="(chat, idx) in chatData.slice()"
      :chat="chat"
      :chatViewerIndex="chatViewerIndex"
      :chatIndex="idx"
      :key="'chat-' + idx"
    />
  </div>
</template>

<script>
import Chat from "@/components/Chat.vue";

export default {
  components: {
    Chat,
  },
  props: {
    chatData: {
      // 한 대화 묶음씩
      type: Array,
      required: true,
    },
    chatViewerIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleScroll(event) {
      const element = event.currentTarget;
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const offsetHeight = element.offsetHeight;
      const scrollBottom = scrollHeight - offsetHeight - scrollTop;

      if (
        (scrollTop === 0 && event.deltaY < 0) ||
        (scrollBottom === 0 && event.deltaY > 0)
      ) {
        // 스크롤이 상단이나 하단에 도달하면 부모로 스크롤 이벤트를 전파
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
.bg-chatviewer {
  margin: 0 auto;
  width: calc(100% - 1rem);
  padding: 0 0.5rem;
  max-width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: #a3c0bc;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
