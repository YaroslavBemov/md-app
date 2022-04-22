import DiggerStore from "./DiggerStore";
import HunterStore from "./HunterStore";

import { IItem, IBaseItem } from '../interfaces/Item'
import { getTotal } from "../helpers";

export default class RootStore {
  hunterStore: HunterStore
  diggerStore: DiggerStore

  constructor() {
    this.hunterStore = new HunterStore(this)
    this.diggerStore = new DiggerStore(this)
  }

  get total(): IBaseItem[] {
    const items: IItem[] = [...this.hunterStore.items, ...this.diggerStore.items]

    return getTotal(items)
  }
}
