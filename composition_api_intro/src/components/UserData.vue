<template>
  <h2 @click="anEventEmitter">{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["emitted-event"]);

function anEventEmitter() {
  emit("emitted-event");
}

const props = defineProps(["firstName", "lastName", "age"]);
const userName = computed(() => `${props.firstName} ${props.lastName}`);
</script>

<style></style>
