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
    }
  };

  array.forEach((item) => {
    const mult = item.mult ?? 1;
    const portions = item.portions
    // if total items is empty push item and items from recipe
    if (item.count > 0) {
      if (total.itemsTotal.length === 0) {
        if (portions) {
          total.itemsTotal.push({
            title: item.title,
            name: item.name,
            count: item.count * mult,
            resourses: item.resourses,
            portions: item.count * portions
          });
        } else {
          total.itemsTotal.push({
            title: item.title,
            name: item.name,
            count: item.count * mult,
            resourses: item.resourses,
          });
        }

        item.recipe?.forEach((recipeItem) => {
          if (Object.keys(total.toolsTotal).includes(recipeItem.name)) {
            total.toolsTotal[recipeItem.name] = recipeItem.count * item.count
          } else {
            total.itemsTotal.push({
              title: recipeItem.title,
              name: recipeItem.name,
              count: 0 - recipeItem.count * item.count,
            });
          }
        });
        // else find item and change count
      } else {
        const detectedItem = total.itemsTotal.find(
          (totalItem) => totalItem.name === item.name
        );

        if (detectedItem) {
          detectedItem.count += item.count * mult;
        } else {

          if (portions) {
            total.itemsTotal.push({
              title: item.title,
              name: item.name,
              count: item.count * mult,
              resourses: item.resourses,
              portions: item.count * portions
            });
          } else {
            total.itemsTotal.push({
              title: item.title,
              name: item.name,
              count: item.count * mult,
              resourses: item.resourses,
            });
          }
        }
        // and change count from recipe if found
        item.recipe?.forEach((recipeItem) => {
          if (Object.keys(total.toolsTotal).includes(recipeItem.name)) {
            total.toolsTotal[recipeItem.name] += recipeItem.count * item.count
          } else {

            const detectedRecipeItem = total.itemsTotal.find(
              (totalRecipeItem) => totalRecipeItem.name === recipeItem.name
            );

            console.log(detectedRecipeItem);  //  undefind while bucketOfWater
            if (detectedRecipeItem) {
              if (detectedRecipeItem.portions !== undefined) {
                // TODO [WIP]
                detectedRecipeItem.portions -= recipeItem.count * item.count
                // @ts-ignore
                detectedRecipeItem.count = Math.floor(detectedRecipeItem.portions / portions)
              } else {
                console.log('here');

                detectedRecipeItem.count -= recipeItem.count * item.count;
              }
            } else {
              if (Object.keys(total.toolsTotal).includes(recipeItem.name)) {
                total.toolsTotal[recipeItem.name] = recipeItem.count * item.count
              } else {
                total.itemsTotal.push({
                  title: recipeItem.title,
                  name: recipeItem.name,
                  count: 0 - recipeItem.count * item.count,
                });
              }
            }
          }
        });
      }
    }
  });
  // calculate total resourses
  total.itemsTotal.forEach((item) => {
    if (item.count > 0 && item.resourses !== undefined) {
      if (item.resourses.food !== undefined) {
        // @ts-ignore
        total.resoursesTotal.food += item.resourses.food * item.count;
      }
      if (item.resourses.water !== undefined) {
        // @ts-ignore
        total.resoursesTotal.water += item.resourses.water * item.portions;
      }
      if (item.resourses.wood !== undefined) {
        // @ts-ignore
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
