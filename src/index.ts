export function hasProp<T extends object>(obj: T) {
  return new Proxy(obj, {
    get(target, key: string, receiver: any) {
        if (!(key in obj)) {
          throw new TypeError(`unknown property ${key}`);
        }
        return Reflect.get(target, key, receiver);
    }
  });
}
