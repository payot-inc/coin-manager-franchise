<template>
    <div class="admin_page">
        <div class="page_title">
            <h2>업체관리</h2>
            <h3>기간별 매출현황</h3>
        </div>

        <h4>상세검색</h4>
        <section class="shop_search" style="margin-bottom:30px;">
            <table class="ui table">
                <tr>
                    <td>기간선택</td>
                    <td>
                        <p><label class="ui bottom pointing label">※ 3개월 내에 매출정보를 조회할 수 있습니다</label></p>
                        <div class="ui calendar" style="display:inline-block">
                            <div class="ui input left icon">
                                <i class="calendar icon"></i>
                                <input type="text" placeholder="Date/Time">
                            </div>
                        </div>
                        <div class="ui calendar" style="display:inline-block">
                            <div class="ui input left icon">
                                <i class="calendar icon"></i>
                                <input type="text" placeholder="Date/Time">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>지점선택</td>
                    <td>
                        <select class="ui dropdown">
                            <option>지역</option>
                        </select>
                        <select class="ui dropdown">
                            <option>시·도</option>
                        </select>
                        <select class="ui dropdown">
                            <option>구</option>
                        </select>
                        <select class="ui dropdown">
                            <option>동</option>
                        </select>
                        <select class="ui dropdown">
                            <option>지점</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>장비선택</td>
                    <td>
                        <sui-dropdown
                            selection
                            :options="dropdown.machineType">
                        </sui-dropdown>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="ui center aligned">
                        <button class="ui violet button">검색하기</button>
                    </td>
                </tr>
            </table>
        </section>

        <h4>매출통계</h4>
        <section class="section_box sales_info">
            <div class="header">※ 검색기간: 2018.07.08~2018.09.21</div>
            <div class="ui segment">그래프자리</div>
            <div class="ui five column doubling stackable grid">
                <div class="ui center aligned column">
                    <dl>
                        <dt class="ui bottom pointing blue label">총 매출</dt>
                        <dd>
                            16,800,000원
                        </dd>
                    </dl>
                </div>
                <div class="ui center aligned column">
                    <dl>
                        <dt class="ui bottom pointing teal label">총 순수익</dt>
                        <dd>
                            16,800,000원
                        </dd>
                    </dl>
                </div>
                <div class="ui center aligned column">
                    <dl>
                        <dt class="ui bottom pointing purple label">평균 수익률</dt>
                        <dd>
                            16,800,000원
                        </dd>
                    </dl>
                </div>
                <div class="ui center aligned column">
                    <dl>
                        <dt class="ui bottom pointing brown label">평균 매출</dt>
                        <dd>
                            16,800,000원
                        </dd>
                    </dl>
                </div>
                <div class="ui center aligned column">
                    <dl>
                        <dt class="ui bottom pointing green label">평균 순수익</dt>
                        <dd>
                            16,800,000원
                        </dd>
                    </dl>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: {
        machineType: [
          { key: null, text: '전체' },
          { key: 1, text: '세탁기' },
          { key: 2, text: '건조기' },
        ],
      },
      response: {
        maintenance: [],
        payments: [],
        scaningTime: new Date(),
      },
    };
  },
  mounted() {
    this.getSales(moment().add(-1, 'month').toDate(), new Date());
  },
  computed: {

  },

  methods: {
    getSales(start, end) {
      const self = this;

      this.$store.dispatch('salesFranchies', { start, end })
        .then((result) => {
          self.response.maintenance = result.maintenance;
          self.response.payments = result.payments;
          self.response.scaningTime = new Date();
        });
    },
  },
};
</script>
