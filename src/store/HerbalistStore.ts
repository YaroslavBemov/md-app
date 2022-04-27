import { makeAutoObservable } from "mobx";
import { herbalistHut } from "../data/extraction";
import { changeCount, getTotal } from "../helpers";
import { IItem, IRootStore, IStore, ITotal } from "../interfaces";

export default class KitchenStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Herbalist Hut";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name);
    this.items = savedItems ? JSON.parse(savedItems) : herbalistHut;
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = herbalistHut;
  }

  get total(): ITotal {
    return getTotal(this.items);
  }
}
