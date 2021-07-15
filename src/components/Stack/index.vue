<template>
  <button @click="push">push</button>
  <button @click="pop">pop</button>
  <div class="va-stack">
    <transition-group name="va-stack">
      <div class="va-stack-item flex-center" v-for="item in stack" :key="item.key">
        {{ item.value }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { sleep, useWrap, BaseItem } from "@/utils/index";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<number[]>,
      required: true,
    },
  },
  setup(props) {
    let stack = useWrap(props.data) as BaseItem<number>[];

    const push = () => {
      stack.unshift(new BaseItem<number>(555));
    };

    const pop = () => {
      stack.shift();
    };

    return {
      stack,
      push,
      pop,
    };
  },
});
</script>

<style scoped lang="less">
.va-stack {
  display: flex;
  flex-direction: column;
  width: 80px;
  padding-top: 40px;
  border: 1px solid lightgreen;
  border-top: none;
  .va-stack-item {
    margin-top: 10px;
    width: 80px;
    height: 40px;
    background-color: lightblue;
    z-index: 1;
    transition: all 0.8s ease;
  }
}

.va-stack-enter-from,
.va-stack-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
