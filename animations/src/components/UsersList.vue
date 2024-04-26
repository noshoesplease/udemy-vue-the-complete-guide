<template>
  <ul>
    <li @click="removeUser(user)" v-for="user in users" :key="user">
      {{ user }}
    </li>
  </ul>
  <div class="container">
    <input ref="userNameInput" type="text" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Max", "Manu", "Julie", "Angela", "Michael"],
    };
  },
  methods: {
    addUser() {
      const enteredValue = this.$refs.userNameInput.value;
      if (enteredValue) {
        this.users.unshift(enteredValue);
        this.$refs.userNameInput.value = "";
      }
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 1rem;
  border: 1px solid #ccc;
  text-align: center;
}

input {
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>
