import { makeAutoObservable } from "mobx";
import { hunter } from "../data/hunting";
import { IBaseItem, IItem, IRootStore, IStore, ITotal } from "../interfaces";
import { getTotal, changeCount } from "../helpers";

export default class HunterStore implements IStore {
  rootStore;
  items: IItem[] = [];
  name = "Hunter";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    const savedItems = localStorage.getItem(this.name)
    this.items = savedItems ? JSON.parse(savedItems) : hunter
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value);
  }

  reset(): void {
    this.items = hunter
  }

  get total(): ITotal[] {
    return getTotal(this.items);
  }
}
