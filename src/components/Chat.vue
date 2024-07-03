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
        <div class="chat-profile-img">
            <img :src="getChatProfileImg('martin', chat.face)" />
            <!-- {{ chat.face }} -->
        </div>

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
        <div class="chat-profile-img">
            <img :src="getChatProfileImg('alley', chat.face)" />
            <!-- {{ chat.face }} -->
        </div>

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
        getChatProfileImg(target, face) {
            return require(`@/assets/imgs/chat/${target}/${face}.png`);
        },
    },
};
</script>

<style scoped>
@import url('@/assets/styles/Chat.css');
</style>
