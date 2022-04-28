export interface IBaseItem {
  title: string;
  name: string;
  count: number;
}

export interface IResourses {
  food?: number;
  water?: number;
  wood?: number;
}

export interface ITools {
  [key: string]: number;
}

export interface IItem extends IBaseItem {
  mult?: number;
  resourses?: IResourses;
  durability?: number;
  portions?: number;
  recipe?: IBaseItem[];
}

export interface ITotal {
  itemsTotal: IItem[];
  resoursesTotal: IResourses;
  toolsTotal: ITools;
}

export interface IStore {
  rootStore: IRootStore;
  items: IItem[];
  name: string;
  changeCount: (name: string, value: number) => void;
  reset(): void;
  get total(): ITotal;
}

export interface IRootStore {
  get total(): ITotal;
  saveAll(): void;
}
