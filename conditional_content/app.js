const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoal: "" };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal.trim() === "") {
        return;
      }
      this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    }
  },
});

app.mount("#user-goals");
