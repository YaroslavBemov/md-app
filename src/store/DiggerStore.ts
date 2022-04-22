import { makeAutoObservable } from "mobx";
import { digger } from "../data/mining";
import { IItem, IBaseItem } from '../interfaces/Item'
import { getTotal, changeCount } from "../helpers";

export default class DiggerStore {
  rootStore
  items: IItem[] = digger

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
