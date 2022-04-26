import { makeAutoObservable } from "mobx";
import { mine } from "../data/extraction";
import { changeCount, getTotal } from "../helpers";
import { IItem, IRootStore, IStore, ITotal } from "../interfaces";


export default class MineStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Mine"

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name)
    this.items = savedItems ? JSON.parse(savedItems) : mine
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = mine
  }

  get total(): ITotal[] {
    return getTotal(this.items);
  }
}
