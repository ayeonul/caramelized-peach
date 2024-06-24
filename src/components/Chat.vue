<template>
    <div
        v-if="chat.speaker === 'narration'"
        :key="chatViewerIndex + '-' + chatIndex"
        class="chat-section"
    >
        <div class="chat-narration">
            {{ chat.contents[0] }}
        </div>
    </div>
    <div
        v-else-if="chat.speaker === 'martin'"
        :key="chatViewerIndex + '-' + chatIndex"
        class="chat-section martin"
    >
        <div class="chat-profile-img">{{ chat.face }}</div>

        <div class="chat-contents">
            <div class="chat-profile-name">Martin</div>
            <div
                v-for="(c, i) in chat.contents"
                :key="chatViewerIndex + '-' + chatIndex + '-' + i"
                v-html="formatText(c)"
                class="chat-texts"
            ></div>
        </div>
    </div>
    <div
        v-else-if="chat.speaker === 'alley'"
        :key="chatViewerIndex + '-' + chatIndex"
        class="chat-section alley"
    >
        <div class="chat-profile-img">{{ chat.face }}</div>

        <div class="chat-contents">
            <div class="chat-profile-name">Alley</div>
            <div
                v-for="(c, i) in chat.contents"
                :key="chatViewerIndex + '-' + chatIndex + '-' + i"
                v-html="formatText(c)"
                class="chat-texts"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        chat: {
            type: Object,
            required: true,
        },
        chatViewerIndex: {
            type: Number,
            required: true,
        },
        chatIndex: {
            type: Number,
            required: true,
        },
    },
    methods: {
        formatText(text) {
            return text.replace(
                /\*\((.*?)\)\*/g,
                '<a style="font-size: 0.7rem; color: #555;">($1)</a>'
            );
        },
    },
};
</script>

<style scoped>
.chat-section {
    width: 100%;
    height: fit-content;
    padding: 0.5rem 0;
    font-family: 'Pretendard';
    display: flex;
}

.chat-section.alley {
    flex-direction: row-reverse;
}

.chat-narration {
    text-align: center;
    font-size: 0.7rem;
    font-weight: 300;
    width: fit-content;
    padding: 8px 15px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 1rem auto 0 auto;
    border-radius: 8px;
    color: #fff;
    word-break: keep-all;
}

.chat-profile-img {
    font-size: 0.7rem;
    font-weight: 500;
    width: 35px;
    height: 35px;
    align-content: center;
    align-items: center;
    text-align: center;
    word-break: break-all;
    display: none;
}

.martin .chat-profile-img {
    background-color: #f3cb53;
}

.alley .chat-profile-img {
    background-color: #ff968f;
}

.chat-profile-name {
    font-size: 0.8rem;
    font-weight: 500;
    width: 100%;
}

.alley .chat-profile-name {
    text-align: right;
}

.chat-contents {
    word-break: keep-all;
    width: fit-content;
    max-width: 70%;
    min-width: 3rem;
    margin: 0 0.5rem;
}

.chat-texts {
    background-color: #f3fded;
    margin-top: 0.3rem;
    padding: 0.3rem 0.4rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
}

.alley .chat-texts {
    background-color: #ffd7d0;
    /* border: 1.5px solid #ff968f ; */
}

.martin .chat-texts {
    background-color: #fde6cc;
    /* border: 1.5px solid #f3cb53 ; */
}
</style>
