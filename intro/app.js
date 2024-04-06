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
  data(){
    return {
      counter: 0,
    }
  },
  methods: {
    increase(){
      this.counter += 1;
    },
    reduce(){
      this.counter -= 1;
    }
  }
});
eventsApp.mount("#vue_events");
