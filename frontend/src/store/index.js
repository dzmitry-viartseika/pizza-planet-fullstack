import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsList: [],
    cartList: [],
  },
  getters: {
    goodsList: (state) => state.goodsList,
    cartList: (state) => state.cartList,
  },
  mutations: {
    setGoodsList(state, data) {
      state.goodsList = data;
    },
    setCartItem(state, data) {
      state.cartList.push(data);
    },
  },
  actions: {
  },
  modules: {
  },
});
