<template>
    <div>
      <HeaderTemplate/>
      <div class="contact">
        <h1>Contact</h1>
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
