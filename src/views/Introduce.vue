<template>
  <div>
    <Secret v-if="showSecretPopup" />
    <PWPopup v-if="showPwPopup" />

    <div class="subtitle-section">
      [단독] 숭고한 길 재단 마틴 챌피, 열애 인정 "연애 {{ getDateDiff() }}일
      째... 상대는 비능력자 여성"
    </div>

    <div class="profile">
      <div class="profile-pic" @click="checkClickPic">
        <img
          src="@/assets/imgs/introduce/prof-martin.png"
          style="box-shadow: -7px -5px 3px rgba(71, 45, 45, 0.4)"
        />
        <div class="profile-pic-caption">cm.@commi_59</div>
      </div>
      <div class="profile-text martin">
        <div class="name-section">
          <span class="eng-name martin">Martin Chalfie</span>
          <span class="kor-name" style="padding: 1rem 0.7rem">마틴 챌피</span>
        </div>
        <div class="bio martin">
          25세, 남성, 능력자(마인드 리더), 영국 출생, 숭고한 길 재단 후원자
        </div>
        <div class="desc">
          겉으론 다정하고 누구에게나 인기 많은 사람이지만, 사실은 재단이 위험에
          처하자 은인과의 약속을 깨고 능력을 사용하거나, 남몰래 위법적인 행동을
          하는 등 재단을 위해서라면 설령 옳지 않은 일이라 해도 '어쩔 수 없다'는
          명목 하에 무엇이든 하는 사람. <br />
          원치 않을 때에도 들려오는 사람들의 속마음에 지칠 대로 지쳐 연애는 커녕
          친구조차 만들기 꺼려지는 와중, 자신을 마주칠 때마다 머릿속이 온통
          <a class="highlight-text pink">"엄청 좋아해!"로 가득차는 사람</a>을
          만나게 된다. <a class="highlight-text pink">이 사람</a>이라면 자신도
          '평범한 관계'를 이룰 수 있을지도?
        </div>
      </div>
    </div>
    <div class="profile alley">
      <div class="profile-text alley">
        <div class="name-section alley">
          <span class="kor-name" style="padding: 0.7rem">앨리</span>
          <span class="eng-name alley">Alley Kim</span>
        </div>
        <div class="bio">
          2<span class="mosaic"> </span>세, 여성, 비능력자, 한국 출생, 컴퓨터
          프로그래머
        </div>
        <div class="desc alley">
          평범한 인생, 반복되는 무료한 날들. 어쩌다 가진 직업마저 변수를
          입력하면 '결과가 정해져있는' 프로그래머인, 지극히 평범한 사람.<br />
          이런 무료함을 타파해보고자 훌쩍 떠나간 영국에서
          <a class="highlight-text yellow">어떤 남성</a>을 마주하고 첫눈에
          반하게 된다. 게다가 어찌저찌 알게 된 정보로는, 자기가 속한 재단을 위해
          남몰래 위험한 짓까지 한다는 소문이.<br />
          <a class="highlight-text yellow">이 사람</a>이라면 자신의 인생을 좀
          특별하게 바꿀 수 있을지도?
        </div>
      </div>
      <div class="profile-pic">
        <img
          src="@/assets/imgs/introduce/prof-alley.png"
          style="box-shadow: 7px 5px 3px rgba(71, 45, 45, 0.4)"
        />
        <div class="profile-pic-caption">cm.@commi_59</div>
      </div>
    </div>
  </div>
</template>

<script>
import PWPopup from "@/components/PWPopup.vue";
import Secret from "@/components/Secret.vue";
import { mapState } from "vuex";

export default {
  components: {
    PWPopup,
    Secret,
  },
  computed: {
    ...mapState(["showPwPopup", "showSecretPopup"]),
  },
  data() {
    return {
      click: 1,
    };
  },
  methods: {
    checkClickPic() {
      if (this.click > 4) {
        this.$store.state.showPwPopup = true;
        this.click = 1;
      } else {
        this.click += 1;
      }
    },
    getDateDiff() {
      const today = new Date();

      const kstOffset = 9 * 60 * 60 * 1000;
      const kstToday = new Date(today.getTime() + kstOffset);
      const targetDate = new Date("2015-01-24T00:00:00+09:00");
      const diffInMs = kstToday - targetDate;
      // 밀리초를 일수로 변환 (하루는 86,400,000 밀리초)
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      return diffInDays;
    },
  },
};
</script>

<style scoped>
@import url("@/assets/styles/Introduce.css");
</style>
