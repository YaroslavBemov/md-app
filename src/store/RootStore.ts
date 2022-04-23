import ExcavationShedStore from "./ExcavationShedStore";
import HunterStore from "./HunterStore";
import WoodshedStore from "./WoodshedStore";
import SmithyStore from "./SmithyStore";

import { IItem, IBaseItem, IRootStore } from "../interfaces";
import { getTotal } from "../helpers";

export default class RootStore implements IRootStore {
  hunterStore: HunterStore;
  excavationShedStore: ExcavationShedStore;
  woodshedStore: WoodshedStore;
  smithyStore: SmithyStore;

  constructor() {
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
