import { IItem } from '../interfaces/Item'

export const hunter: IItem[] = [
  {
    title: 'Raw meat',
    name: 'rawMeat',
    count: 0,
    recipe: [
      {
        title: 'Knife',
        name: 'knife',
        count: 2
      }
    ],
  },
  {
    title: 'Leather',
    name: 'leather',
    count: 0,
    recipe: [
      {
        title: 'Knife',
        name: 'knife',
        count: 1
      },
      {
        title: 'Log',
        name: 'log',
        count: 1
      },
      {
        title: 'Raw meat',
        name: 'rawMeat',
        count: 1
      }
    ],
  },
  {
    title: 'Feather',
    name: 'feather',
    count: 0,
    recipe: [
      {
        title: 'Knife',
        name: 'knife',
        count: 1
      },
      {
        title: 'Axe',
        name: 'axe',
        count: 1
      },
      {
        title: 'Log',
        name: 'log',
        count: 2
      },
      {
        title: 'Branch',
        name: 'branch',
        count: 4
      }
    ],
  }
]
