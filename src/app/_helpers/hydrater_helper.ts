export function hydrate<T> (
  ctor: { new(...args: any[]): T },
  datas: any,
  strictMode: boolean = true,
  ...args: any[]
): T {
  const instance: any = new ctor(...args);

  for (let property in datas) {
    if (!strictMode || instance.hasOwnProperty(property)) {
      instance[property] = datas[property];
    }
  }
  return instance;

}
