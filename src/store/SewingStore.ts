import { makeAutoObservable } from "mobx";
import { sewingHut } from "../data/production";
import { IItem, IRootStore, IStore, ITotal } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class HunterStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Sewing Hut";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name);
    this.items = savedItems ? JSON.parse(savedItems) : sewingHut;
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = sewingHut;
  }

  get total(): ITotal {
    return getTotal(this.items);
  }
}
