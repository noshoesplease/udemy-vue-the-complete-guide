<!--
  This Vue component represents the main App component.
  It contains the logic for managing the user's name using different approaches.

  Approach 1:
  - In the commented out script block, the component uses the 'data' option to define the 'userName' property.

  Approach 2:
  - In the commented out script block, the component uses the Composition API's 'setup' function to define the 'userName' property.

  Approach 3:
  - In the active script block, the component uses the 'setup' function with the 'script setup' syntax to define the 'userName' property.

  Note: The 'ref' function allows the 'userName' property to be reactive, meaning any changes to its value will trigger reactivity in the component.
-->
<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </section>
  <section class="container">
    <h2>{{ user.Name }}</h2>
    <h3>{{ user.Age }}</h3>
    <button @click="changeAge">Change age</button>
  </section>

  <section class="container">
    <h2>{{ combinedName }}</h2>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
    </div>
    <div>
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>

  <section class="container">
    <h2>{{ combinedRefs }}</h2>
    <div>
      <input type="text" placeholder="First Name" v-model="firstNameRef" />
    </div>
    <div>
      <input type="text" placeholder="Last Name" v-model="lastNameRef" />
    </div>
  </section>

  <section class="container">
    <!-- watch demo -->
    <h2>{{ userFood }}</h2>
    <button @click="changeFood">Change food</button>
  </section>

  <section class="container">
    <!-- template refs -->
    <h2>Template refs</h2>
    <h3>{{ combinedTemplateRefs }}</h3>
    <div>
      <input type="text" placeholder="First Name" ref="firstNameTemplateRef" />
    </div>
    <div>
      <input type="text" placeholder="Last Name" ref="lastNameTemplateRef" />
    </div>
    <button @click="setNameTemplateRef">Set Last Name</button>
  </section>

  <section class="container">
    <user-data
      @emitted-event="anEventHandler"
      :firstName="anotherName"
      :lastName="lastName"
      :age="userAge"
    ></user-data>
  </section>
</template>

<!-- <script>
export default {
  data() {
    return {
      userName: "Devin",
    };
  },
};
</script> -->

<!-- <script>
import { ref } from "vue";
export default {
  setup() {
    const userName = ref("Devin");
    return {
      userName,
    };
  },
};
</script> -->

<script setup>
import { reactive, ref, computed, watch, provide } from "vue";
import UserData from "./components/UserData.vue";

function anEventHandler() {
  console.log("An event handler");
}

const anotherName = ref("Devin");

const userName = ref("Devin");
const userAge = ref(36);

const firstName = ref("");
function setFirstName(event) {
  firstName.value = event.target.value;
}

const lastName = ref("");
function setLastName(event) {
  lastName.value = event.target.value;
}

const combinedName = computed(
  () =>
    `${firstName.value ? firstName.value : "Erase"} ${
      lastName.value ? lastName.value : "Me"
    }`
);

const firstNameRef = ref("");
const lastNameRef = ref("");
const combinedRefs = computed(
  () =>
    `${firstNameRef.value ? firstNameRef.value : "Erase"} ${
      lastNameRef.value ? lastNameRef.value : "Me"
    }`
);

setTimeout(() => {
  userName.value = "Dev";
  userAge.value = 37;
}, 2000);

/**
 * reactive() only works with objects,
 * not with primitive values like strings or numbers.
 */
const user = reactive({
  Name: "Devin!",
  Age: 36,
});

setTimeout(() => {
  user.Name = "Dev!";
  user.Age = 37;
}, 2000);

const changeAge = () => {
  user.Age++;
};

const userFood = ref("Pizza");
const changeFood = () => {
  userFood.value = "Burger";
};

watch(userFood, (newValue, oldValue) => {
  console.log(`Food changed from ${oldValue} to ${newValue}`);
});

const firstNameTemplate = ref("");
const lastNameTemplate = ref("");
const firstNameTemplateRef = ref(null);
const lastNameTemplateRef = ref(null);

function setNameTemplateRef() {
  setFirstNameTemplateRef();
  setLastNameTemplateRef();
}

function setFirstNameTemplateRef() {
  firstNameTemplate.value = firstNameTemplateRef.value.value;
}
function setLastNameTemplateRef() {
  lastNameTemplate.value = lastNameTemplateRef.value.value;
}

const combinedTemplateRefs = computed(
  () =>
    `${firstNameTemplate.value ? firstNameTemplate.value : "Erase"} ${
      lastNameTemplate.value ? lastNameTemplate.value : "Me"
    }`
);

provide('aProvidedValue', 'This is a provided value');

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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
