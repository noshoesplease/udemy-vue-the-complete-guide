<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";
export default {
  methods: {
    saveData(formData) {
      this.$store.dispatch("registerCoach", formData);
      this.$router.replace("/coaches");
    },
  },
  components: {
    CoachForm,
  },
};
</script>

<style scoped></style>
