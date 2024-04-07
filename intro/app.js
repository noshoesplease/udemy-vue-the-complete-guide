const introApp = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      courseGoalC: "<p>Become a Vue master!</p>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        if (randomNumber < 0.8) {
          return this.courseGoalB;
        }
        return this.courseGoalC;
      }
    },
  },
});

introApp.mount("#intro");

const eventsApp = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      if (this.confirmedName === "") {
        return "";
      }
      return this.confirmedName + " " + "Doe";
    },
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      event.preventDefault();
      alert("Submitted!");
    },
    submitOtherForm() {
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    increase() {
      this.counter += 1;
    },
    reduce() {
      this.counter -= 1;
    },
    resetInput() {
      this.confirmedName = "";
    },
  },
});
eventsApp.mount("#vue_events");

const dynamicStylesApp = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});
dynamicStylesApp.mount("#dynamic_styles");
