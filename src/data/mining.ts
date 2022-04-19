export const hunter = [
  {
    title: 'Raw meat',
    name: 'rawMeat',
    recipe: {
      knife: 2
    }
  },
  {
    title: 'Leather',
    name: 'leather',
    recipe: {
      knife: 1
    }
  },
  {
    title: 'Feather',
    name: 'feather',
    recipe: {}
  }]

export interface IItem {
  title: string
  name: string
  recipe: object
}
