import React from "react";
import { observer } from "mobx-react-lite";
import { ITools } from "../../interfaces";
import Box from "@mui/material/Box";

type PropType = {
  tools: ITools;
};

const TotalTools = ({ tools }: PropType) => {
  const {
    hummer,
    axe,
    knife,
    pickaxe,
    shovel,
  } = tools;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      <Box>{hummer ? `Hummer: ${hummer}` : null}</Box>
      <Box>{axe ? `Axe: ${axe}` : null}</Box>
      <Box>{knife ? `Knife: ${knife}` : null}</Box>
      <Box>{pickaxe ? `Pickaxe: ${pickaxe}` : null}</Box>
      <Box>{shovel ? `Shovel: ${shovel}` : null}</Box>
    </Box>
  );
};

export default observer(TotalTools);
