import { IItem, IStore, ITotal } from "../interfaces";

export function mergeTotal(array: ITotal[]): ITotal {
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
  }

  // merge items
  array.forEach(storeTotal => {

    storeTotal.itemsTotal.forEach(storeItem => {

      if (total.itemsTotal.length === 0) {

        const tempItem = {
          title: storeItem.title,
          name: storeItem.name,
          count: storeItem.count
        }
        if (storeItem.portions) {
          Object.assign(tempItem, { portions: storeItem.portions });
        }
        total.itemsTotal.push(tempItem)

      } else {

        const detectedItem = total.itemsTotal.find(totalItem =>
          totalItem.name === storeItem.name
        )

        if (detectedItem) {

          if (detectedItem.name === 'bucketOfWater') {

            // detected         store
            // count: -1        count: 1
            //                  portions: 10
            // count: 1         count: 1
            // portions: 10     portions: 10

            if (storeItem.count > 0) {
              console.log('> 0');
              console.log('detectedItem.count ' + detectedItem.count);  //  -5
              console.log('detectedItem.portions ' + detectedItem.portions);  //  undefined
              console.log('storeItem.count' + storeItem.count); //  1
              console.log('storeItem.portions ' + storeItem.portions);  //  10


              detectedItem.count = storeItem.count
              if (storeItem.portions) {
                if (detectedItem.portions) {
                  detectedItem.portions -= detectedItem.count
                } else {
                  detectedItem.portions = storeItem.portions - detectedItem.count;
                }
              }
            } else {
              console.log('else');

              if (detectedItem.portions) {
                detectedItem.portions += storeItem.count
              } else {
                Object.assign(detectedItem, { portions: 0 - storeItem.count })
              }
            }

            // if (storeItem.count < 0) {
            //   console.log(-1);
            //   if (detectedItem.portions) {
            //     detectedItem.portions += storeItem.count
            //   } else {
            //     Object.assign(detectedItem, { portions: 0 - storeItem.count })
            //   }
            // } else {
            //   detectedItem.count = storeItem.count
            //   if (detectedItem.portions) {
            //     detectedItem.portions += storeItem.portions
            //   }

            // }

          } else {
            detectedItem.count += storeItem.count
            if (detectedItem.portions && storeItem.portions) {
              detectedItem.portions += storeItem.portions
            }
          }

        } else {
          const tempItem = {
            title: storeItem.title,
            name: storeItem.name,
            count: storeItem.count
          }
          if (storeItem.portions) {
            Object.assign(tempItem, { portions: storeItem.portions });
          }
          total.itemsTotal.push(tempItem)
        }

      }

    })
  })

  // merge resourses
  array.forEach(storeTotal => {
    Object.keys(total.resoursesTotal).forEach(resourse => {
      // @ts-ignore
      total.resoursesTotal[resourse] += storeTotal.resoursesTotal[resourse]
    })
  })

  // merge tools
  array.forEach(storeTotal => {
    Object.keys(total.toolsTotal).forEach(tool => {
      // @ts-ignore
      total.toolsTotal[tool] += storeTotal.toolsTotal[tool]
    })
  })

  return total
}

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
          // @ts-ignore
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
      total.resoursesTotal.food += item.resourses.food * item.count;
    }
    if (item.resourses?.water) {
      if (item.portions !== undefined) {
        total.resoursesTotal.water += item.resourses.water * item.portions;
      } else {
        total.resoursesTotal.water += item.resourses.water * item.count;
      }
    }
    if (item.resourses?.wood) {
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
