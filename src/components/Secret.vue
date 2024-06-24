<template>
    <div class="bg-popup">
        <div class="bg-letter">
            <div class="heart-secton" @click="closeLetter">
                <div class="heart"  />
            </div>

            <div class="letter" @scroll="handleScroll">
                <p>
                    안녕, 안녕! 자기가 이 편지를 읽고 있다는 건, 내가 이 웹의
                    개발을 완료하고 당신한테 전달했단 뜻이겠네요!
                </p>
                <p>
                    이 웹사이트는... 안에 삽입된 그림들 빼고<a class="note"
                        >-사실 그림들 마저도 대부분이 값을 지불한
                        커미션들이지만-</a
                    >
                    모든 것이 내 손으로 디자인되고 개발되었어요. 봤을지
                    모르겠지만, 아카이브 페이지의 우리 대화 내역까지 내가 손수
                    다 타이핑했죠.
                </p>
                <p>
                    <img src="@/assets/imgs/letter/letter1.png" />
                    <a class="note"
                        >잘 보이려나. 파이썬으로 대충 계산해봤더니, 대화 세트 총
                        38개, 대화 로그(채팅 개수) 총 283개, 글자 수 총 17982자!
                        라네요.</a
                    >
                </p>
                <p>
                    짠, 나 엄청 힘들었다구요. 이 작업 덕분에 개발이 나흘은 더
                    미뤄진 거 같아요.
                </p>
                <p>
                    사실 언젠가 한 번은 꼭 이렇게 웹사이트를 만들어서 보여주고
                    싶었어요. 그런데 이때까진 회사 때문에 영 짬도 체력도 안
                    되다가, 퇴사하고 나니 슬슬 코딩이 하고싶어서 근질근질한 거
                    있죠. <a class="note">(세상에나!)</a> 그래서 오랜만에 머리도
                    풀 겸 이렇게 웹을 만들고... 배포도 처음 해보고... 응,
                    해봤답니다!
                </p>
                <p>
                    어디 보자, 만드는 기간이 총... 열흘 정도 걸린 거 같은데, 이
                    열흘 동안 되게 즐거웠어요. 소개 페이지의 우리 이름을 적을
                    폰트를 고르는 것도, 들어오자마자 보이는 인트로 페이지의
                    디자인을 고민하는 것도, 이렇게 당신한테만 보여줄 편지를 숨길
                    공간을 생각하는 것도, 하다 못해 복잡한 코드 구조를 어떻게
                    다듬을지 생각하는 것조차도! 이 사이트를 보고 놀라면서 좋아할
                    당신을 생각하니까 정말 즐겁지 않은 작업이 없었어요.
                    <a class="note" style="text-decoration: line-through"
                        >사실, 대화 내역을 손으로 옮기는 작업은 좀... 아니 많이
                        덜 즐겁긴 했어요...</a
                    >
                </p>
                <p>
                    말이 나와서 말인데, 시간이 되면... 여길 본 소감... 이라고
                    해야 할지. 보고 나서 어땠는지 알고 싶어요. 솔직히 아마추어가
                    만든, 몇 페이지 안 되는 사이트긴 하지만... 그래도, 그래도!
                    프로그래밍이라는 전공을 살리고 싶어서, 또 그... 애정을 좀 더
                    담고 싶어서! 쉽게 웹 만들어주는<a class="note"
                        >(유명한 게 뭐가 있지, wix나 modoo 같은 거?)</a
                    >
                    도구는 버리고 오로지 내 힘으로 시행착오를 거쳐가며 만든
                    거거든요. 그래서 더욱이, 당신이 어떤 반응을 보일지 궁금해요.
                    이왕이면 마구 칭찬해줘요!
                </p>
                <p>
                    어제도, 오늘도, 내일도, 모레도! 많이 사랑해요🩷 이 편지지는 맨 위의 하트를 누르면 닫을 수 있으니까, 이제 편지지 닫고 다른 페이지들 감상해줘요!
                </p>
                <p class="note">p.s. 한 달 쯤 뒤에, archive 페이지를 살짝 업데이트 할 거예요! 하고 나서 알려줄 테니 기다려줘요!</p>
                <p class="letter-sign">From. your PINK</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
        closeLetter() {
            this.$store.state.showSecretPopup = false;
        },
    },
};
</script>

<style scoped>
@import url("@/assets/styles/Secret.css");
</style>
