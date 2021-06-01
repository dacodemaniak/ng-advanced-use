export interface Model<T> {
  deserialize(datas: any): T;
}
