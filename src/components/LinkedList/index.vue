<template>
  <button @click="reverse">reverse</button>
  <button @click="pop">pop</button>
  <div class="va-linked-list">
    <transition-group name="va-linked-list" class="container">
      <LinkedListNode v-for="v in data" :key="v" :value="v" />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import LinkedListNode from "./LinkedListNode.vue";

export default defineComponent({
  components: {
    LinkedListNode,
  },
  setup() {
    let data = reactive([1, 2, 3, 4, 55, 66, 77, 88]);

    const reverse = () => {
      data.reverse();
    };

    const pop = () => {
      data.pop();
    };

    return {
      data,
      reverse,
      pop,
    };
  },
});
</script>

<style scoped lang="less">
.va-linked-list {
  display: flex;
  flex-wrap: wrap;
}

.container {
  position: relative;
  padding: 0;
}

/* 1. declare transition */
.va-linked-list-move,
.va-linked-list-enter-active,
.va-linked-list-leave-active {
  transition: all 0.5s ease-in;
}
/* 2. declare enter from and leave to state */
.va-linked-list-enter-from,
.va-linked-list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.va-linked-list-leave-active {
  position: absolute;
}
</style>
