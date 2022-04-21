
export interface IBaseItem {
  title: string
  name: string
  count: number
}

export interface IItem extends IBaseItem {
  recipe: IBaseItem[]
}
