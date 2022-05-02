import { IItem, IStore, ITotal } from "../interfaces";

export function getTotal(array: IItem[]): ITotal {
  const total: ITotal = {
    itemsTotal: [],
    resoursesTotal: {
      food: 0,
      water: 0,
      wood: 0,
    },
    toolsTotal: {
      hummer: 0,
      axe: 0,
      knife: 0,
      pickaxe: 0,
      shovel: 0,
    },
  };

  const tempArray = array.filter((item: IItem) => item.count > 0);

  if (tempArray.length > 0) {
    tempArray.forEach((item: IItem) => {
      const mult = item.mult ?? 1;

      const tempItem = {
        title: item.title,
        name: item.name,
        count: item.count * mult,
        recipe: item.recipe,
      };

      if (item.portions) {
        Object.assign(tempItem, { portions: item.count * item.portions });
      }

      if (item.resourses) {
        Object.assign(tempItem, { resourses: item.resourses });
      }

      total.itemsTotal.push(tempItem);
    });
  }

  if (total.itemsTotal.length > 0) {
    total.itemsTotal.forEach((item) => {
      item.recipe?.forEach((recipeItem) => {
        if (Object.keys(total.toolsTotal).includes(recipeItem.name)) {
          total.toolsTotal[recipeItem.name] -= recipeItem.count * item.count;
        } else {
          const detectedRecipeItem = total.itemsTotal.find(
            (totalRecipeItem) => totalRecipeItem.name === recipeItem.name
          );

          if (detectedRecipeItem) {
            if (detectedRecipeItem.portions) {
              detectedRecipeItem.portions -=
                recipeItem.count * Math.abs(item.count);
            } else {
              detectedRecipeItem.count -=
                recipeItem.count * Math.abs(item.count);
            }
          } else {
            total.itemsTotal.push({
              title: recipeItem.title,
              name: recipeItem.name,
              count: 0 - recipeItem.count * Math.abs(item.count),
            });
          }
        }
      });
    });
  }

  // calculate total resourses
  total.itemsTotal.forEach((item) => {
    if (item.resourses?.food) {
      // @ts-ignore
      total.resoursesTotal.food += item.resourses.food * item.count;
    }
    if (item.resourses?.water) {
      if (item.portions !== undefined) {
        // @ts-ignore
        total.resoursesTotal.water += item.resourses.water * item.portions;
      } else {
        // @ts-ignore
        total.resoursesTotal.water += item.resourses.water * item.count;
      }
    }
    if (item.resourses?.wood) {
      // @ts-ignore
      total.resoursesTotal.wood += item.resourses.wood * item.count;
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
