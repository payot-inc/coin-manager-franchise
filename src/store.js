import Vue from 'vue';
import Vuex from 'vuex';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    franchise: {},
    companys: [],
  },
  getters: {
    getCompanys(state) {
      return function (query) {
        return _.filter(state.companys, c => c.name.includes(query));
      };
    },
  },
  mutations: {
    setFranchise(state, franchise) {
      const f = _.clone(franchise);
      delete f.companies;

      state.franchise = f;
      state.companys = franchise.companies;
    },

    logout(state) {
      state.franchise = {},
      state.companys = {};
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      return api.login(email, password).then((franchise) => {
        commit('setFranchise', franchise.data);

        return franchise;
      });
    },

    signup({ commit, state }, { company, owner, machines }) {
      if (state.franchise.hsOwnProperty('id')) Error('로그인이 필요합니다');
      return api
        .signUpCompany(state.franchise.id, company, owner, machines)
        .then(() => api.refreshFranchise(state.franchise.id));
    },

    salesFranchise({ commit, state }, { start, end }) {
      const franchiseId = state.franchise.id;

      const maintenances = api.getFranchiseMaintenances(franchiseId, start, end).catch(err => console.log(err.response.data));
      const pay = api.getFranchiseSales(franchiseId, start, end).catch(err => console.log(err.response.data));

      return Promise.all([maintenances, pay])
        .then(([maintenance, payments]) => ({
          maintenance: maintenance.data, payments: payments.data,
        }));
    },
  },
});
