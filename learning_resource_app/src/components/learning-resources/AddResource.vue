<template>
  <base-card>
    <form action="">
      <fieldset>
        <label for="title">Title</label>
        <input name="title" id="title" type="text" />
      </fieldset>
      <fieldset>
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="3" />
      </fieldset>
      <fieldset>
        <label for="link">Link</label>
        <input name="link" id="link" type="url" />
      </fieldset>
      <fieldset>
        <base-button type="submit">Add Resource</base-button>
      </fieldset>
      
    </form>
  </base-card>
</template>

<script></script>

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
