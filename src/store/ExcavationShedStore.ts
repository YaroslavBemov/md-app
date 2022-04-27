import { makeAutoObservable } from "mobx";
import { excavationShed } from "../data/extraction";
import { IItem, IRootStore, IStore, ITotal } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class ExcavationShedStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Excavation Shed";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name);
    this.items = savedItems ? JSON.parse(savedItems) : excavationShed;
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = excavationShed;
  }

  get total(): ITotal {
    return getTotal(this.items);
  }
}
