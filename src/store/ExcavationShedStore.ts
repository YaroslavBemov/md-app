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

    const savedItems = localStorage.getItem(this.name)
    this.items = savedItems ? JSON.parse(savedItems) : excavationShed
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = excavationShed
  }

  get total(): IBaseItem[] {
    return getTotal(this.items);
  }
}
