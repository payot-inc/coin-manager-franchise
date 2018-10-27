<template>
    <div class="admin_page">
        <div class="page_title">
            <h2>업체관리</h2>
            <h3>업체목록</h3>
        </div>

        <section class="section">
            <div class="data_box shop_search">
                <h5><i class="ui caret square right icon"></i>업체검색</h5>
                <div class="search_box">
                    <sui-input
                        class="prompt"
                        placeholder="검색"
                        icon="search"
                        :loading="search.loading"
                        v-model="search.query" />
                </div>
            </div>

            <div class="data_box shop_list">
                <h5><i class="ui caret square right icon"></i>업체목록</h5>
                <div class="shop_list_table">
                    <table>
                        <thead>
                            <tr>
                                <th class="and">
                                    <div class="ui fitted checkbox">
                                        <input type="checkbox" name="example">
                                        <label></label>
                                    </div>
                                </th>
                                <th class="number">NO</th>
                                <th class="shop">업체명</th>
                                <th class="name">업체대표명</th>
                                <th class="open">오픈날짜</th>
                                <th class="tel">연락처</th>
                                <th class="address">주소</th>
                                <th class="btns">관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(c, index) in companys" :key="index">
                                <td class="and">
                                    <sui-checkbox></sui-checkbox>
                                </td>
                                <td class="number">{{ c.owner ? c.owner.age : '?' }}</td>
                                <td class="shop">{{ c.name }}</td>
                                <td class="name">{{ c.owner ? c.owner.name : '?' }}</td>
                                <td class="open">{{ c.openDate }}</td>
                                <td class="tel">{{ c.tel }}</td>
                                <td class="address">{{ c.address }}</td>
                                <td class="btns">
                                    <sui-button @click="showDetailCompanyModal({})" animated="vertical">
                                        <sui-button-content hidden>상세</sui-button-content>
                                        <sui-button-content visible>
                                            <sui-icon name="clipboard outline" />
                                        </sui-button-content>
                                    </sui-button>
                                    <sui-button animated="vertical">
                                        <sui-button-content hidden>삭제</sui-button-content>
                                        <sui-button-content visible>
                                            <sui-icon name="delete" />
                                        </sui-button-content>
                                    </sui-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="shop_list_btns">
                    <div class="ui mini left floated pagination menu">
                        <a class="icon item">
                            <i class="left chevron icon"></i>
                        </a>
                        <a class="item">1</a>
                        <a class="item">2</a>
                        <a class="item">3</a>
                        <a class="icon item">
                            <i class="right chevron icon"></i>
                        </a>
                    </div>

                    <sui-button
                        class="right floated black small"
                        @click="modal.sms = true">
                        전체매장 문자발송
                    </sui-button>
                    <sui-button
                        class="right floated violet small"
                        @click="modal.sms = true">
                        선택한 매장 문자발송
                    </sui-button>
                </div>

                <sui-modal
                    class="modal_shop_info"
                    :closable="false"
                    v-if="modal.company"
                    v-model="modal.detail">

                    <sui-modal-header>
                        <div class="left">업체정보</div>
                        <div class="right">
                            <div class="actions">
                                <sui-button v-on:click="modal.detail = false" class="right floated approve">닫기</sui-button>
                                <sui-button class="right floated primary approve">수정</sui-button>
                            </div>
                        </div>
                    </sui-modal-header>

                    <div class="scrolling content">
                        <sui-tab>
                            <sui-tab-pane title="기본정보">
                                <section>
                                    <h5><i class="ui caret square right icon"></i>업체 기본정보</h5>
                                    <div class="ui three column doubling stackable grid">
                                        <div class="column">
                                            <dl>
                                                <dt>업체명</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.company.name"
                                                    v-model="modal.update.company.name"></sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>사업자번호</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.company.number"
                                                    v-model="modal.update.company.name"></sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>대표자</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.owner.name"
                                                    v-model="modal.update.owner.name"></sui-input>
                                            </dl>
                                        </div>
                                        <div class="three wide column">
                                            <dl>
                                                <dt>성별</dt>
                                                <dd class="ui fluid input">
                                                    <input type="text" placeholder="남자">
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="thirteen wide column">
                                            <dl>
                                                <dt>주소</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.company.address"
                                                    v-model="modal.update.company.address">
                                                </sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>E-mail</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.company.email"
                                                    v-model="modal.update.company.email">
                                                </sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>H.P</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.owner.phone"
                                                    v-model="modal.update.owner.phone">
                                                </sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>전화번호</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.owner.tel"
                                                    v-model="modal.update.owner.tel">
                                                </sui-input>
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h5><i class="ui caret square right icon"></i>업체 상세정보</h5>
                                    <div class="ui three column doubling stackable grid">
                                        <!-- <div class="column">
                                            <dl>
                                                <dt>가맹점</dt>
                                                <dd class="ui fluid input">
                                                    <input type="text" placeholder="그린라이트 금정점">
                                                </dd>
                                            </dl>
                                        </div> -->
                                        <div class="column">
                                            <dl>
                                                <dt>면적</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.company.size"
                                                    v-model.number="modal.update.company.size">
                                                </sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>층 수</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.company.floor"
                                                    v-model.number="modal.update.company.floor">
                                                </sui-input>
                                            </dl>
                                        </div>

                                    </div>
                                </section>
                                <section>
                                    <h5><i class="ui caret square right icon"></i>업체 투자정보</h5>
                                    <div class="ui three column doubling stackable grid">
                                        <div class="column">
                                            <dl>
                                                <dt>권리금</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.owner.premium"
                                                    v-model.number="modal.update.owner.premium">
                                                </sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>보증금</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.owner.deposit"
                                                    v-model.number="modal.update.owner.deposit">
                                                </sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>장비투자금</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.owner.machinePrice"
                                                    v-model.number="modal.update.owner.machinePrice">
                                                </sui-input>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>시설 및 기타비용</dt>
                                                <sui-input
                                                    fluid
                                                    :placeholder="selected.owner.etc"
                                                    v-model.number="modal.update.owner.etc">
                                                </sui-input>
                                            </dl>
                                        </div>

                                    </div>
                                </section>
                            </sui-tab-pane>
                            <sui-tab-pane title="장비정보">
                                <section class="eq_sign_up">
                                    <div class="ui form">
                                        <h5><i class="ui caret square right icon"></i>장비등록</h5>
                                        <div class="field">
                                            <div class="three fields">
                                                <div class="field">
                                                    <sui-dropdown
                                                        selection
                                                        fluid
                                                        placeholder="장비 제조사"
                                                        v-model="selected.machine.brand"
                                                        :options="dropdown.brand">
                                                    </sui-dropdown>
                                                </div>
                                                <div class="field">
                                                    <sui-dropdown
                                                        selection
                                                        fluid
                                                        placeholder="장비 종류"
                                                        v-model="selected.machine.type"
                                                        :options="dropdown.machineType">
                                                    </sui-dropdown>
                                                </div>
                                                <div class="field">
                                                    <div class="ui right labeled input">
                                                        <input
                                                            placeholder="용량"
                                                            v-model.number="selected.machine.size">
                                                        <div class="ui basic label">
                                                            kg
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="three fields">
                                                <div class="field">
                                                    <sui-input
                                                        type="date"
                                                        placeholder="도입시기"
                                                        v-model="selected.machine.installAt">
                                                    </sui-input>
                                                </div>
                                                <div class="field">
                                                    <div class="ui right labeled input">
                                                        <input
                                                            placeholder="장비도입가격"
                                                            v-model.number="selected.machine.price">
                                                        <div class="ui basic label">
                                                            원
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="field">
                                                    <sui-input
                                                        placeholder="MAC 주소"
                                                        v-model="selected.machine.mac">
                                                    </sui-input>
                                                </div>
                                            </div>
                                        </div> <!-- ui form -->

                                        <sui-button
                                            class="right floated primary"
                                            @click="1">
                                            장비등록
                                        </sui-button>
                                    </div> <!-- ui form -->
                                </section><!-- eq_sign_up -->
                                <section class="eq_list">
                                    <h5><i class="ui caret square right icon"></i>장비리스트</h5>
                                    <div class="eq_list_table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th class="and">
                                                        <div class="ui fitted checkbox">
                                                            <input type="checkbox" name="example">
                                                            <label></label>
                                                        </div>
                                                    </th>
                                                    <th>MAC</th>
                                                    <th>이름</th>
                                                    <th>브랜드</th>
                                                    <th>종류</th>
                                                    <th>용량</th>
                                                    <th>도입시기</th>
                                                    <th>장비도입가격</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(m, index) in selected.machines" :key="index">
                                                    <td class="and">
                                                        <sui-checkbox
                                                            :value="index"
                                                            :options="selected.checked.machines">
                                                        </sui-checkbox>
                                                    </td>
                                                    <td>{{ m.mac }}</td>
                                                    <td>{{ m.name }}</td>
                                                    <td>{{ m.brand }}</td>
                                                    <td>{{ m.type }}</td>
                                                    <td>{{ m.size }}</td>
                                                    <td>{{ m.installAt }}</td>
                                                    <td>{{ m.price ? m.price.toLocaleString() : 0 }}원</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- eq_list_table -->

                                    <div class="eq_list_btns">
                                        <sui-button
                                            size="mini"
                                            class="right floated black">
                                            선택한 장비 삭제하기
                                        </sui-button>
                                    </div>
                                </section>
                            </sui-tab-pane>
                            <sui-tab-pane title="매출통계">
                                <section class="section">
                                    <h5><i class="ui caret square right icon"></i>매출통계</h5>

                                    <div class="avg_date_cell">
                                        <div class="ui form">
                                            <div class="three fields">
                                                <div class="field">
                                                    <sui-input
                                                        type="date"
                                                        placeholder="시작일">
                                                    </sui-input>
                                                </div>
                                                <div class="field">
                                                    <sui-input
                                                        type="date"
                                                        placeholder="종료일">
                                                    </sui-input>
                                                </div>
                                            </div>
                                        </div> <!-- ui form -->
                                    </div> <!-- avg_date_cell -->

                                    <div class="avg_grap">
                                        그래프자리
                                    </div>

                                </section>

                                <section class="section all_sales">
                                    <div class="ui three column doubling stackable grid">
                                        <div class="fluid column">
                                            <dl>
                                                <dt>
                                                    <div class="ui red pointing below label">
                                                        지난 1개월 총 매출
                                                    </div>
                                                </dt>
                                                <dd>{{ modal.calc.total ? modal.calc.total.toLocaleString() : 0 }}원</dd>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>
                                                    <div class="ui blue pointing below label">
                                                        지난 1개월 총 순수익
                                                    </div>
                                                </dt>
                                                <dd>{{ modal.calc.real ? modal.calc.real.toLocaleString() : 0 }}원</dd>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>
                                                    <div class="ui green pointing below label">
                                                        평균 수익률
                                                    </div>
                                                </dt>
                                                <dd>{{ modal.calc.rate ? modal.calc.rate.toLocaleString() : 0 }}%</dd>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>
                                                    <div class="ui purple pointing below label">
                                                        설정기간 평균매출
                                                    </div>
                                                </dt>
                                                <dd>{{ modal.calc.average ? modal.calc.average.toLocaleString() : 0 }}원</dd>
                                            </dl>
                                        </div>
                                        <div class="column">
                                            <dl>
                                                <dt>
                                                    <div class="ui teal pointing below label">
                                                        설정기간 평균순이익
                                                    </div>
                                                </dt>
                                                <dd class="ui">{{ modal.calc.realAverage ? modal.calc.realAverage.toLocaleString() : 0 }}원</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                            </sui-tab-pane>
                        </sui-tab>
                    </div>
                </sui-modal>

                <sui-modal
                    class="sms_modal"
                    v-model="modal.sms">
                    <sui-modal-header>SMS 보내기</sui-modal-header>
                    <sui-modal-content>
                        <div class="ui form">
                            <div class="ui bottom pointing fluid label" style="text-align:center;">
                                <label>12개 업체가 선택되었습니다<label>
                                    </label></label></div>
                            <div class="field">
                                <label>보내는내용</label>
                                <div class="ui textarea">
                                    <textarea placeholder="최대 80자까지 가능"></textarea>
                                </div>
                            </div>
                            <div class="field">
                                <sui-button
                                    fluid
                                    class="violet">
                                    메시지 보내기
                                </sui-button>
                            </div>
                        </div> <!-- ui form -->
                    </sui-modal-content>
                </sui-modal>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        select: 0,
        total: 1,
      },
      search: {
        query: '',
        loading: false,
      },
      companys: [],
      modal: {
        company: null,
        detail: false,
        sms: false,
        update: {
          company: {},
          owner: {},
          machine: [],
        },
        calc: {
          total: 0,
          real: 0,
          rate: 0.0,
          average: 0,
          realAverage: 0,
        },
      },
      // 상세 모달에서의 정보
      selected: {
        company: {},
        owner: {},
        machines: [],
        machine: {},
        checked: {
          all: false,
          machines: [],
        },
      },
      dropdown: {
        gender: [{ text: '남자', value: '남' }, { text: '여자', value: '여' }],
        machineType: [
          { text: '세탁기', value: '세탁기' },
          { text: '건조기', value: '건조기' },
          { text: '기타', value: '기타' },
        ],
        brand: [
          { text: '언라이언스', value: '언라이언스' },
          { text: '언라이언스', value: '언라이언스' },
        ],
      },
    };
  },
  mounted() {
    this.companys = this.$store.companys;
  },
  watch: {
    'search.query': function (newValue) {
      this.search.loading = true;
      this.searchTyping();
    },
    'modal.detail': function (newValue) {
      if (!newValue) this.updateCompany = {};
    },
  },
  methods: {
    searchTyping: _.debounce(function () {
      this.companys = this.$store.getters.getCompanys(this.search.query);
      this.search.loading = false;
    }, 500),

    showDetailCompanyModal(company) {
      this.modal.company = company;
      this.modal.detail = true;
    },
  },
};
</script>

<style>
</style>
