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

export interface IResoursesTotal {
  food: number;
  water: number;
  wood: number;
}

export interface ITools {
  hummer?: number;
  axe?: number;
  knife?: number;
  pickaxe?: number;
  shovel?: number;
}

export interface IToolsTotal {
  hummer: number;
  axe: number;
  knife: number;
  pickaxe: number;
  shovel: number;
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
  resoursesTotal: IResoursesTotal;
  toolsTotal: IToolsTotal;
}

export interface IStore {
  rootStore: any;
  items: IItem[];
  name: string;
  changeCount: (name: string, value: number) => void;
  reset(): void;
  get total(): ITotal;
}

export interface ITotalStore {
  rootStore: any;
  name: string;
  get total(): ITotal;
}

// export interface IRootStore {
//   [index: string]: IStore;
// }

export interface IFeedbackData {
  name: string;
  feedback: string;
  email?: string;
}

export type Status = "success" | "error";

export interface ISnackData {
  status: Status;
  message: string;
  open: boolean;
}
