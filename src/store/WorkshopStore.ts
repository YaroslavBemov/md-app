import { makeAutoObservable } from "mobx";
import { workshop } from "../data/production";
import { IItem, IRootStore, IStore, ITotal } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class HunterStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Workshop";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name);
    this.items = savedItems ? JSON.parse(savedItems) : workshop;
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = workshop;
  }

  get total(): ITotal[] {
    return getTotal(this.items);
  }
}
