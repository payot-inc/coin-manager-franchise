import api from './api';

import Vue from 'vue';
import Vuex from 'vuex';

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
      console.log(franchise);
      state.franchise = franchise;
    },

    setCompanys(state, companys) {
      state.companys = companys;
    },

    addCompanys(state, company) {
      state.companys.push(company);
    },

    logout(state) {
      state.franchise = {},
      state.companys = {};
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      return api.login(email, password).then((franchise) => {
        commit('setFranchise', franchise);

        return franchise;
      });
    },

    signup({ commit, state }, { company, owner, machines }) {
      if (state.franchise.hsOwnProperty('id')) Error('로그인이 필요합니다');
      return api
        .signUpCompany(state.franchise.id, company, owner, machines)
        .then(([c, o, m]) => {
          const signCompany = _.clone(c);
          signCompany.owner = o;
          signCompany.machines = m;

          commit('addCompany', signCompany);

          return {
            company: c,
            owner: o,
            machines: m,
          };
        });
    },
  },
});
