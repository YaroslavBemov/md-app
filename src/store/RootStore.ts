import DiggerStore from "./DiggerStore";
import HunterStore from "./HunterStore";

export default class RootStore {
  hunterStore: HunterStore
  diggerStore: DiggerStore

  constructor() {
    this.hunterStore = new HunterStore(this)
    this.diggerStore = new DiggerStore(this)
  }
}
