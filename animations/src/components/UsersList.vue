<template>
  <transition-group tag="ul" name="user-list">
    <li @click="removeUser(user)" v-for="user in users" :key="user">
      {{ user }}
    </li>
  </transition-group>
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

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-active {
  transition: all 1s ease-in;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
