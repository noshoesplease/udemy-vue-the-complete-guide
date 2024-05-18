<template>
  <h2 @click="anEventEmitter">{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <h3>{{ aProvidedValue }}</h3>
  <h4>Provide/Inject values should only be changed where they are provided.</h4>
</template>

<script setup>
import { computed, inject } from "vue";

const emit = defineEmits(["emitted-event"]);

function anEventEmitter() {
  emit("emitted-event");
}



const aProvidedValue = inject('aProvidedValue')

const props = defineProps(["firstName", "lastName", "age"]);
const userName = computed(() => `${props.firstName} ${props.lastName}`);
</script>

<style></style>
