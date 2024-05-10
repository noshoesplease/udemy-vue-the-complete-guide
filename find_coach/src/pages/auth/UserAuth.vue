<template>
  <div>
    <base-dialog
      @close="handleError"
      :show="!!error"
      title="An error occurred."
      fixed
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input v-model.trim="email" type="email" id="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input v-model.trim="password" type="password" id="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and a password with at least 6 characters.
        </p>
        <base-button>{{ submitButtonText }}</base-button>
        <base-button @click="switchAuthMode" type="button" mode="flat">
          {{ switchModeButtonText }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },

  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        !this.email ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;
      try {
        if (this.mode === "login") {
          // Login
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        } else {
          // Signup
          await this.$store.dispatch("signup", {
            email: this.email,
            password: this.password,
          });
        }
      } catch (error) {
        this.error = error.message || "Failed to authenticate.";
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      this.mode = this.mode === "login" ? "signup" : "login";
    },
    handleError() {
      this.error = null;
    },
  },
  computed: {
    submitButtonText() {
      return this.mode === "login" ? "Login" : "Signup";
    },
    switchModeButtonText() {
      return this.mode === "login" ? "Signup instead" : "Login instead";
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
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
