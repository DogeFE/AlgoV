<template>
  <div class="va-array">
    <button @click="foreach">foreach</button>
    <button @click="push">push</button>
    <button @click="pop">pop</button>
    <button @click="set">set</button>
    <transition-group name="va-array">
      <ArrayItem
        class="va-array-item"
        v-for="(item, i) in arr"
        :key="item.key"
        :value="item.value"
        :index="i"
        :selected="i == index"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from "vue";
import ArrayItem from "./ArrayItem.vue";

import { sleep, useWrap, BaseItem } from "@/utils/index";

export default defineComponent({
  components: {
    ArrayItem,
  },
  props: {
    data: {
      type: Array as PropType<number[]>,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
    },
  },
  setup(props) {
    let index = ref(-1);

    let arr = useWrap(props.data) as BaseItem<number>[];

    // read
    const foreach = async () => {
      for (let i = 0; i < arr.length; i++) {
        index.value = i;
        await sleep(500);
      }
      index.value = -1;
    };

    // push
    const push = () => {
      arr.push(new BaseItem(555));
    };

    // pop
    const pop = () => {
      arr.pop();
    };

    const set = () => {
      arr[Math.floor(arr.length / 2)] = new BaseItem(100);
    };

    return {
      arr,
      index,
      foreach,
      push,
      pop,
      set,
    };
  },
});
</script>

<style scoped lang="less">
.va-array {
  display: flex;
  .va-array-item {
    transition: all 0.8s ease;
  }
}

.va-array-enter-from,
.va-array-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.va-array-leave-active {
  //   position: absolute;
}
</style>
