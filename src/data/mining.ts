import { IItem } from '../interfaces/Item'

export const hunter: IItem[] = [
  {
    title: 'Raw meat',
    name: 'rawMeat',
    count: 0,
    recipe: {
      tools: [
        {
          title: 'Knife',
          name: 'knife',
          dur: 2
        }
      ],
    }
  },
  {
    title: 'Leather',
    name: 'leather',
    count: 0,
    recipe: {
      tools: [
        {
          title: 'Knife',
          name: 'knife',
          dur: 1
        }
      ],
      materials: [
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
      ]
    }
  },
  {
    title: 'Feather',
    name: 'feather',
    count: 0,
    recipe: {
      tools: [
        {
          title: 'Knife',
          name: 'knife',
          dur: 1
        },
        {
          title: 'Axe',
          name: 'axe',
          dur: 1
        }
      ],
      materials: [
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
      ]
    }
  }
]
