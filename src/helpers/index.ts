import { IItem, IResourses, IStore, ITotal } from "../interfaces";

export function getTotal(array: IItem[]): ITotal {
  const total: ITotal = {
    itemsTotal: [],
    resoursesTotal: {
      food: 0,
      water: 0,
      wood: 0
    }
  };

  array.forEach((item) => {
    const mult = item.mult ?? 1

    item.resourses?.food ? total.resoursesTotal.food += item.resourses.food * item.count * mult : null
    item.resourses?.water ? total.resoursesTotal.water += item.resourses.water * item.count * mult : null
    item.resourses?.wood ? total.resoursesTotal.wood += item.resourses.wood * item.count * mult : null

    if (item.count > 0) {
      if (total.itemsTotal.length === 0) {

        total.itemsTotal.push({
          title: item.title,
          name: item.name,
          count: item.count * mult,
        });

        item.recipe.forEach((recipeItem) => {
          total.itemsTotal.push({
            title: recipeItem.title,
            name: recipeItem.name,
            count: 0 - recipeItem.count * item.count,
          });
        });

      } else {

        const detectedItem = total.itemsTotal.find(
          (totalItem) => totalItem.name === item.name
        );

        if (detectedItem) {
          detectedItem.count += item.count * mult;
        } else {
          total.itemsTotal.push({
            title: item.title,
            name: item.name,
            count: item.count * mult,
          });
        }

        item.recipe.forEach((recipeItem) => {
          const detectedRecipeItem = total.itemsTotal.find(
            (totalRecipeItem) => totalRecipeItem.name === recipeItem.name
          );

          if (detectedRecipeItem) {
            detectedRecipeItem.count -= recipeItem.count * item.count;
          } else {
            total.itemsTotal.push({
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
