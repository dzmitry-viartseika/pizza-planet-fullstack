<template>
  <div class="login">
    <form class="login__form">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email"
               v-model="user.email"
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
      </div>
      <div class="form-group login__btns">
        <button type="submit" class="btn btn-danger"
                @click="signUp()"
        >Sign up</button>
        <button type="submit" class="btn btn-primary"
                @click="logIn()"
        >Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
import UserApi from '../api/UserApi';

export default {
  name: 'LoginTemplate',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signUp() {
      console.log('signup');
      UserApi.sendSignUp(this.user);
    },
    logIn() {
      console.log('login');
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
