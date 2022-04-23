import { makeAutoObservable } from "mobx";
import { smithy } from "../data/production";
import { IBaseItem, IRootStore, IStore } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class HunterStore implements IStore {
  rootStore;
  items = smithy;
  name = "Smithy";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  get total(): IBaseItem[] {
    return getTotal(this.items);
  }
}
