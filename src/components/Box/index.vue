<template>
  <div>
    <div class="va-box">{{ value }}</div>
    <span>{{ index }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: [String, Number],
    index: [String, Number],
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
.va-box {
  border: 1px solid #ccc;
}
</style>
