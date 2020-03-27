<template>
  <div class="menu">
    <div class="container">
      <div class="menu-table">
        <div class="menu-table-header">
          <div class="menu-table-header__item">Size</div>
          <div class="menu-table-header__item">Price</div>
          <div class="menu-table-header__item">Add to cart</div>
        </div>
        <div class="menu-table-content">
           <div class="menu-table-content__title">Margharita</div>
          <div class="menu-table-content-desc">
            <div class="menu-table-content-desc__item">9 ''</div>
            <div class="menu-table-content-desc__item">12.95</div>
            <div class="menu-table-content-desc__item">
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuTemplate',
};
</script>

<style scoped lang="scss">
  .menu {
    &-table {
      width: 600px;
      &-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        background: lightgray;
        &__item {
          width: 20%;
          padding: 10px 20px;
          &:first-child {
            width: 50%;
          }
        }
      }
      &-content {
        &__title {
          margin-bottom: 10px;
          border-bottom: 1px solid gray;
        }
        &-desc {
          display: flex;
          flex-direction: row;
          align-items: center;
          &__item {
            width: 20%;
            padding: 10px 20px;
            &:first-child {
              width: 50%;
            }
            & button {
              border: 1px solid red;
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>
