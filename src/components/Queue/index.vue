<template>
  <button @click="enqueue">enqueue</button>
  <button @click="dequeue">dequeue</button>
  <div class="va-queue">
    <transition-group :name="`va-queue-${operation}`">
      <div class="va-queue-item flex-center" v-for="item in queue" :key="item.key">
        {{ item.value }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { sleep, useWrap, BaseItem } from "@/utils/index";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<number[]>,
      required: true,
    },
  },
  setup(props) {
    let queue = useWrap(props.data) as BaseItem<number>[];

    let operation = ref("");

    const enqueue = () => {
      operation.value = "enqueue";
      queue.unshift(new BaseItem<number>(555));
    };

    const dequeue = () => {
      operation.value = "dequeue";
      queue.pop();
    };

    return {
      operation,
      queue,
      enqueue,
      dequeue,
    };
  },
});
</script>

<style scoped lang="less">
.va-queue {
  display: flex;
  justify-content: center;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid lightgreen;
  border-left: none;
  border-right: none;
  .va-queue-item {
    width: 80px;
    height: 40px;
    margin-right: 10px;
    background-color: lightblue;
    z-index: 1;
    transition: all 0.8s ease;
  }
}

.va-queue-enqueue-enter-from,
.va-queue-enqueue-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.va-queue-dequeue-enter-from,
.va-queue-dequeue-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
