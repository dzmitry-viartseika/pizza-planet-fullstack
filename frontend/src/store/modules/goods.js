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
      console.log('deleteGoodsListItem id', id);
      state.goodsList.splice(state.goodsList.indexOf(id), 1);
    },
  },
};
