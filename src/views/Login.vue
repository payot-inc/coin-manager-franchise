<template>
    <div class="login">
        <div class="login_head">
            <div class="logo">
                <img src="@/assets/image/logo_b.png">
                <span class="middle">무인장비 매출관리시스템 (본사용)</span>
            </div>
        </div>
        <div class="container">
            <div class="login_title">
                <h3>로그인</h3>
                <p>로그인을 하셔야 서비스를 이용하실 수 있습니다</p>
            </div>
            <div class="login_box">
                <ul>
                    <li>
                        <sui-input
                            v-validate="{ required: true, email: true }"
                            data-vv-as="email"
                            name="email"
                            icon="user"
                            iconPosition="left"
                            class="fluid"
                            v-model="email"
                            placeholder="이메일"
                            :error="errors.has('email')">
                        </sui-input>
                    </li>
                    <li>
                        <sui-input
                            v-validate="{ required: true, min: 4 }"
                            name="password"
                            data-vv-as="password"
                            class="fluid"
                            icon="key"
                            iconPosition="left"
                            type="password"
                            :error="errors.has('password')"
                            v-model="password"
                            placeholder="비밀번호"/>
                    </li>
                    <li>
                        <sui-button
                            fluid
                            size="large"
                            class="violet"
                            @click="login">
                            로그인
                        </sui-button>
                    </li>
                    <li>
                        <sui-button
                            fluid
                            inverted
                            class="violet"
                            @click="payotRedirect">
                            PAYOT 홈페이지 열기
                        </sui-button>
                    </li>
                </ul>
                <p>주식회사 페이오티</p>
            </div>
        </div>

        <sui-modal
            size="mini"
            v-model="modal.visible">
            <sui-modal-header>
                로그인 오류
            </sui-modal-header>
            <sui-modal-content>
                {{ modal.error }}
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button
                    class="positive"
                    @click="modal.visible = !modal.visible">
                    닫기
                </sui-button>
            </sui-modal-actions>
        </sui-modal>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      modal: {
        visible: false,
        error: '알 수 없는 오류가 발생했당',
      },
    };
  },
  methods: {
    login() {
      this.$validator.validateAll();
      if (this.errors.any()) {
        this.modal.error = '이메일과 비밀번호를 확인해주세요';
        this.modal.visible = true;

        return;
      }

      // DummyLogin
      this.$store.commit('setFranchise', { id: 1, name: '더런드리', email: 'the-laundry@test.com' });

      const self = this;
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          self.$router.push('/franchise');
        })
        .catch((error) => {
          console.log(error);
          self.$router.push('/franchise');
        });
    },
    payotRedirect() {
      window.open('http://payot-inc.com/', '_blank');
    },
  },
};
</script>


<style scoped>
.error {
  color: red;
  margin: 0 auto;
}
</style>

