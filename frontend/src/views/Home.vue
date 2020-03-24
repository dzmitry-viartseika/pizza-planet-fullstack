<template>
  <div class="home">
    <div class="container">
      <div class="home-banner">
        <div class="home-banner-info">
          <div class="home-banner-info__main">
            <h1 class="home-banner-info__main-title">Welcome to Pizza Planet!</h1>
            <h2 class="home-banner-info__main-subtitle">Feeling hungry?</h2>
            <button class="button">Let's order!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
  .home {
    &-banner {
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
