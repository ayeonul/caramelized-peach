<template>
    <div class="bg-popup">
        <div class="pw-popup-container">
            <div class="popup-content">
                <div class="popup-close-icon" @click="closePopup">
                    <unicon name="times" :fill="'#ff968f'" />
                </div>
                <div class="popup-text">Password:</div>
                <input
                    type="password"
                    name="popup-pw"
                    v-model="inputPw"
                    autocomplete="off"
                    @keydown.enter.prevent="checkPw"
                />
                <div class="btn-enter" @click="checkPw">enter</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputPw: '',
            answer: '495448514849',
        };
    },
    methods: {
        closePopup() {
            this.$store.state.showPwPopup = false;
        },
        stringToAscii(str) {
            return str
                .split('')
                .map((char) => char.charCodeAt(0))
                .join('');
        },
        checkPw() {
            if (this.stringToAscii(this.inputPw) !== this.answer) {
                this.inputPw = '';
            } else {
                this.$store.state.showSecretPopup = true;
                this.closePopup();
            }
        },
    },
};
</script>

<style scoped>
.pw-popup-container {
    margin: 0 auto;
    width: fit-content;
    height: fit-content;
    padding: 0.2rem 1rem 1rem 1rem;
    background-color: #fff;
    border: 1px solid #000;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;
    font-family: 'pretendard';
}
.popup-close-icon {
    width: fit-content;
    cursor: pointer;
    margin: 0 -0.8rem 0 auto;
}
.popup-content {
    width: 100%;
    height: fit-content;
}

.popup-content input {
    border: none;
    border-bottom: 1px solid #ff968f;
    outline: none;
    position: relative;
    background: none;
    text-align: center;
    width: 80%;
    padding-top: 1rem;
}

.btn-enter{
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    cursor: pointer;
    padding: 2px 5px;
    background-color: #ff968f;
    margin-top: .5rem;
    color: #fff;
    font-size: .8rem;
}
</style>
