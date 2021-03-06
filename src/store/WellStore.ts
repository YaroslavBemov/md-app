import { makeAutoObservable } from "mobx";
import { well } from "../data/extraction";
import { changeCount, getTotal } from "../helpers";
import { IItem, IStore, ITotal } from "../interfaces";

export default class WellStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Well";

  constructor(rootStore: any) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name);
    this.items = savedItems ? JSON.parse(savedItems) : well;
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = well;
  }

  get total(): ITotal {
    return getTotal(this.items);
  }
}
