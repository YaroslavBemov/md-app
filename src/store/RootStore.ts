import HunterStore from "./HunterStore";

export default class RootStore {
  hunterStore: HunterStore

  constructor() {
    this.hunterStore = new HunterStore(this)
  }
}
