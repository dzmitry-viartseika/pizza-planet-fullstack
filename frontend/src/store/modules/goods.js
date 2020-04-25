export default {
  state: {
    goodsList: [],
    cartList: [],
    userName: '',
  },
  getters: {
    goodsList: (state) => state.goodsList,
    cartList: (state) => state.cartList,
    userName: (state) => state.userName,
  },
  mutations: {
    setGoodsList(state, data) {
      state.goodsList = data;
    },
    setCartItem(state, data) {
      state.cartList.push(data);
    },
    setUserName(state, data) {
      state.userName = data;
    },
  },
};
