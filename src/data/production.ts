import { IItem } from "../interfaces";

export const smithy: IItem[] = [
  {
    title: "Wooden Hummer",
    name: "woodenHummer",
    count: 0,
    recipe: [
      {
        title: "Log",
        name: "log",
        count: 1,
      },
      {
        title: "Stick",
        name: "stick",
        count: 10,
      },
    ],
  },
  {
    title: "Wooden Shovel",
    name: "woodenShovel",
    count: 0,
    recipe: [
      {
        title: "Log",
        name: "log",
        count: 2,
      },
    ],
  },
  {
    title: "Stone Pickaxe",
    name: "stonePickaxe",
    count: 0,
    recipe: [
      {
        title: "Log",
        name: "log",
        count: 1,
      },
      {
        title: "Stone",
        name: "stone",
        count: 4,
      },
    ],
  },
  {
    title: "Bronze Pickaxe",
    name: "bronzePickaxe",
    count: 0,
    recipe: [
      {
        title: "Hummer",
        name: "hummer",
        count: 4,
      },
      {
        title: "Log",
        name: "log",
        count: 1,
      },
      {
        title: "Bronze Bar",
        name: "bronzeBar",
        count: 4,
      },
    ],
  },
  {
    title: "Bronze Hummer",
    name: "bronzeHummer",
    count: 0,
    recipe: [
      {
        title: "Hummer",
        name: "hummer",
        count: 4,
      },
      {
        title: "Stick",
        name: "stick",
        count: 1,
      },
      {
        title: "Bronze Bar",
        name: "bronzeBar",
        count: 2,
      },
    ],
  },
  {
    title: "Bronze Axe",
    name: "bronzeAxe",
    count: 0,
    recipe: [
      {
        title: "Hummer",
        name: "hummer",
        count: 4,
      },
      {
        title: "Log",
        name: "log",
        count: 1,
      },
      {
        title: "Bronze Bar",
        name: "bronzeBar",
        count: 4,
      },
    ],
  },
  {
    title: "Bronze Knife",
    name: "bronzeKnife",
    count: 0,
    recipe: [
      {
        title: "Hummer",
        name: "hummer",
        count: 4,
      },
      {
        title: "Stick",
        name: "stick",
        count: 1,
      },
      {
        title: "Bronze Bar",
        name: "bronzeBar",
        count: 2,
      },
    ],
  },
  {
    title: "Stone Axe",
    name: "stoneAxe",
    count: 0,
    recipe: [
      {
        title: "Hummer",
        name: "hummer",
        count: 2,
      },
      {
        title: "Stone",
        name: "stone",
        count: 2,
      },
      {
        title: "Stick",
        name: "stick",
        count: 10,
      },
    ],
  },
  {
    title: "Stone Knife",
    name: "stoneKnife",
    count: 0,
    recipe: [
      {
        title: "Hummer",
        name: "hummer",
        count: 2,
      },
      {
        title: "Stone",
        name: "stone",
        count: 2,
      },
      {
        title: "Stick",
        name: "stick",
        count: 5,
      },
    ],
  },
];

export const kitchen: IItem[] = [
  {
    title: "Roasted Meat",
    name: "roastedMeat",
    count: 0,
    resourses: { food: 6 },
    recipe: [
      {
        title: "Meat",
        name: "meat",
        count: 1,
      },
    ],
  },
  // {
  //   title: "Roasted Meat",
  //   name: "roastedMeat",
  //   count: 0,
  //   resourse: 6,
  //   recipe: [
  //     {
  //       title: "Salted Meat",
  //       name: "saltedMeat",
  //       count: 1,
  //     },
  //   ],
  // },
  {
    title: "Potage",
    name: "potage",
    count: 0,
    resourses: { food: 30 },
    recipe: [
      {
        title: "Cabbage",
        name: "cabbage",
        count: 2,
      },
      {
        title: "Meat",
        name: "meat",
        count: 3,
      },
      {
        title: "Wooden Bowl",
        name: "woodenBowl",
        count: 1,
      },
    ],
  },
  {
    title: "Stew",
    name: "stew",
    count: 0,
    resourses: { food: 25 },
    recipe: [
      {
        title: "Carrot",
        name: "carrot",
        count: 2,
      },
      {
        title: "Meat",
        name: "meat",
        count: 2,
      },
      {
        title: "Wooden Bowl",
        name: "woodenBowl",
        count: 1,
      },
    ],
  },
  {
    title: "Meat with Gravy",
    name: "meatWithGravy",
    count: 0,
    resourses: { food: 30 },
    recipe: [
      {
        title: "Onion",
        name: "onion",
        count: 3,
      },
      {
        title: "Roasted Meat",
        name: "roastedMeat",
        count: 1,
      },
      {
        title: "Wooden Plate",
        name: "woodenPlate",
        count: 1,
      },
    ],
  },
  {
    title: "Mushroom Soup",
    name: "mushroomSoup",
    count: 0,
    resourses: { food: 10 },
    recipe: [
      {
        title: "Bolete Mushroom",
        name: "boleteMushroom",
        count: 1,
      },
      {
        title: "Parasol Mushroom",
        name: "parasolMushroom",
        count: 1,
      },
      {
        title: "Red Pine Mushroom",
        name: "redPineMushroom",
        count: 1,
      },
      {
        title: "Meat",
        name: "meat",
        count: 1,
      },
      {
        title: "Wooden Bowl",
        name: "woodenBowl",
        count: 1,
      },
    ],
  },
];

export const sewingHut: IItem[] = [
  {
    title: "Linen Thread",
    name: "linenThread",
    count: 0,
    recipe: [
      {
        title: "Flax Stalk",
        name: "flaxStalk",
        count: 10,
      },
    ],
  },
  {
    title: "Wool Thread",
    name: "woolThread",
    count: 0,
    recipe: [
      {
        title: "Wool",
        name: "wool",
        count: 8,
      },
    ],
  },
  {
    title: "Linen Fabric",
    name: "linenFabric",
    count: 0,
    recipe: [
      {
        title: "Linen Thread",
        name: "linenThread",
        count: 1,
      },
    ],
  },
  {
    title: "Wool Fabric",
    name: "woolFabric",
    count: 0,
    recipe: [
      {
        title: "Wool Thread",
        name: "woolThread",
        count: 1,
      },
    ],
  },
  {
    title: "Simple Bag",
    name: "simpleBag",
    count: 0,
    recipe: [
      {
        title: "Leather",
        name: "leather",
        count: 3,
      },
    ],
  },
  {
    title: "Bag",
    name: "bag",
    count: 0,
    recipe: [
      {
        title: "Leather",
        name: "leather",
        count: 2,
      },
      {
        title: "Linen Fabric",
        name: "linenFabric",
        count: 2,
      },
    ],
  },
  {
    title: "Waterskin",
    name: "waterskin",
    count: 0,
    recipe: [
      {
        title: "Leather",
        name: "leather",
        count: 4,
      },
      {
        title: "Linen Thread",
        name: "linenThread",
        count: 2,
      },
    ],
  },
  {
    title: "Fur Boots",
    name: "furBoots",
    count: 0,
    recipe: [
      {
        title: "Fur",
        name: "fur",
        count: 16,
      },
      {
        title: "Leather",
        name: "leather",
        count: 12,
      },
    ],
  },
  {
    title: "Thick Leather Gloves",
    name: "thickLeatherGloves",
    count: 0,
    recipe: [
      {
        title: "Linen Thread",
        name: "linenThread",
        count: 2,
      },
      {
        title: "Leather",
        name: "leather",
        count: 4,
      },
    ],
  },
];

export const workshop: IItem[] = [
  {
    title: "Bucket",
    name: "bucket",
    count: 0,
    recipe: [
      {
        title: "Plank",
        name: "plank",
        count: 2,
      },
    ],
  },
  {
    title: "Wooden Vial",
    name: "woodenVial",
    count: 0,
    mult: 10,
    recipe: [
      {
        title: "Plank",
        name: "plank",
        count: 1,
      },
    ],
  },
  {
    title: "Wooden Bowl",
    name: "woodenBowl",
    count: 0,
    mult: 5,
    recipe: [
      {
        title: "Log",
        name: "log",
        count: 1,
      },
    ],
  },
  {
    title: "Wooden Plate",
    name: "woodenPlate",
    count: 0,
    mult: 5,
    recipe: [
      {
        title: "Log",
        name: "log",
        count: 1,
      },
    ],
  },
];
