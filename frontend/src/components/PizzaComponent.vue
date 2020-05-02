<template>
  <div class="pizza">
    <h2 class="title">Add new Pizza:</h2>
    <form @submit.prevent="addItem()">
      <div class="text-field"
           :class="{ 'form-group--error': $v.name.$error }"
      >
        <div class="text-field__info">Name</div>
        <input class="form-control" type="text" v-model.trim="$v.name.$model">
        <div class="error" v-if="!$v.name.required">Name is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least
          {{$v.name.$params.minLength.min}} letters.</div>
      </div>
      <div class="text-field"
           :class="{ 'form-group--error': $v.description.$error }"
      >
        <div class="text-field__info">Description</div>
        <textarea class="form-control" cols="30" rows="10" v-model.trim="$v.description.$model">

        </textarea>
        <div class="error" v-if="!$v.description.required">Description is required</div>
        <div class="error" v-if="!$v.description.minLength">Description must have at least
          {{$v.description.$params.minLength.min}} letters.</div>
      </div>
      <h3 class="title__subtitle">Option1</h3>
      <div class="text-field">
        <div class="text-field__info">Size('')</div>
        <input class="form-control" type="text" v-model="options[0].size">
      </div>
      <div class="text-field">
        <div class="text-field__info">Price</div>
        <input class="form-control" type="text" v-model="options[0].price">
      </div>
      <h3 class="title__subtitle">Option2</h3>
      <div class="text-field">
        <div class="text-field__info">Size('')</div>
        <input class="form-control" type="text" v-model="options[1].size">
      </div>
      <div class="text-field">
        <div class="text-field__info">Price</div>
        <input class="form-control" type="text" v-model="options[1].price">
      </div>
      <button type="submit"
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
    };
  },
  computed: {
    newItem() {
      return {
        name: this.name,
        description: this.description,
        options: [
          {
            size: this.options[0].size,
            price: this.options[0].price,
          },
          {
            size: this.options[1].size,
            price: this.options[1].price,
          },
        ],
      };
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    description: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    addItem() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log('error');
      }
      console.log('ok');
      GoodsApi.addNewItem(this.newItem);
    },
  },
};
</script>

<style scoped lang="scss">
  .text-field {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .text-field {
    &__info {
      margin-bottom: 10px;
    }
  }

</style>
