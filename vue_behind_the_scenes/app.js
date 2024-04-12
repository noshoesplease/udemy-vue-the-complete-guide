const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
      messageRef: "This is a reference message",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
    setTextRef() {
      this.messageRef = this.$refs.userText.value;

    },
  },
});

app.mount("#app");
