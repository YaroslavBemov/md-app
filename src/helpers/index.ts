import { toJS } from "mobx";
import { IItem, IResourses, IStore, ITotal } from "../interfaces";

export function getTotal(array: IItem[]): ITotal {
  const total: ITotal = {
    itemsTotal: [],
    resoursesTotal: {
      food: 0,
      water: 0,
      wood: 0,
    },
  };

  array.forEach((item) => {
    const mult = item.mult ?? 1;
    // if total items is empty push item and items from recipe
    if (item.count > 0) {
      if (total.itemsTotal.length === 0) {
        total.itemsTotal.push({
          title: item.title,
          name: item.name,
          count: item.count * mult,
          resourses: item.resourses,
        });

        item.recipe?.forEach((recipeItem) => {
          total.itemsTotal.push({
            title: recipeItem.title,
            name: recipeItem.name,
            count: 0 - recipeItem.count * item.count,
          });
        });
        // else find item and change count
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
            resourses: item.resourses,
          });
        }
        // and change count from recipe if found
        item.recipe?.forEach((recipeItem) => {
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
  // calculate total resourses
  total.itemsTotal.forEach((item) => {
    if (item.resourses !== undefined) {
      if (item.resourses.food !== undefined) {
        total.resoursesTotal.food += item.resourses.food * item.count;
      }
      if (item.resourses.water !== undefined) {
        total.resoursesTotal.water += item.resourses.water * item.count;
      }
      if (item.resourses.wood !== undefined) {
        total.resoursesTotal.wood += item.resourses.wood * item.count;
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
  localStorage.setItem(store.name, JSON.stringify(store.items));
}

export function removeFromLS(store: IStore): void {
  localStorage.removeItem(store.name);
}
