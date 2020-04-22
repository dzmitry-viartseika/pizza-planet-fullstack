export default {
  beforeMount() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token === null) {
      this.$router.push('/');
    }
  },
};
