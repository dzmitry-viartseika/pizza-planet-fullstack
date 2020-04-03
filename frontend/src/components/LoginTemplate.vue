<template>
  <div class="login">
    <form>
      <div class="login-field">
        <label>Email address</label>
        <input type="email"
               v-model="user.email"
        >
      </div>
      <div class="login-field">
        <label>Password</label>
        <input type="password"
               v-model="user.password"
        >
      </div>
      <div class="login-btns">
        <button class="login-btns__signIn">Sign in</button>
        <button class="login-btns__signOut">Sign out</button>
      </div>
    </form>
  </div>
</template>

<script>
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
};
</script>

<style scoped lang="scss">
  .login {
    max-width: 500px;
    &-field {
      display: flex;
      flex-direction: column;
    }
    &-btns {
      display: flex;
      justify-content: center;
      &__signIn {
        background: blueviolet;
      }
      &__signOut {
        background: darkred;
      }
      button {
        padding: 10px 20px;
        color: white;
      }
    }
  }
</style>
