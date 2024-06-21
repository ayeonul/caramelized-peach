<template>
    <div class="bg-chat">
        <template v-for="(chat, idx) in chatData">
            <div
                v-if="chat.speaker === 'narration'"
                :key="chatIndex + '-' + idx"
                class="chat-section"
            >
                <div class="chat-narration">
                    {{ chat.contents[0] }}
                </div>
            </div>
            <div
                v-else-if="chat.speaker === 'martin'"
                :key="chatIndex + '-' + idx"
                class="chat-section"
            >
                <div class="chat-profile martin">
                    <span class="chat-profile-img">{{ chat.face }}</span>
                    <span class="chat-profile-name">Martin</span>
                </div>
                <div
                    v-for="(c, i) in chat.contents"
                    :key="chatIndex + '-' + idx + '-' + i"
                    class="chat-contents martin"
                >
                    {{ c }}
                </div>
            </div>
            <div
                v-else-if="chat.speaker === 'alley'"
                :key="chatIndex + '-' + idx"
                class="chat-section"
            >
                <div class="chat-profile alley">
                    <span class="chat-profile-name">Alley</span>
                    <span class="chat-profile-img">{{ chat.face }}</span>
                </div>
                <div
                    v-for="(c, i) in chat.contents"
                    :key="chatIndex + '-' + idx + '-' + i"
                    class="chat-contents alley"
                >
                    {{ c }}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    // props:{
    //     chatData:{ // 한 대화 묶음씩
    //         type: Array,
    //         required:true
    //     },
    //     chatIndex:{
    //         type: Number,
    //         required:true
    //     }
    // },
    data() {
        return {
            chatIndex: 0,
            chatData: [
                {
                    speaker: 'narration',
                    face: '',
                    contents: [
                        '서로 궁금했던 점에 대해 질답타임을 갖기로 한다.',
                    ],
                },
                {
                    speaker: 'martin',
                    face: 'smile',
                    contents: [
                        '음... 저를 좋아하는 이유가 궁금해요.',
                        '다들 한번씩 그런 생각 하지 않나요? 이 사람이 날 좋아하는 이유가 뭘까, 하고.',
                        '당신은 어떤 이유인지 궁금해요.',
                    ],
                },
                {
                    speaker: 'alley',
                    face: 'smug',
                    contents: [
                        '... 너무 많은데... *(장난기 가득한 표정!)* 시험 끝나고 프리젠테이션 준비해올까요?',
                    ],
                },
                {
                    speaker: 'alley',
                    face: 'smile',
                    contents: [
                        '으음, 일단 몇 개만 꼽아보자면...',
                        '당신 목소리 처음 듣고 반했다고 하면 믿을... 래요?',
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.bg-chat {
    height: fit-content;
    width: 100%;
    max-width: 400px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    background-color: #a3c0bc;
}

.chat-section {
    width: calc(100% - 2rem);
    height: fit-content;
    padding: 1rem;
    word-break: keep-all; 
    font-family: 'Pretendard';
}

.chat-narration{
    text-align: center;
    font-size: .7rem;
    font-weight: 300;
    width: fit-content;
    padding: 8px 15px;
    background-color: rgba(0,0,0,0.5);
    margin: 0 auto;
    border-radius: 8px;
    color: #fff;
}
</style>
