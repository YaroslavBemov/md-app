import React from "react";
import { observer } from "mobx-react-lite";
import { IResourses } from "../../interfaces";
import Box from "@mui/material/Box";

type PropType = {
  resourses: IResourses;
};

const TotalResourses = ({ resourses }: PropType) => {
  const { food, water, wood } = resourses;

  // const color = count < 0 ? "red" : "green"

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      <Box>{food ? `Food: ${+food.toFixed(2)}` : null}</Box>
      <Box>{water ? `Water: ${+water.toFixed(2)}` : null}</Box>
      <Box>{wood ? `Wood: ${+wood.toFixed(2)}` : null}</Box>
    </Box>
  );
};

export default observer(TotalResourses);
