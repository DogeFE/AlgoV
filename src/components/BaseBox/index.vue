<template>
  <div class="va-base-box">
    <div class="va-base-box__key">{{ tkey }}</div>
    <div class="va-base-box__value">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tkey: [String, Symbol],
    value: null,
  },
  setup(props) {
    let tkey = "";
    let value = "";

    if (props.tkey === undefined) {
      tkey = "undefined";
    } else if (props.tkey === null) {
      tkey = "null";
    } else {
      tkey = props.tkey as string;
    }

    if (props.value === undefined) {
      value = "undefined";
    } else if (props.value === null) {
      value = "null";
    } else {
      value = props.value as string;
    }

    return {
      tkey,
      value,
    };
  },
});
</script>

<style lang="less" scoped>
.va-base-box {
  display: flex;
  .va-base-box__key {
    padding: 4px;
    background-color: aquamarine;
  }
  .va-base-box__value {
    flex: 1;
    padding: 4px;
    background-color: cadetblue;
  }
}
</style>
