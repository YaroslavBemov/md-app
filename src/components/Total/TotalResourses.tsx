import React from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import { IResourses } from "../../interfaces";
import Box from "@mui/material/Box";

type PropType = {
  resourses: IResourses;
};

const StoreTotalItem = ({ resourses }: PropType) => {
  const { food, water, wood } = resourses;

  // const color = count < 0 ? "red" : "green"

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      <Box>{food ? `Food: ${food}` : null}</Box>
      <Box>{water ? `Water: ${water}` : null}</Box>
      <Box>{wood ? `Wood: ${wood}` : null}</Box>
    </Box>
  );
};

export default observer(StoreTotalItem);
