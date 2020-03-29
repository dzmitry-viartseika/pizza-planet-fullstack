<template>
  <div class="pizza">
    <h2 class="title">Add new Pizza:</h2> {{ newItem }}
    <form>
      <div class="text-field">
        <div class="text-field__info">Name</div>
        <input type="text" v-model="newItem.name">
      </div>
      <div class="text-field">
        <div class="text-field__info">Description</div>
        <textarea cols="30" rows="10" v-model="newItem.description"></textarea>
      </div>
      <h3 class="title__subtitle">Option1</h3>
      <div class="text-field">
        <div class="text-field__info">Size('')</div>
        <input type="text" v-model="newItem.options[0].size">
      </div>
      <div class="text-field">
        <div class="text-field__info">Price</div>
        <input type="text" v-model="newItem.options[0].price">
      </div>
      <h3 class="title__subtitle">Option2</h3>
      <div class="text-field">
        <div class="text-field__info">Size('')</div>
        <input type="text" v-model="newItem.options[1].size">
      </div>
      <div class="text-field">
        <div class="text-field__info">Price</div>
        <input type="text" v-model="newItem.options[1].price">
      </div>
      <button @click="addItem()">Add</button>
    </form>
  </div>
</template>

<script>
import GoodsApi from '../api/GoodsApi';

export default {
  name: 'PizzaComponent',
  data() {
    return {
      newItem: {
        name: '',
        description: '',
        options: [
          {
            size: '1',
            price: '1',
          },
          {
            size: '2',
            price: '2',
          },
        ],
      },
    };
  },
  methods: {
    addItem() {
      console.log(this.newItem);
      GoodsApi.addNewItem(this.newItem);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
