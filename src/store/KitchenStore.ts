import { makeAutoObservable } from "mobx";
import { kitchen } from "../data/production";
import { changeCount, getTotal } from "../helpers";
import { IItem, IRootStore, IStore, ITotal } from "../interfaces";


export default class KitchenStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Kitchen"

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name)
    this.items = savedItems ? JSON.parse(savedItems) : kitchen
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = kitchen
  }

  get total(): ITotal[] {
    return getTotal(this.items);
  }
}
