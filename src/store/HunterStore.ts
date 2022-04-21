import { makeAutoObservable, toJS } from "mobx";
import { hunter } from "../data/mining";
import { IItem, IBaseItem } from '../interfaces/Item'

export default class HunterStore {
  rootStore
  items: IItem[] = hunter

  constructor(rootStore: any) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  changeCount(name: string, value: number) {
    this.items.forEach(item => {
      if (item.name === name) {
        item.count = value
      }
    })
  }
  get total(): IBaseItem[] {
    const total: IBaseItem[] = []

    this.items.forEach(item => {
      if (item.count > 0) {

        if (total.length === 0) {

          total.push({
            title: item.title,
            name: item.name,
            count: item.count
          })

          item.recipe.forEach(recipeItem => {
            total.push({
              title: recipeItem.title,
              name: recipeItem.name,
              count: 0 - recipeItem.count * item.count
            })
          })

        } else {

          const detectedItem = total.find(totalItem => totalItem.name === item.name)

          if (detectedItem) {
            detectedItem.count += item.count
          } else {
            total.push({
              title: item.title,
              name: item.name,
              count: item.count
            })
          }
          item.recipe.forEach(recipeItem => {

            const detectedRecipeItem = total.find(totalRecipeItem => totalRecipeItem.name === recipeItem.name)

            if (detectedRecipeItem) {
              detectedRecipeItem.count -= recipeItem.count * item.count
            } else {
              total.push({
                title: recipeItem.title,
                name: recipeItem.name,
                count: 0 - recipeItem.count * item.count
              })
            }
          })
        }
      }
    })

    return total
  }

}
