<template>
  <div>
    <!-- <the-header></the-header> -->
    <!-- <the-header /> -->
    <TheHeader />

    <!-- <badge-list></badge-list> -->
    <!-- <badge-list /> -->
    <BadgeList />

    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    /> -->
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />

    <!-- /**
     * It includes two forms for Scoped Slots.
     * 
     * Scoped slots allow the parent component to pass data and functionality to its child components.
     * In this code, the CourseGoals component is used with a scoped slot named "default".
     * The scoped slot receives a slotProps object, which contains the data passed from the parent component.
     * The slotProps object has two properties: "item" and "anotherProp".
     * 
     * The commented out code block shows an alternative syntax for using scoped slots.
     * The uncommented code block demonstrates how to access the data passed through the scoped slot.
     * It displays the value of "item" in an <h2> element and the value of "anotherProp" in a <p> element.
     */ -->
    <!-- <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['anotherProp'] }}</p>
      </template>
    </CourseGoals> -->
    <CourseGoals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps["anotherProp"] }}</p>
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
