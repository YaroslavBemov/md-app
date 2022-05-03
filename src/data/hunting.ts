import { IItem } from "../interfaces";

export const hunter: IItem[] = [
  {
    title: "Meat",
    name: "meat",
    count: 0,
    recipe: [
      {
        title: "Knife",
        name: "knife",
        count: 2,
      },
    ],
  },
  {
    title: "Dried meat",
    name: "driedMeat",
    count: 0,
    resourses: { food: 5 },
    recipe: [
      {
        title: "Meat",
        name: "meat",
        count: 1,
      },
    ],
  },
  {
    title: "Salted meat",
    name: "saltedMeat",
    count: 0,
    resourses: { food: 7, water: -2 },
    recipe: [
      {
        title: "Meat",
        name: "meat",
        count: 1,
      },
      {
        title: "Salt",
        name: "salt",
        count: 1,
      },
    ],
  },
  {
    title: "Leather",
    name: "leather",
    count: 0,
    recipe: [
      {
        title: "Knife",
        name: "knife",
        count: 1,
      },
    ],
  },
  {
    title: "Fur",
    name: "fur",
    count: 0,
    recipe: [
      {
        title: "Knife",
        name: "knife",
        count: 1,
      },
    ],
  },
  {
    title: "Feather",
    name: "feather",
    count: 0,
    recipe: [],
  },
];

export const fisher: IItem[] = [
  {
    title: "Fish Meat",
    name: "fishMeat",
    count: 0,
    resourses: { food: 4 },
    recipe: [
      {
        title: "Fishing Spear",
        name: "fishingSpear",
        count: 0.3,
      },
    ],
  },
  {
    title: "Salted Fish Meat",
    name: "saltedFishMeat",
    count: 0,
    resourses: { food: 4, water: -2 },
    recipe: [
      {
        title: "Fish Meat",
        name: "fishMeat",
        count: 1,
      },
      {
        title: "Salt",
        name: "salt",
        count: 1,
      },
    ],
  },
  {
    title: "Dried Fish Meat",
    name: "driedFishMeat",
    count: 0,
    resourses: { food: 7 },
    recipe: [
      {
        title: "Fish Meat",
        name: "fishMeat",
        count: 1,
      },
    ],
  },
  {
    title: "Fish Meat",
    name: "fishMeat",
    count: 0,
    recipe: [
      {
        title: "Knife",
        name: "knife",
        count: 2,
      },
      {
        title: "Roach",
        name: "roach",
        count: 1,
      },
    ],
  },
  {
    title: "Fish Meat",
    name: "fishMeat",
    count: 0,
    mult: 4,
    recipe: [
      {
        title: "Knife",
        name: "knife",
        count: 2,
      },
      {
        title: "Perch",
        name: "perch",
        count: 1,
      },
    ],
  },
  {
    title: "Fish Meat",
    name: "fishMeat",
    count: 0,
    mult: 7,
    recipe: [
      {
        title: "Knife",
        name: "knife",
        count: 2,
      },
      {
        title: "Pike",
        name: "pike",
        count: 1,
      },
    ],
  },
];
