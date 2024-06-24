<template>
    <div class="bg-archive">
        <ChatCarousel :data="ChatData"/>
    </div>
</template>

<script>
import ChatCarousel from '@/components/ChatCarousel.vue';
import axios from 'axios';

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
            const response = await axios.get('/data/data.json');
            this.ChatData = response.data;
        } catch (error) {
            console.error('데이터 로딩에 실패했어요. 핑공한테 빨리 문의해줘요!', error);
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
