import { makeAutoObservable, toJS } from "mobx";
import { hunter } from "../data/mining";

interface IMaterial {
  [key: string]: number
}

interface ITool {
  title: string
  name: string
  dur: number
}

interface IRecipe {
  materials?: IMaterial[]
  tools: ITool[]
}

interface IItem {
  title: string
  name: string
  count: number
  recipe: IRecipe
}

export default class HunterStore {
  rootStore
  items: IItem[] = hunter
  materialsTotal: IMaterial[] = []
  toolsTotal: ITool[] = []

  constructor(rootStore: any) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  changeCount(name: string, value: number) {
    this.items.forEach(item => {
      if (item.name === name) {
        item.count = value

        if (this.toolsTotal.length === 0) {
          this.toolsTotal.push(...item.recipe.tools)
        }
        // TODO not work
        item.recipe.tools.forEach(tool => {
          this.toolsTotal.forEach(totalTool => {
            if (tool.name === totalTool.name) {
              totalTool.dur += tool.dur * value
            }
          })
        })


      }
    })
  }

  // get necessary(): ITool {
  //   const tools = []

  //   this.items.forEach(item => {
  //     if (item.count > 0) {
  //       Object.assign(tools, {
  //         tool: item.recipe.tools.tool,
  //         dur: +item.recipe.tools.dur * item.count + tools.dur
  //       })
  //     }
  //   })

  //   return tools
  // }
}
