import ExcavationShedStore from "./ExcavationShedStore";
import HunterStore from "./HunterStore";
import WoodshedStore from "./WoodshedStore";
import SmithyStore from "./SmithyStore";

import { IItem, IBaseItem, IRootStore } from "../interfaces";
import { getTotal } from "../helpers";
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
}
