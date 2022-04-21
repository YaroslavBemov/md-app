
interface IBaseItem {
  title: string
  name: string
}

export interface IMaterial extends IBaseItem {
  count: number
}

export interface ITool extends IBaseItem {
  dur: number
}

interface IRecipe {
  materials?: IMaterial[]
  tools?: ITool[]
}

export interface IItem extends IBaseItem {
  count: number
  recipe: IRecipe
}
