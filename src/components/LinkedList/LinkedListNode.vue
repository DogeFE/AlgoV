<template>
  <div class="va-linked-list-node-container">
    <div class="va-linked-list-node node__content">
      {{ value }}
    </div>
    <div class="va-linked-list-node node__next">
      <div class="node__next-arrow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.va-linked-list-node-container {
  margin-right: 30px;
  .va-linked-list-node {
    padding: 10px 20px;
    border: 1px solid lightgreen;
  }
  .node__content {
    border-top-width: 4px;
  }
  .node__next {
    position: relative;
    .node__next-arrow {
      content: "";
      right: -40px;
      position: absolute;
      height: 1px;
      width: 50px;
      background-color: #333;
      transform-origin: 0 0;
      transform: rotate(-40deg);
      &::after {
        content: ">";
        position: absolute;
        transform: translate(40px, -50%);
      }
    }
  }
}
</style>
