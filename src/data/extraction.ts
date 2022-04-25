import { IItem } from "../interfaces";

export const excavationShed: IItem[] = [
  {
    title: "Stone",
    name: "stone",
    count: 0,
    recipe: [
      {
        title: "Pickaxe",
        name: "pickaxe",
        count: 2,
      },
    ],
  },
  {
    title: "Limestone",
    name: "limestone",
    count: 0,
    recipe: [
      {
        title: "Pickaxe",
        name: "pickaxe",
        count: 2,
      },
    ],
  },
  {
    title: "Clay",
    name: "clay",
    count: 0,
    recipe: [
      {
        title: "Shovel",
        name: "shovel",
        count: 2,
      },
    ],
  },
];

export const woodshed: IItem[] = [
  {
    title: "Log",
    name: "log",
    count: 0,
    recipe: [
      {
        title: "Axe",
        name: "axe",
        count: 2,
      },
    ],
  },
  {
    title: "Stick",
    name: "stick",
    count: 0,
    recipe: [],
  },
  {
    title: "Firewood",
    name: "firewood",
    count: 0,
    mult: 4,
    recipe: [
      {
        title: "Axe",
        name: "axe",
        count: 1,
      },
      {
        title: "Log",
        name: "log",
        count: 1,
      },
    ],
  },
  {
    title: "Plank",
    name: "plank",
    count: 0,
    mult: 2,
    recipe: [
      {
        title: "Axe",
        name: "axe",
        count: 1,
      },
      {
        title: "Log",
        name: "log",
        count: 1,
      },
    ],
  },
];
