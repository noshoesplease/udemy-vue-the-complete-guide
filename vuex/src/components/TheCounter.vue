<template>
  <h3>{{ counter }}</h3>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },

    // Using mapGetters, which is a helper function provided by Vuex
    // to map the finalCounter getter to the finalCounter computed property
    ...mapGetters(["finalCounter"]),
  },
};
</script>

<style scoped></style>
