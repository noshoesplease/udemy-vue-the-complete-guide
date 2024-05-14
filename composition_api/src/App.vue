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
import { ref } from "vue";

const userName = ref("Devin");

setTimeout(() => {
  userName.value = "Dev";
}, 2000);
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
