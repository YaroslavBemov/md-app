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
  {
    title: "Straw",
    name: "straw",
    count: 0,
    recipe: [],
  },
];

export const woodshed: IItem[] = [
  {
    title: "Log",
    name: "log",
    count: 0,
    resourses: {
      wood: 10,
    },
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
      wood: 5,
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
    portions: 10,
    resourses: { water: 25 },
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
    portions: 4,
    resourses: { water: 25 },
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
    title: "Berry",
    name: "berry",
    count: 0,
    resourses: { food: 0.5, water: 1 },
    recipe: [],
  },
  {
    title: "Poison",
    name: "poison",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
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
  {
    title: "Poisoned Arrow",
    name: "poisonedArrow",
    count: 0,
    mult: 10,
    recipe: [
      {
        title: "Arrow",
        name: "arrow",
        count: 10,
      },
      {
        title: "Poison",
        name: "poison",
        count: 1,
      },
    ],
  },
  {
    title: "Potion of Instant Healing I",
    name: "potionOfInstantHealingI",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Dandelion",
        name: "dandelion",
        count: 2,
      },
      {
        title: "Broadleaf Plaintain",
        name: "broadleafPlaintain",
        count: 2,
      },
    ],
  },
  {
    title: "Potion of Instant Healing II",
    name: "potionOfInstantHealingII",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Dandelion",
        name: "dandelion",
        count: 4,
      },
      {
        title: "Broadleaf Plaintain",
        name: "broadleafPlaintain",
        count: 4,
      },
    ],
  },
  {
    title: "Potion of Healing I",
    name: "potionOfHealingI",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Dandelion",
        name: "dandelion",
        count: 5,
      },
      {
        title: "Broadleaf Plaintain",
        name: "broadleafPlaintain",
        count: 5,
      },
    ],
  },
  {
    title: "Potion of Healing II",
    name: "potionOfHealingII",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Dandelion",
        name: "dandelion",
        count: 10,
      },
      {
        title: "Broadleaf Plaintain",
        name: "broadleafPlaintain",
        count: 10,
      },
    ],
  },
  {
    title: "Potion of Health",
    name: "potionOfHealth",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Dandelion",
        name: "dandelion",
        count: 5,
      },
      {
        title: "Broadleaf Plaintain",
        name: "broadleafPlaintain",
        count: 5,
      },
      {
        title: "Daisy",
        name: "daisy",
        count: 5,
      },
      {
        title: "Poppy Seed",
        name: "poppySeed",
        count: 5,
      },
    ],
  },
  {
    title: "Potion of Stamina",
    name: "potionOfStamina",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Dandelion",
        name: "dandelion",
        count: 5,
      },
      {
        title: "Chicory",
        name: "Chicory",
        count: 5,
      },
    ],
  },
  {
    title: "Potion of Satiety",
    name: "potionOfSatiety",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Hop",
        name: "hop",
        count: 1,
      },
      {
        title: "Chicory",
        name: "Chicory",
        count: 5,
      },
    ],
  },
  {
    title: "Potion of Saturation",
    name: "potionOfSaturation",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Hop",
        name: "hop",
        count: 1,
      },
      {
        title: "Daisy",
        name: "daisy",
        count: 4,
      },
    ],
  },
  {
    title: "Potion of Sobriety",
    name: "potionOfSobriety",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Thistle",
        name: "thistle",
        count: 2,
      },
      {
        title: "Daisy",
        name: "daisy",
        count: 2,
      },
    ],
  },
  {
    title: "Potion of Instant Cure",
    name: "potionOfInstantCure",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Thistle",
        name: "thistle",
        count: 3,
      },
      {
        title: "Chicory",
        name: "chicory",
        count: 3,
      },
      {
        title: "St. John's Wort",
        name: "stJohnsWort",
        count: 2,
      },
    ],
  },
  {
    title: "Potion of Cure",
    name: "potionOfCure",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Dandelion",
        name: "dandelion",
        count: 4,
      },
      {
        title: "Henbane",
        name: "Henbane",
        count: 4,
      },
      {
        title: "St. John's Wort",
        name: "stJohnsWort",
        count: 2,
      },
    ],
  },
  {
    title: "Potion of Night Vision",
    name: "potionOfNightVision",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Henbane",
        name: "Henbane",
        count: 5,
      },
      {
        title: "Deadly Nightshade",
        name: "deadlyNightshade",
        count: 10,
      },
    ],
  },
  {
    title: "Potion of Weight",
    name: "potionOfWeight",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Henbane",
        name: "Henbane",
        count: 5,
      },
      {
        title: "Poppy Seed",
        name: "poppySeed",
        count: 5,
      },
    ],
  },
  {
    title: "Potion of Temperature",
    name: "potionOfTemperature",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Hop",
        name: "hop",
        count: 5,
      },
    ],
  },
  {
    title: "Potion of Strength",
    name: "potionOfStrength",
    count: 0,
    recipe: [
      {
        title: "Wooden Vial",
        name: "woodenVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Henbane",
        name: "henbane",
        count: 5,
      },
    ],
  },
  {
    title: "Potion of Camouflage",
    name: "potionOfCamouflage",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Bucket of Water",
        name: "bucketOfWater",
        count: 1,
      },
      {
        title: "Parasol Mushroom",
        name: "parasolMushroom",
        count: 3,
      },
      {
        title: "Morel Mushroom",
        name: "morelMushroom",
        count: 3,
      },
      {
        title: "Bolete Mushroom",
        name: "boleteMushroom",
        count: 3,
      },
      {
        title: "Red Pine Mushroom",
        name: "redPineMushroom",
        count: 3,
      },
    ],
  },
  {
    title: "Potion of Possibilities",
    name: "potionOfPossibilities",
    count: 0,
    recipe: [
      {
        title: "Clay Vial",
        name: "clayVial",
        count: 1,
      },
      {
        title: "Mead",
        name: "mead",
        count: 1,
      },
      {
        title: "Wooly MilkcapMushroom",
        name: "woolyMilkcapMushroom",
        count: 5,
      },
      {
        title: "Fly Agaric Mushroom",
        name: "flyAgaricMushroom",
        count: 5,
      },
      {
        title: "Bitter Bolete Mushroom",
        name: "bitterBoleteMushroom",
        count: 5,
      },
    ],
  },
];
