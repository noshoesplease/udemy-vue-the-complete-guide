<template>
  <base-card>
    <form @submit.prevent="submitData">
      <fieldset>
        <label for="title">Title</label>
        <input name="title" id="title" type="text" ref="titleInput" />
      </fieldset>
      <fieldset>
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="descriptionInput"
        />
      </fieldset>
      <fieldset>
        <label for="link">Link</label>
        <input name="link" id="link" type="url" ref="linkInput" />
      </fieldset>
      <fieldset>
        <base-button type="submit">Add Resource</base-button>
      </fieldset>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["addResource"],
  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;
      this.addResource(title, description, link);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

fieldset {
  margin: 1rem 0;
  padding: 0;
  border: none;
}
</style>
