<template>
  <button @click="addOne">Add 4</button>
  <button @click="inc">Add 4</button>
  <button @click="increase({ value: 10 })">Add 20</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    addOne() {
      this.$store.dispatch("increment");
    },
    // ...mapActions(["increment", "increase"]),
    ...mapActions({
      inc: "increment",
      increase: "increase",
    }),

  },
};
</script>

<style scoped></style>
