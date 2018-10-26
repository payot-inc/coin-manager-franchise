<template>
    <nav id="side_gnb">
        <div class="login_box">
            <ul class="user_info">
                <li>
                    <strong>{{ 1 }}</strong>
                    <span>{{ 1 }}</span>
                </li>
            </ul>                             
        </div>

        <sui-accordion class="side_menu" inverted>
            <sui-accordion-title>
                <strong class="name">업체관리</strong>
                <sui-icon name="dropdown"></sui-icon>
            </sui-accordion-title>
            <sui-accordion-content active>
                <ul>
                    <li v-bind:class="{ on: path == '/franchise/now' }"><router-link to="/franchise/now">최근 통계(30일)</router-link></li>
                    <li v-bind:class="{ on: path == '/franchise/list' }"><router-link to="/franchise/list">업체리스트</router-link></li>
                    <li v-bind:class="{ on: path == '/franchise/add' }"><router-link to="/franchise/add">업체등록</router-link></li>
                    <li v-bind:class="{ on: path == '/franchise/point' }"><router-link to="/franchise/point">포인트관리</router-link></li>
                </ul>
            </sui-accordion-content>

            <sui-accordion-title>
                <strong class="name">경영정보 분석</strong>
                <sui-icon name="dropdown"></sui-icon>
            </sui-accordion-title>
            <sui-accordion-content>
                <ul>
                    <li v-bind:class="{ on: path == '/franchise/sales' }"><router-link to="/franchise/sales">기간별 매출정보</router-link></li>
                </ul>
            </sui-accordion-content>
        </sui-accordion>
    </nav>
</template>

<script>
export default {
  computed: {
      path () {
          return this.$route.path;
      },
      franchise () {
          return this.$store.franchise;
      }
  }
};
</script>
