export const smith = {
  hummer: {
    title: 'Hummer',
    recipe: {
      materials: {
        log: 1,
        branch: 5
      },
      tools: {}
    }
  },
  knife: {
    title: 'Knife',
    recipe: {
      materials: {
        branch: 5,
        stone: 2
      },
      tools: {
        hummer: 1
      }
    }
  },
  axe: {
    title: 'Axe',
    recipe: {
      materials: {
        branch: 5,
        stone: 3
      },
      tools: {
        hummer: 2
      }
    }
  }
}
