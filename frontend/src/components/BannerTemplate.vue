<template>
  <div class="home">
    <div class="container">
      <div class="home-banner">
        <div class="home-banner-info">
          <div class="home-banner-info__main">
            <h1 class="home-banner-info__main-title">Welcome to Pizza Planet!</h1>
            <template v-if="!editState">
              <h2 class="home-banner-info__main-subtitle"
                  @click="editState = true"
              >{{ message }}</h2>
            </template>
            <template v-else>
              <input type="text"
                     v-model="message"
                     style="display: block"
                     @keyup.enter="editState = false"
              >
            </template>
            <button class="button"
                    @click="proceedToMenu()"
            >Let's order!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerTemplate',
  data() {
    return {
      message: 'Feeling hungry?',
      editState: false,
    };
  },
  methods: {
    proceedToMenu() {
      this.$router.push('/menu');
    },
  },
};
</script>

<style scoped lang="scss">
  .home {
    &-banner {
      flex: 1 0 auto;
      background: green;
      display: flex;
      justify-content: center;
      text-align: center;
      height: 500px;
      padding-top: 50px;
      &-info {
        max-width: 400px;
        width: 100%;
        padding: 30px 10px;
        display: flex;
        background: red;
        justify-content: center;
        height: 200px;
        &__main {
          &-title {
            margin-bottom: 20px;
          }
          &-subtitle {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
