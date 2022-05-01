import React from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import { IItem } from "../../interfaces";

type PropType = {
  item: IItem;
};

const TotalItem = ({ item }: PropType) => {
  const { title, count } = item;
  let color = count < 0 ? "red" : "green";

  const portions = item.portions !== undefined ? item.portions : undefined;
  console.log(portions);

  if (portions !== undefined) {
    color = portions < 0 ? "red" : "green";
  }

  return (
    <Typography color={color}>
      {title}: {count}
      {portions !== undefined ? " (" + portions + ")" : ""}
    </Typography>
  );
};

export default observer(TotalItem);
