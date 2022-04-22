import { makeAutoObservable } from "mobx";
import { hunter } from "../data/hunting";
import { IItem, IBaseItem } from '../interfaces/Item'
import { getTotal, changeCount } from "../helpers";

export default class HunterStore {
  rootStore
  items: IItem[] = hunter

  constructor(rootStore: any) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  changeCount(name: string, value: number): void {
    changeCount(this.items, name, value)
  }

  get total(): IBaseItem[] {
    return getTotal(this.items)
  }

}
