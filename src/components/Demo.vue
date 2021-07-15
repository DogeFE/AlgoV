<template>
  <Array :data="values" />
  <Stack :data="values" />
  <!-- <Queue :data="data" /> -->
  <!-- <LinkedList /> -->
  <!-- <BaseBox :tkey="key" :value="value" /> -->
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Array from "./Array/index.vue";
import Stack from "./Stack/index.vue";
import Queue from "./Queue/index.vue";
import LinkedList from "./LinkedList/index.vue";

import BaseBox from "./BaseBox/index.vue";

export default defineComponent({
  components: {
    Array,
    Stack,
    Queue,
    LinkedList,
    BaseBox,
  },
  setup(props) {
    const values = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);

    return {
      key: Symbol("xx"),
      value: false,
      values,
    };
  },
});
</script>

<style scoped></style>
