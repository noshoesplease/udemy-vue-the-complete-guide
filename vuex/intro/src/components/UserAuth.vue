<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters['auth/userIsAuthenticated'];
    },
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style scoped></style>
