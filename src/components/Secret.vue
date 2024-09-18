<template>
  <div class="bg-popup">
    <div class="bg-letter">
      <div class="heart-secton" @click="closeLetter">
        <div>
          <unicon
            name="envelope-heart"
            fill="rgb(71, 45, 45)"
            width="60"
            height="60"
          />
        </div>
      </div>

      <div class="letter" @scroll="handleScroll">
        <p>
          안녕, 내 사랑! 사흘 전인가, 샤워하다 문득 이 사이트를 리디자인 하고
          싶단 생각이 드는 거예요. 뭔가... 이전 페이지는 너무 밋밋하단 생각이
          들었거든요.
        </p>
        <p>
          사실 내가 잘하고 좋아하는 건 "있는 요소를 배치해서 꾸미는" 류의, 편집
          디자인이라... 이렇게 처음부터 창작하는 건 영 소질이 없단 말이죠.
          그래서 어디 웹 디자인 잘 하는 사람한테 돈을 주고 디자인만 맡길까
          싶다가도... 왠지, 왠지 이 사이트만큼은 A to Z 전부 내가 해야만 할 것
          같은 책임감도 생겨버린 데다, 솔직히... 누구한테 맡겨서 얼마를
          줘야할지도 모르구요🫠
        </p>
        <p>
          결국 큰 변화는 못 준 채로... 컨셉만 약간 바꾼 게 된 것 같지만. 뭐,
          일단 여기서 만족하기로 했어요. 좀 더 세련된 느낌을 주고는 싶었는데...
          아, 역시 좀 아쉽죠? 이상하지, 볼 수록 정이 들어야 하는데 볼수록 아쉽단
          말이에요.
        </p>
        <p>
          으으음, 뭐, 여하튼! 이번 디자인의 컨셉은, 보다시피 리버포드의 신문
          1면에 실린 우리예요! 당신이랑 연애한다고 하면 1면에 실릴 만하지, 그럼.
          그으으리고 약간의 앤티크함이려나. (사실 원래 앤티크가 주 컨셉이었는데,
          내 실력으론 도저히 살리기 힘들어서...)
        </p>
        <p>
          언젠가 기회가 되면, 우리를 컨셉으로 한 노래를 만들어서 이 페이지에
          넣고 싶어요. 플레이어 디자인 구상도 해놨는데. 오른쪽 위 상단에 축음기
          이미지를 넣고, 재생 버튼을 클릭하면 레코드만 빙글빙글 돌도록... 으음,
          내가 음악에 조금이라도 조예가 있었다면 좋았을 텐데 말이에요. 누구한테
          작곡을 부탁하려 해도 내가 음악에 영 관심이 없으니...
        </p>
        <p>
          아, 이번에 리디자인하는 김에, 개발 과정을(빙자한 울부짖음 내역) 외부
          링크로 추가했어요. 별 거 없는 내용에, 그저 반복해서 이거 왜 안돼! 아니
          이거 어떻게 하는데! 의 연속이긴 하지만, 내가 이런 역경을 이겨내고 이런
          걸 만들었구나! 하는 그런 느낌으로... 심심풀이로 한번 쯤 봐주면 기쁠 거
          같아요😉
        </p>
        <p>
          ... 지금 새벽 세 시를 넘겨서 그런가, 점점 언어능력이 퇴화하는 게...
          느껴지네요. 이 편지의 모든 문단이 두서없이 그저 의식의 흐름대로
          이어지고 있단 게 느껴져요... 뭐, 평소에도 이런 식으로 편지 썼던 거
          같지만. 더 헛소리 하기 전에 자러 가야겠다.
        </p>
        <p>
          어제도, 오늘도, 내일도 항상 사랑해요. 이 넓디 넓은 웹의 세계에 당신과
          내 흔적을 영원히 남겨두고 싶을 만큼 말이에요. (물론, 검색
          비허용이지만...)
        </p>
        <p class="note">P.S. 이번에도, 맨 위의 러브레터를 누르면 편지지를 닫을 수 있어요!</p>
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
