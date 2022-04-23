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
    recipe: [
      {
        title: "Meat",
        name: "meat",
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
