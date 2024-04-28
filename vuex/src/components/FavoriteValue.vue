<template>
  <h3>{{ counter }}</h3>
  <p>Does more computation with the state here...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters["numbers/finalCounter"];
    },
  },
};
</script>

<style scoped></style>
