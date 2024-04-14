<template>
  <form @submit.prevent="submitData">
    <fieldset>
      <label>Name</label>
      <input v-model='name' type="text" />
    </fieldset>
    <fieldset>
      <label>Phone</label>
      <input v-model='phone' type="phone" />
    </fieldset>
    <fieldset>
      <label>Email</label>
      <input v-model='email' type="email" />
    </fieldset>
    <button>Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitData(){
      this.$emit("add-friend", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
      this.name = "";
      this.phone = "";
      this.email = "";
    }
  }
};
</script>
