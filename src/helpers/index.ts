import { IBaseItem, IItem } from "../interfaces/Item"

export function getTotal(array: IItem[]): IBaseItem[] {
  const total: IBaseItem[] = []

  array.forEach(item => {
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

export function changeCount(
  array: IItem[],
  name: string,
  value: number
): void {
  array.forEach(item => {
    if (item.name === name) {
      item.count = value
    }
  })
}
