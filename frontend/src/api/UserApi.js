import * as domains from './domain';

const axios = require('axios');

export default {
  sendSignUp(user) {
    console.log('user api', user);
    const instWithCred = axios.create({
      baseURL: domains.AUTH_REQUESTS,
    });
    return instWithCred.post('/signup', user);
  },
};
