import { reactive } from "vue";

export function sleep(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export function useWrap(obj: Object) {
  let dummy;
  if (Array.isArray(obj)) {
    dummy = reactive(obj.map((item: number) => new BaseItem(item)));
  } else {
    dummy = new BaseItem(obj);
  }
  return dummy;
}

export class BaseItem<T> {
  value: T;
  key: symbol;
  constructor(value: T) {
    this.value = value;
    this.key = Symbol((value as Object).toString());
  }
}
