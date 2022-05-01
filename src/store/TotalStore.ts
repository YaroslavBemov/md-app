import { makeAutoObservable } from "mobx";
import { getTotal, removeFromLS, saveToLS } from "../helpers";
import { IItem, ITotal, ITotalStore } from "../interfaces";

export default class TotalStore implements ITotalStore {
  rootStore;
  name = "Total";

  constructor(rootStore: any) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get total(): ITotal {
    const items: IItem[] = [
      ...this.rootStore.hunterStore.items,
      ...this.rootStore.excavationShedStore.items,
      ...this.rootStore.woodshedStore.items,
      ...this.rootStore.smithyStore.items,
      ...this.rootStore.kitchenStore.items,
      ...this.rootStore.mineStore.items,
      ...this.rootStore.herbalistStore.items,
      ...this.rootStore.wellStore.items,
      ...this.rootStore.sewingStore.items,
      ...this.rootStore.workshopStore.items,
    ];

    return getTotal(items);
  }

  saveAll = () => {
    saveToLS(this.rootStore.hunterStore);
    saveToLS(this.rootStore.excavationShedStore);
    saveToLS(this.rootStore.woodshedStore);
    saveToLS(this.rootStore.smithyStore);
    saveToLS(this.rootStore.kitchenStore);
    saveToLS(this.rootStore.mineStore);
    saveToLS(this.rootStore.herbalistStore);
    saveToLS(this.rootStore.wellStore);
    saveToLS(this.rootStore.sewingStore);
    saveToLS(this.rootStore.workshopStore);
  };

  clearAll = () => {
    removeFromLS(this.rootStore.hunterStore);
    this.rootStore.hunterStore.reset();

    removeFromLS(this.rootStore.excavationShedStore);
    this.rootStore.excavationShedStore.reset();

    removeFromLS(this.rootStore.woodshedStore);
    this.rootStore.woodshedStore.reset();

    removeFromLS(this.rootStore.smithyStore);
    this.rootStore.smithyStore.reset();

    removeFromLS(this.rootStore.kitchenStore);
    this.rootStore.kitchenStore.reset();

    removeFromLS(this.rootStore.mineStore);
    this.rootStore.mineStore.reset();

    removeFromLS(this.rootStore.herbalistStore);
    this.rootStore.herbalistStore.reset();

    removeFromLS(this.rootStore.wellStore);
    this.rootStore.wellStore.reset();

    removeFromLS(this.rootStore.sewingStore);
    this.rootStore.sewingStore.reset();

    removeFromLS(this.rootStore.workshopStore);
    this.rootStore.workshopStore.reset();
  };
}
