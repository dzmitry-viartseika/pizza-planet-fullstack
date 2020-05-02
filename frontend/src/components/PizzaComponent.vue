<template>
  <div class="pizza">
    <h2 class="title">Add new Pizza:</h2> {{ newItem }}
    <form>
      <div class="text-field"
           :class="{ 'form-group--error': $v.name.$error }"
      >
        <div class="text-field__info">Name</div>
        <input class="form-control" type="text" v-model.trim="newItem.name">
        <div class="error" v-if="!$v.name.required">Email is required</div>
        <div class="error" v-if="!$v.name.minLength">Email must have at least
          {{$v.name.$params.minLength.min}} letters.</div>
      </div>
      <div class="text-field">
        <div class="text-field__info">Description</div>
        <textarea class="form-control" cols="30" rows="10" v-model="newItem.description"></textarea>
      </div>
      <h3 class="title__subtitle">Option1</h3>
      <div class="text-field">
        <div class="text-field__info">Size('')</div>
        <input class="form-control" type="text" v-model="newItem.options[0].size">
      </div>
      <div class="text-field">
        <div class="text-field__info">Price</div>
        <input class="form-control" type="text" v-model="newItem.options[0].price">
      </div>
      <h3 class="title__subtitle">Option2</h3>
      <div class="text-field">
        <div class="text-field__info">Size('')</div>
        <input class="form-control" type="text" v-model="newItem.options[1].size">
      </div>
      <div class="text-field">
        <div class="text-field__info">Price</div>
        <input class="form-control" type="text" v-model="newItem.options[1].price">
      </div>
      <button @click="addItem()"
              class="btn btn-primary">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
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
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    description: {
      minLength: minLength(4),
    },
  },
  methods: {
    addItem() {
      GoodsApi.addNewItem(this.newItem);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
