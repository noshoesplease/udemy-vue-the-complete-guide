<template>
  <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div
      class="block"
      :class="{ transition_animation: animatedTransitionBlock }"
    ></div>
    <button @click="animateTransitionBlock">Animate with Transitions</button>
  </div>
  <div class="container">
    <div
      class="block"
      :class="{ keyframe_animation: animatedKeyFrameBlock }"
    ></div>
    <button @click="animateKeyFrameBlock">Animate with Keyframes</button>
  </div>

  <div class="container">
    <transition
      :css="false"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      name="customNamePrefixPara"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="customNamePrefixParaIsVisible">
        This is only sometimes visible...
      </p>
    </transition>
    <button @click="customNamePrefixParaToggle">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition
      enter-from-class="customEnterFromClass"
      enter-active-class="customEnterActiveClass"
      enter-to-class="customEnterToClass"
      leave-from-class="customLeaveFromClass"
      leave-active-class="customLeaveActiveClass"
      leave-to-class="customLeaveToClass"
    >
      <p v-if="customClassParaIsVisible">
        This too is only sometimes visible...
      </p>
    </transition>
    <button @click="customClassParaToggle">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="!usersAreVisible" @click="showUsers">Show users</button>
      <button v-else @click="hideUsers">Hide users</button>
    </transition>
  </div>

  <base-modal :open="dialogIsVisible" @close="hideDialog">
    <p>This is a test dialog!</p>
    <p>
      Animating the removal of this element is difficult without Vue because it
      is unmounted before CSS is applied.
    </p>
    <p>
      But with Vue, we can animate the removal of this element with the Vue
      transition component.
    </p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <base-modal :open="transitionModalIsVisible" @close="hideTransitionModal">
    <p>This modal has been updated with a Transition Component</p>
    <button @click="hideTransitionModal">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showTransitionModal">
      Show Modal with Transition Component
    </button>
  </div>
</template>

<script>
import UsersList from "./components/UsersList.vue";
export default {
  components: {
    UsersList,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedTransitionBlock: false,
      animatedKeyFrameBlock: false,
      customNamePrefixParaIsVisible: false,
      customClassParaIsVisible: false,
      transitionModalIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      console.log("Enter cancelled...");
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      console.log("Leave cancelled...");
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log("Firing before enter...");
      el.style.color = "green";
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("Firing enter...");
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.color = "blue";
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("Firing after enter...");
      el.style.color = "purple";
    },
    beforeLeave(el) {
      console.log("Firing before leave...");
      el.style.color = "red";
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log("Firing leave...");
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.color = "orange";
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("Firing after leave...");
      el.style.color = "black";
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    showTransitionModal() {
      this.transitionModalIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hideTransitionModal() {
      this.transitionModalIsVisible = false;
    },
    animateTransitionBlock() {
      this.animatedTransitionBlock = !this.animatedTransitionBlock;
    },
    animateKeyFrameBlock() {
      this.animatedKeyFrameBlock = !this.animatedKeyFrameBlock;
    },
    customNamePrefixParaToggle() {
      this.customNamePrefixParaIsVisible = !this.customNamePrefixParaIsVisible;
    },
    customClassParaToggle() {
      this.customClassParaIsVisible = !this.customClassParaIsVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.transition_animation {
  transition: transform 0.5s ease-in-out;
  transform: translateX(-150px);
}

.keyframe_animation {
  animation: move 2s ease-out;
}

.customNamePrefixPara-enter-from {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}
.customNamePrefixPara-enter-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  color: #a80b48;
}
.customNamePrefixPara-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.customNamePrefixPara-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.customNamePrefixPara-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  color: #003181;
}
.customNamePrefixPara-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.customEnterFromClass {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}
.customEnterActiveClass {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  color: #6e0ba8;
}
.customEnterToClass {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.customLeaveFromClass {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.customLeaveActiveClass {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  color: #7b0081;
}
.customLeaveToClass {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-leave-from,
.fade-button-enter-to {
  opacity: 1;
}

.fade-button-enter-active {
  transition: opacity 0.5s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.5s ease-in;
}

@keyframes move {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(20rem) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
