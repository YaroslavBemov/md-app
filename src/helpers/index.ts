import { IItem, IStore, ITotal } from "../interfaces";

export function getTotal(array: IItem[]): ITotal[] {
  const total: ITotal[] = [];

  array.forEach((item) => {
    const mult = item.mult ?? 1
    const resourse = (item.resourse && item.resourse > 1) ? item.resourse : 0

    if (item.count > 0) {
      if (total.length === 0) {
        total.push({
          title: item.title,
          name: item.name,
          count: item.count * mult,
          resourse: item.count * mult * resourse
        });

        item.recipe.forEach((recipeItem) => {
          total.push({
            title: recipeItem.title,
            name: recipeItem.name,
            count: 0 - recipeItem.count * item.count,
          });
        });
      } else {
        const detectedItem = total.find(
          (totalItem) => totalItem.name === item.name
        );

        if (detectedItem) {
          detectedItem.count += item.count * mult;
          if (detectedItem.resourse) {
            detectedItem.resourse += item.count * mult * resourse
          }
        } else {
          total.push({
            title: item.title,
            name: item.name,
            count: item.count * mult,
            resourse: item.count * mult * resourse
          });
        }
        item.recipe.forEach((recipeItem) => {
          const detectedRecipeItem = total.find(
            (totalRecipeItem) => totalRecipeItem.name === recipeItem.name
          );

          if (detectedRecipeItem) {
            detectedRecipeItem.count -= recipeItem.count * item.count;
          } else {
            total.push({
              title: recipeItem.title,
              name: recipeItem.name,
              count: 0 - recipeItem.count * item.count,
            });
          }
        });
      }
    }
  });

  return total;
}

export function changeCount(array: IItem[], name: string, value: number): void {
  array.forEach((item) => {
    if (item.name === name) {
      item.count = value;
    }
  });
}

export function saveToLS(store: IStore): void {
  localStorage.setItem(store.name, JSON.stringify(store.items))
}

export function removeFromLS(store: IStore): void {
  localStorage.removeItem(store.name)
}
