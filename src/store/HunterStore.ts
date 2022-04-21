import { makeAutoObservable, toJS } from "mobx";
import { hunter } from "../data/mining";
import { IItem, ITool, IMaterial } from '../interfaces/Item'

export default class HunterStore {
  rootStore
  items: IItem[] = hunter

  constructor(rootStore: any) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  changeCount(name: string, value: number) {
    this.items.forEach(item => {
      if (item.name === name) {
        item.count = value
      }
    })
  }
  get totalTools(): ITool[] {
    const tools: ITool[] = []

    this.items.forEach(item => {
      if (item.count > 0) {

        item.recipe.tools?.forEach(recipeTool => {

          if (tools.length === 0) {
            tools.push({
              title: recipeTool.title,
              name: recipeTool.name,
              dur: 0 - recipeTool.dur * item.count
            })
          } else {
            tools.forEach(tool => {

              if (tool.name === recipeTool.name) {
                tool.dur -= item.count * recipeTool.dur
              } else {
                tools.push({
                  title: recipeTool.title,
                  name: recipeTool.name,
                  dur: 0 - recipeTool.dur * item.count
                })
              }
            })
          }
        })
      }
    })

    return tools
  }

  get totalMaterials(): IMaterial[] {
    const materials: IMaterial[] = []

    this.items.forEach(item => {
      if (item.count > 0) {

        item.recipe.materials?.forEach(recipeMaterial => {

          if (materials.length === 0) {
            materials.push({
              title: recipeMaterial.title,
              name: recipeMaterial.name,
              count: 0 - recipeMaterial.count * item.count
            })
          } else {
            materials.forEach(material => {

              if (material.name === recipeMaterial.name) {
                material.count -= item.count * recipeMaterial.count
              } else {
                materials.push({
                  title: recipeMaterial.title,
                  name: recipeMaterial.name,
                  count: 0 - recipeMaterial.count * item.count
                })
              }
            })
          }
        })
      }
    })

    return materials
  }
}
