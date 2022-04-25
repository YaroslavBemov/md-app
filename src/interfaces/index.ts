export interface IBaseItem {
  title: string;
  name: string;
  count: number;
}

export interface IItem extends IBaseItem {
  mult?: number;
  recipe: IBaseItem[];
}

export interface IStore {
  rootStore: IRootStore;
  items: IItem[];
  name: string;
  changeCount: (name: string, value: number) => void;
  get total(): IBaseItem[];
}

export interface IRootStore {
  get total(): IBaseItem[];
  saveAll(): void
}
