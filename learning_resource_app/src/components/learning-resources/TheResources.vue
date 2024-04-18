<template>
  <base-card>
    <base-button
      :mode="storedResourcesButtonMode"
      @click="setSelectedTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button
      :mode="addResourceButtonMode"
      @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive> <component :is="selectedTab"></component> </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },

  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResourceButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  data() {
    return {
      selectedTab: "stored-resouces",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to Google...",
          link: "https://www.google.com",
        },
      ],
    };
  },

  methods: {
    setSelectedTab(selectedTab) {
      this.selectedTab = selectedTab;
    },

    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
  },
};
</script>

<style></style>
