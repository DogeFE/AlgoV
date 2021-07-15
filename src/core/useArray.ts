import { ref, isRef, reactive } from "vue";

export default function (init: number[]) {
  const readIndex = ref();
  const wrapArr = reactive(
    new Proxy(init, {
      get(obj, prop, receiver) {
        readIndex.value = prop;
        return Reflect.get(obj, prop, receiver);
      },
      set(obj, prop, receiver) {
        readIndex.value = prop;
        return Reflect.set(obj, prop, receiver);
      },
    })
  );

  return {
    arr: wrapArr,
    readIndex,
  };
}
