export default {
  state: {
    goodsList: [],
    cartList: [],
    userName: '',
    userRole: '',
  },
  getters: {
    goodsList: (state) => state.goodsList,
    cartList: (state) => state.cartList,
    userName: (state) => state.userName,
    userRole: (state) => state.userRole,
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
    setUserRole(state, data) {
      state.userRole = data;
    },
    deleteGoodsListItem(state, id) {
      // eslint-disable-next-line no-underscore-dangle
      const index = state.goodsList.findIndex((item) => item._id === id);
      state.goodsList.splice(index, 1);
    },
  },
};
