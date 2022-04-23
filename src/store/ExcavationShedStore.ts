import { makeAutoObservable } from "mobx";
import { excavationShed } from "../data/extraction";
import { IBaseItem, IRootStore, IStore } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class ExcavationShedStore implements IStore {
  rootStore;
  items = excavationShed;
  name = "Excavation Shed";

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
