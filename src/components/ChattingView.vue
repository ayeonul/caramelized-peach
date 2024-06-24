<template>
    <div class="bg-chatviewer no-select custom-scrollbar" @wheel="handleScroll">
        <Chat
            v-for="(chat, idx) in chatData.slice()"
            :chat="chat"
            :chatViewerIndex="chatViewerIndex"
            :chatIndex="idx"
            :key="'chat-'+idx"
        />
    </div>
</template>

<script>
import Chat from '@/components/Chat.vue';

export default {
    components: {
        Chat,
    },
    props:{
        chatData:{ // 한 대화 묶음씩
            type: Array,
            required:true
        },
        chatViewerIndex:{
            type: Number,
            required:true
        }
    },
    data() {
        return {
            // chatViewerIndex: 0,
            // chatData: [
            //     {
            //         speaker: 'narration',
            //         face: '',
            //         contents: [
            //             '서로 궁금했던 점에 대해 질답 시간을 갖기로 한다.',
            //         ],
            //     },
            //     {
            //         speaker: 'martin',
            //         face: 'smile',
            //         contents: [
            //             '음... 저를 좋아하는 이유가 궁금해요.',
            //             '다들 한번씩 그런 생각 하지 않나요? 이 사람이 날 좋아하는 이유가 뭘까, 하고.',
            //             '당신은 어떤 이유인지 궁금해요.',
            //         ],
            //     },
            //     {
            //         speaker: 'alley',
            //         face: 'smug',
            //         contents: [
            //             '... 너무 많은데... *(장난기 가득한 표정!)* 시험 끝나고 프리젠테이션 준비해올까요?',
            //         ],
            //     },
            //     {
            //         speaker: 'alley',
            //         face: 'smile',
            //         contents: [
            //             '으음, 일단 몇 개만 꼽아보자면...',
            //             '당신 목소리 처음 듣고 반했다고 하면 믿을... 래요?',
            //         ],
            //     },
            //     {
            //         speaker: 'narration',
            //         face: '',
            //         contents: [
            //             '서로 궁금했던 점에 대해 질답 시간을 갖기로 한다.',
            //         ],
            //     },
            //     {
            //         speaker: 'martin',
            //         face: 'smile',
            //         contents: [
            //             '음... 저를 좋아하는 이유가 궁금해요.',
            //             '다들 한번씩 그런 생각 하지 않나요? 이 사람이 날 좋아하는 이유가 뭘까, 하고.',
            //             '당신은 어떤 이유인지 궁금해요.',
            //         ],
            //     },
            //     {
            //         speaker: 'alley',
            //         face: 'smug',
            //         contents: [
            //             '... 너무 많은데... *(장난기 가득한 표정!)* 시험 끝나고 프리젠테이션 준비해올까요?',
            //         ],
            //     },
            //     {
            //         speaker: 'alley',
            //         face: 'smile',
            //         contents: [
            //             '으음, 일단 몇 개만 꼽아보자면...',
            //             '당신 목소리 처음 듣고 반했다고 하면 믿을... 래요?',
            //         ],
            //     },
            // ],
        };
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
    width: calc(100% - 2rem);
    padding: 0 1rem;
    max-width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    background-color: #a3c0bc;

    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
</style>
