import * as domains from './domain';

const axios = require('axios');

export default {
  getGoodsList() {
    const instWithCred = axios.create({
      baseURL: domains.GOODS_LIST,
    });
    return instWithCred.get('/getGoods');
  },
};
