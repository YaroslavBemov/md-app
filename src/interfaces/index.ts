export interface IBaseItem {
  title: string;
  name: string;
  count: number;
}

export interface IItem extends IBaseItem {
  mult?: number;
  resourse?: number;
  recipe: IBaseItem[];
}

export type ITotal = Omit<IItem, "recipe">;

export interface IStore {
  rootStore: IRootStore;
  items: IItem[];
  name: string;
  changeCount: (name: string, value: number) => void;
  reset(): void;
  get total(): IBaseItem[];
}

export interface IRootStore {
  get total(): IBaseItem[];
  saveAll(): void;
}
