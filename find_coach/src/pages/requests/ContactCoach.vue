<template>
  <form @submit.prevent="submitForm">
    <fieldset class="form-control">
      <label for="email">Your Email</label>
      <input v-model.trim="email" type="email" id="email" />
    </fieldset>

    <fieldset class="form-control">
      <label for="message">Message</label>
      <textarea v-model.trim="message" rows="5" id="message" />
    </fieldset>
    <p v-if="!formIsValid" class="errors">
      Please enter a valid email and message.
    </p>
    <fieldset class="actions">
      <base-button>Send Message</base-button>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      }
      const newRequest = {
        email: this.email,
        message: this.message,
        id: this.$route.params.id,
      };
      this.$store.dispatch("requests/contactCoach", newRequest);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
