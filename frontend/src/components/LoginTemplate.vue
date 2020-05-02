<template>
  <div class="login">
    <div class="login__form">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email"
               v-model="user.login"
               class="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"
               placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password"
               v-model="user.password"
               class="form-control"
               id="exampleInputPassword1"
               placeholder="Password"
        >
        <div class="error"
             v-if="errorSignInfo"
        >Login and password is required</div>
        <div class="error"
             v-if="errorLoginInfo"
        >User unable</div>
      </div>
      <div class="form-group login__btns">
        <button type="submit" class="btn btn-danger"
                @click="signUp()"
        >Sign up</button>
        <button type="submit" class="btn btn-primary"
                @click="logIn()"
        >Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserApi from '../api/UserApi';

const generateUniqueId = require('generate-unique-id');

export default {
  name: 'LoginTemplate',
  data() {
    return {
      user: {
        login: '',
        password: '',
      },
      errorSignInfo: false,
      errorLoginInfo: false,
    };
  },
  methods: {
    signUp() {
      UserApi.sendSignUp(this.user).then((resp) => {
        console.log('resp', resp);
        this.token = generateUniqueId({
          includeSymbols: ['@', '#', '|'],
          excludeSymbols: ['0'],
          length: 32,
        });
        localStorage.setItem('token', JSON.stringify(this.token));
        this.$store.commit('setUserName', this.user.login);
        this.$router.push('/banner');
      }).catch((err) => {
        this.errorLoginInfo = false;
        this.errorSignInfo = true;
        setTimeout(() => {
          this.errorSignInfo = false;
        }, 3000);
        console.log(err);
      });
    },
    logIn() {
      UserApi.sendLogin(this.user.login, this.user.password).then((resp) => {
        this.token = resp.data.token;
        localStorage.setItem('token', JSON.stringify(this.token));
        this.$store.commit('setUserName', this.user.login);
        this.$store.commit('setUserRole', resp.data.user.role);
        if (this.token) {
          this.$router.push('/banner');
        }
      }).catch((err) => {
        this.errorSignInfo = false;
        this.errorLoginInfo = true;
        setTimeout(() => {
          this.errorLoginInfo = false;
        }, 3000);
        console.error(err);
      });
    },
  },
};
</script>

<style scoped lang="scss">
  @import "src/assets/scss/variables";
  .login {
    background: $modalOverlayColor;
    width: 100%;
    height: 100vh;

    &__form {
      max-width: 500px;
      position: absolute;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      background: white;
      padding: 30px;
      border-radius: 5px;
      label {
        margin-bottom: 10px;
      }
    }

    &__btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        min-width: 150px;
      }
    }
  }
</style>
