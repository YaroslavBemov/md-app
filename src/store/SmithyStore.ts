import { makeAutoObservable } from "mobx";
import { smithy } from "../data/production";
import { IItem, IStore, ITotal } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class HunterStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Smithy";

  constructor(rootStore: any) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name);
    this.items = savedItems ? JSON.parse(savedItems) : smithy;
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = smithy;
  }

  get total(): ITotal {
    return getTotal(this.items);
  }
}
