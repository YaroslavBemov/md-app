import { IItem } from '../interfaces/Item'

export const digger: IItem[] = [
  {
    title: 'Stone',
    name: 'stone',
    count: 0,
    recipe: [
      {
        title: 'Pickaxe',
        name: 'pickaxe',
        count: 2
      }
    ],
  },
  {
    title: 'Limestone',
    name: 'limestone',
    count: 0,
    recipe: [
      {
        title: 'Pickaxe',
        name: 'pickaxe',
        count: 2
      }
    ],
  },
  {
    title: 'Clay',
    name: 'clay',
    count: 0,
    recipe: [
      {
        title: 'Shovel',
        name: 'shovel',
        count: 2
      }
    ],
  }
]
