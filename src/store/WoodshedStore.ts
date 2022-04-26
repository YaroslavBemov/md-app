import { makeAutoObservable } from "mobx";
import { woodshed } from "../data/extraction";
import { IBaseItem, IRootStore, IStore, ITotal } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class WoodshedStore implements IStore {
  rootStore;
  items = woodshed;
  name = "Woodshed";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name)
    this.items = savedItems ? JSON.parse(savedItems) : woodshed
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = woodshed
  }

  get total(): ITotal[] {
    return getTotal(this.items);
  }
}
