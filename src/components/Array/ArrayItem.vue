<template>
  <div class="va-array-item flex-center">
    <div class="va-array-centent flex-center" :style="{ background: selected ? '#f44' : 'white' }">
      {{ value }}
    </div>
    <span class="va-array-index">{{ index }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: [String, Number],
    index: [String, Number],
    selected: Boolean,
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped lang="less">
.va-array-item {
  flex-direction: column;
  .va-array-centent {
    width: 80px;
    height: 40px;
    color: green;
    border: 1px solid lightgreen;
  }
  .va-array-index {
    margin-top: 6px;
    font-style: italic;
    font-size: 14px;
    color: #888;
  }
}
</style>
