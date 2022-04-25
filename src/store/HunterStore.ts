import { makeAutoObservable } from "mobx";
import { hunter } from "../data/hunting";
import { IBaseItem, IItem, IRootStore, IStore } from "../interfaces";
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

  get total(): IBaseItem[] {
    return getTotal(this.items);
  }
}
