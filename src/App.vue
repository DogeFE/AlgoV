<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Demo />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Demo from "./components/Demo.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Demo,
  },
});
</script>

<style></style>
