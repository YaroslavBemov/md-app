import UIStore from "./UiStore";
import HunterStore from "./HunterStore";
import ExcavationShedStore from "./ExcavationShedStore";
import WoodshedStore from "./WoodshedStore";
import SmithyStore from "./SmithyStore";
import KitchenStore from "./KitchenStore";
import MineStore from "./MineStore";
import HerbalistStore from "./HerbalistStore";
import WellStore from "./WellStore";
import SewingStore from "./SewingStore";
import WorkshopStore from "./WorkshopStore";

import { IItem, IRootStore, ITotal } from "../interfaces";
import { getTotal, removeFromLS, saveToLS } from "../helpers";

export default class RootStore implements IRootStore {
  uiStore: UIStore;
  hunterStore: HunterStore;
  excavationShedStore: ExcavationShedStore;
  woodshedStore: WoodshedStore;
  smithyStore: SmithyStore;
  kitchenStore: KitchenStore;
  mineStore: MineStore;
  herbalistStore: HerbalistStore;
  wellStore: WellStore;
  sewingStore: SewingStore;
  workshopStore: WorkshopStore;

  constructor() {
    this.uiStore = new UIStore(this);
    this.hunterStore = new HunterStore(this);
    this.excavationShedStore = new ExcavationShedStore(this);
    this.woodshedStore = new WoodshedStore(this);
    this.smithyStore = new SmithyStore(this);
    this.kitchenStore = new KitchenStore(this);
    this.mineStore = new MineStore(this);
    this.herbalistStore = new HerbalistStore(this);
    this.wellStore = new WellStore(this);
    this.sewingStore = new SewingStore(this);
    this.workshopStore = new WorkshopStore(this);
  }

  get total(): ITotal {
    const items: IItem[] = [
      ...this.hunterStore.items,
      ...this.excavationShedStore.items,
      ...this.woodshedStore.items,
      ...this.smithyStore.items,
      ...this.kitchenStore.items,
      ...this.mineStore.items,
      ...this.herbalistStore.items,
      ...this.wellStore.items,
      ...this.sewingStore.items,
      ...this.workshopStore.items,
    ];

    return getTotal(items);
  }

  saveAll = () => {
    saveToLS(this.hunterStore);
    saveToLS(this.excavationShedStore);
    saveToLS(this.woodshedStore);
    saveToLS(this.smithyStore);
    saveToLS(this.kitchenStore);
    saveToLS(this.mineStore);
    saveToLS(this.herbalistStore);
    saveToLS(this.wellStore);
    saveToLS(this.sewingStore);
    saveToLS(this.workshopStore);
  };

  clearAll = () => {
    removeFromLS(this.hunterStore);
    this.hunterStore.reset();

    removeFromLS(this.excavationShedStore);
    this.excavationShedStore.reset();

    removeFromLS(this.woodshedStore);
    this.woodshedStore.reset();

    removeFromLS(this.smithyStore);
    this.smithyStore.reset();

    removeFromLS(this.kitchenStore);
    this.kitchenStore.reset();

    removeFromLS(this.mineStore);
    this.mineStore.reset();

    removeFromLS(this.herbalistStore);
    this.herbalistStore.reset();

    removeFromLS(this.wellStore);
    this.wellStore.reset();

    removeFromLS(this.sewingStore);
    this.sewingStore.reset();

    removeFromLS(this.workshopStore);
    this.workshopStore.reset();
  };
}
