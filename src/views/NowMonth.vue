<template>
    <div class="admin_page">
        <h4>이번달 매출 정보</h4>
        <section class="section_box sales_info">
            <div class="ui segment">그래프</div>
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
                            58.00%
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

        <h4>업체 기준 평균값</h4>
        <section class="section_box shop_all_avg">
            <div class="ui six column stackable grid">
                <div class="row">
                    <div class="column">
                        <dl>
                            <dt>총 업체 수</dt>
                            <dd>{{ companyAverage.companyCount }}개</dd>
                        </dl>
                    </div>
                    <!-- <div class="column">
                        <dl>
                            <dt>총 장비 수</dt>
                            <dd>세탁기 00대 / 건조기 00대</dd>
                        </dl>
                    </div> -->
                    <div class="column">
                        <dl>
                            <dt>운영일</dt>
                            <dd>{{ companyAverage.serviceDay }}일</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>면적</dt>
                            <dd>{{ companyAverage.space }}</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>권리금</dt>
                            <dd>{{ (companyAverage.premium / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>보증금</dt>
                            <dd>{{ (companyAverage.deposit / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>월세</dt>
                            <dd>{{ (companyAverage.spaceRant / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>월 전기세</dt>
                            <dd>{{ (companyAverage.electric / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>월 수도세</dt>
                            <dd>{{ (companyAverage.water / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>월 가스비</dt>
                            <dd>{{ (companyAverage.gas / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>장비수리비</dt>
                            <dd>{{ (companyAverage.repair / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>운영비</dt>
                            <dd>{{ (companyAverage.management / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt>월매출</dt>
                            <dd>{{ (companyAverage.franchiseSales / companyAverage.companyCount / 10000 | 0).toLocaleString() }}만원</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      response: {
        maintenance: [],
        payments: [],
        scaningTime: new Date(),
      },
    };
  },
  mounted() {
    const lastMonth = moment().add(-1, 'month').startOf('month').toDate();
    const now = new Date();

    this.getSales(lastMonth, now);
  },
  computed: {
    // 평균 업체정보
    companyAverage() {
      // 총 가입된 업체
      const allCompany = this.$store.state.companys;
      // 총 가입된 업체의 사업주
      const allOwner = this.$store.state.companys.map(obj => obj.owner);

      // 총 가입된 업체의 수
      const companyCount = allCompany.length;

      // 평균 영업 일수
      const serviceDay = _.sumBy(allCompany, i => moment().diff(moment(i.openDate), 'days')) / companyCount | 0;

      // 총 프랜차이즈에서 발생한 총 수익
      const franchiseSales = _.sumBy(this.response.payments, pay => Number(pay.amount));

      // 평균 공간
      const space = allCompany.reduce((acc, obj) => acc + Number(obj.space), 0) / companyCount | 0;

      // 평균 수도세
      const water = this.response.maintenance.reduce((acc, obj) => acc + Number(obj.water), 0) / companyCount | 0;

      // 평균 월세
      const spaceRant = this.response.maintenance.reduce((acc, obj) => acc + Number(obj.spaceRant), 0) / companyCount | 0;

      // 월 전기세
      const electric = this.response.maintenance.reduce((acc, obj) => acc + Number(obj.electric), 0) / companyCount | 0;

      // 월 가스세
      const gas = this.response.maintenance.reduce((acc, obj) => acc + Number(obj.gas), 0) / companyCount | 0;

      // 월 장비 수리비
      const repair = this.response.maintenance.reduce((acc, obj) => acc + Number(obj.repair), 0) / companyCount | 0;

      // 월 운영비 management
      const management = this.response.maintenance.reduce((acc, obj) => acc + Number(obj.management), 0) / companyCount | 0;

      // 평균 권리금
      const premium = allOwner.reduce((acc, obj) => acc + Number(obj.premium), 0) / companyCount | 0;

      // 평균 보증금
      const deposit = allOwner.reduce((acc, obj) => acc + Number(obj.deposit), 0) / companyCount | 0;

      return {
        companyCount,
        serviceDay,
        franchiseSales,
        space,
        spaceRant,
        electric,
        gas,
        repair,
        management,
        water,
        premium,
        deposit,

      };
    },
  },
  methods: {
    getSales(start, end) {
      const self = this;

      this.$store.dispatch('salesFranchise', { start, end })
        .then((result) => {
          self.response.maintenance = result.maintenance;
          self.response.payments = result.payments;
          self.response.scaningTime = new Date();
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>
