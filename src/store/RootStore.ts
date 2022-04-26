import ExcavationShedStore from "./ExcavationShedStore";
import HunterStore from "./HunterStore";
import WoodshedStore from "./WoodshedStore";
import SmithyStore from "./SmithyStore";

import { IItem, IBaseItem, IRootStore } from "../interfaces";
import { getTotal, removeFromLS, saveToLS } from "../helpers";
import UIStore from "./UiStore";

export default class RootStore implements IRootStore {
  uiStore: UIStore
  hunterStore: HunterStore;
  excavationShedStore: ExcavationShedStore;
  woodshedStore: WoodshedStore;
  smithyStore: SmithyStore;

  constructor() {
    this.uiStore = new UIStore(this)
    this.hunterStore = new HunterStore(this);
    this.excavationShedStore = new ExcavationShedStore(this);
    this.woodshedStore = new WoodshedStore(this);
    this.smithyStore = new SmithyStore(this);
  }

  get total(): IBaseItem[] {
    const items: IItem[] = [
      ...this.hunterStore.items,
      ...this.excavationShedStore.items,
      ...this.woodshedStore.items,
      ...this.smithyStore.items,
    ];

    return getTotal(items);
  }

  saveAll = () => {
    saveToLS(this.hunterStore)
    saveToLS(this.excavationShedStore)
    saveToLS(this.woodshedStore)
    saveToLS(this.smithyStore)
  }

  clearAll = () => {
    removeFromLS(this.hunterStore)
    this.hunterStore.reset()

    removeFromLS(this.excavationShedStore)
    this.excavationShedStore.reset()

    removeFromLS(this.woodshedStore)
    this.woodshedStore.reset()

    removeFromLS(this.smithyStore)
    this.smithyStore.reset()
  }
}
