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

import TotalStore from "./TotalStore";

export default class RootStore {
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
  totalStore: TotalStore;

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
    this.totalStore = new TotalStore(this);
  }
}
