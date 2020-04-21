import * as domains from './domain';

const axios = require('axios');

export default {
  sendSignUp(user) {
    const instWithCred = axios.create({
      baseURL: domains.AUTH_REQUESTS,
    });
    return instWithCred.post('/', user);
  },
};
