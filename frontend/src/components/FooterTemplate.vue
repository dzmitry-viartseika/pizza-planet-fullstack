<template>
    <footer class="footer">
      <div class="footer__copyright">2020</div>
    </footer>
</template>

<script>
export default {
  name: 'FooterTemplate',
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    background: $color-black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &__copyright {
      color: $color-white;
    }
  }
</style>
