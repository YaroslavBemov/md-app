import { makeAutoObservable } from "mobx";
import { IRootStore } from "../interfaces";

export type Mode = "light" | "dark";

export default class UIStore {
  rootStore: any;
  mode: Mode = "dark";

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  toggleMode() {
    this.mode === "light" ? this.setMode("dark") : this.setMode("light");
  }

  setMode(state: Mode) {
    this.mode = state;
    localStorage.setItem("mode", state);
  }
}
