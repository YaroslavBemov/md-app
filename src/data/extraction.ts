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
    resourses: {
      food: 0,
      water: 0,
      wood: 5
    },
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

export const mine: IItem[] = [
  {
    title: "Copper Ore",
    name: "copperOre",
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
    title: "Tin Ore",
    name: "tinOre",
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
    title: "Iron Ore",
    name: "ironOre",
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
    title: "Salt",
    name: "salt",
    count: 0,
    recipe: [
      {
        title: "Pickaxe",
        name: "pickaxe",
        count: 2,
      },
    ],
  },
];

export const well: IItem[] = [
  {
    title: "Bucket of Water",
    name: "bucketOfWater",
    count: 0,
    recipe: [
      {
        title: "Bucket",
        name: "bucket",
        count: 1,
      },
    ],
  },
  {
    title: "Waterskin with Water",
    name: "waterskinWithWater",
    count: 0,
    recipe: [
      {
        title: "Waterskin",
        name: "waterskin",
        count: 1,
      },
    ],
  },
];

export const herbalistHut: IItem[] = [
  {
    title: "Poison",
    name: "poison",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenvial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Deadly Nightshade",
        name: "deadlyNightshade",
        count: 5,
      },
    ],
  },
];
