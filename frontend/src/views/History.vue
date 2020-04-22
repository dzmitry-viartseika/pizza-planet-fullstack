<template>
    <div>
      <HeaderTemplate v-if="$route.name !== 'Banner'"/>
      <div class="contact">
        <h1>History</h1>
        <p>
          Some quick example text to build on the card
          title and make up the bulk the card's content
        </p>
      </div>
    </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import localStorageToken from '../mixins/localStorageToken';

export default {
  name: 'Contact',
  mixins: [localStorageToken],
  components: {
    HeaderTemplate,
  },
};
</script>

<style scoped lang="scss">

</style>
