<template>
    <div class="bg-archive">
        <Chat />
    </div>
</template>

<script>
import Chat from '@/components/Chat.vue';
import axios from 'axios';

export default {
    components: {
        Chat,
    },
    data() {
        return {
            // ChatData: [], 
        };
    },
    // async created() {
    //     try {
    //         const response = await axios.get('/data/data.json');
    //         this.ChatData = response.data;
    //     } catch (error) {
    //         console.error('Error loading data:', error);
    //     }
    // },
};
</script>

<style scoped>
.bg-archive {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
