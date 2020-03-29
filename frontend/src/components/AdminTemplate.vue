<template>
  <div class="admin">
    <h2 class="title">Menu:</h2>
    <div class="admin-table">
      <div class="admin-table-header">
        <div class="admin-table-header__item">Item</div>
        <div class="admin-table-header__item">Remove from menu</div>
      </div>
      <div class="admin-table-content">
        <div class="admin-table-content__item">Margarita</div>
        <div class="admin-table-content__item">
          <button>
            X
          </button>
        </div>
      </div>
    </div>
    <div class="admin-orders">
      <h2 class="title">Current orders:</h2>
      <div class="admin-orders-table">
        <div class="admin-orders-table-header">
          <div class="admin-orders-table-header__item">Item</div>
          <div class="admin-orders-table-header__item">Size</div>
          <div class="admin-orders-table-header__item">Quantity</div>
          <div class="admin-orders-table-header__item">Price</div>
        </div>
        <div class="admin-orders-table-content">
          <div class="admin-orders-table-content__order">Order Number: 1
            <button>x</button>
          </div>
          <div class="admin-orders-table-content-row">
            <div class="admin-orders-table-content-row__item">margarita</div>
            <div class="admin-orders-table-content-row__item">9</div>
            <div class="admin-orders-table-content-row__item">1</div>
            <div class="admin-orders-table-content-row__item">6.95</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminTemplate',
};
</script>

<style scoped lang="scss">
  .admin {
    &-orders {
      &-table {
        &-header {
          display: flex;
          flex-direction: row;
          height: 40px;
          background: lightgray;
          &__item {
            width: 40%;
            &:first-child {
              width: 60%;
            }
          }
        }
        &-content {
          &__order {
            border-bottom: 1px solid gray;
            padding-bottom: 5px;
          }
          &-row {
            display: flex;
            flex-direction: row;
            &__item {
              width: 40%;
              &:first-child {
                width: 60%;
              }
            }
          }
        }
      }
    }
    &-table {
      &-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        background: lightgray;
        &__item {
          width: 40%;
          &:first-child {
            width: 60%;
          }
        }
      }
    }
  }
</style>
