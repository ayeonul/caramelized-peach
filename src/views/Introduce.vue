<template>
    <div>
        <!-- <div class="intro-section" style="font-family:'RadiantlySignature'">Martin Chalfie</div>
        <div class="intro-section" style="font-family:'garam lotus'; font-weight: bold">Alley Kim</div> -->

        <div class="profile">
            <div class="profile-pic">
                <img src="@/assets/imgs/introduce/prof-martin.png" />
                <div class="profile-pic-caption">cm.@commi_59</div>
            </div>
            <div class="profile-text" style="padding-left: 30px">
                <div class="name-section">
                    <span
                        class="eng-name"
                        style="
                            font-family: 'RadiantlySignature';
                            font-size: 1.5rem;
                            font-weight: bold;
                            color: #ffc000;
                        "
                        >Martin Chalfie</span
                    >
                    <span class="kor-name" style="padding: 1rem 0.7rem"
                        >마틴 챌피</span
                    >
                </div>
                <div class="bio" style="margin-top: -0.5rem">
                    25세, 남성, 능력자(마인드 리더), 영국 출생, 숭고한 길 재단
                    후원자
                </div>
                <div class="desc">
                    겉으론 다정하고 누구에게나 인기 좋은 사람이지만, 사실은
                    재단이 위험에 처하자 은인과의 약속을 깨고 능력을 사용하거나,
                    남몰래 위법적인 행동을 하는 등 재단을 위해서라면 설령 옳지
                    않은 일이라 해도 '어쩔 수 없다'는 명목 하에 무엇이든 하는
                    사람. <br />
                    원치 않을 때에도 들려오는 사람들의 속마음에 지칠 대로 지쳐
                    연애는 커녕 친구조차 만들기 꺼려지는 와중, 자신을 마주칠
                    때마다 머릿속이 온통
                    <a style="color: #ff968f">'엄청 좋아해!'</a>로 가득차는
                    사람을 만나게 된다.
                    <a style="color: #ff968f">이 사람</a>이라면 자신도 '평범한
                    관계'를 이룰 수 있을지도?
                </div>
            </div>
        </div>
        <div class="profile">
            <div
                class="profile-text"
                style="align-items: flex-end; padding-right: 30px"
            >
                <div class="name-section">
                    <span class="kor-name" style="padding: 0.7rem">앨리</span>
                    <span
                        class="eng-name"
                        style="
                            font-size: 3rem;
                            font-family: 'garam lotus';
                            font-weight: bold;
                            color: #ff968f;
                            padding: 0.7rem 0;
                        "
                        >Alley Kim</span
                    >
                </div>
                <div class="bio">
                    24세, 여성, 비능력자, 한국 출생, 컴퓨터 프로그래머
                </div>
                <div class="desc" style="text-align: right">
                    평범한 인생, 반복되는 무료한 날들. 이를 타파해보고자 훌쩍
                    떠나간 영국에서, 어떤 남성을 마주하고 첫눈에 반하게 된다.
                    게다가 어찌저찌 알게 된 정보로는, 자기가 속한 재단을 위해
                    남몰래 위험한 짓까지 한다는 소문이.<br />
                    <a style="color: #ffc000">이 사람</a>이라면 자신의 인생이 좀
                    더 특별하게 바뀔 수도 있을지도? 그리고 결심하게 된다.
                    <a style="color: #ffc000">이 사람</a>에게 도움이 될 수만
                    있다면, 무엇이든 하겠노라고.
                </div>
            </div>
            <div class="profile-pic">
                <img src="@/assets/imgs/introduce/prof-alley.png" />
                <div class="profile-pic-caption">cm.@commi_59</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    font-family: 'Pretendard';
}
.profile-pic {
    display: flex;
    flex-direction: column;
}
.profile-pic img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
}
.profile-pic-caption {
    font-size: 0.8rem;
    text-align: center;
    color: #666;
    padding-top: 0.5rem;
}

.profile-text {
    display: flex;
    flex-direction: column;
    width: calc(100% - 230px);
}
.name-section {
    display: flex;
    height: fit-content;
    align-items: flex-end;
}
.eng-name {
    height: fit-content;
}
.kor-name {
    height: fit-content;
    font-weight: 600;
}

.bio {
    padding-bottom: 0.5rem;
    font-weight: 500;
}

.desc {
    font-size: 0.9rem;
    width: calc(100% - 30px);
    word-break: keep-all;
    line-height: 1.2rem;
}
</style>
