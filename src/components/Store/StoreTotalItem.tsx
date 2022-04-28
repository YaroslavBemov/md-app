import React from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import { IItem } from "../../interfaces";

type PropType = {
  item: IItem;
};

const StoreTotalItem = ({ item }: PropType) => {
  const { title, count } = item;
  const portions = item.portions ? ' (' + item.portions + ')' : ''
  const color = count < 0 ? "red" : "green";

  return (
    <Typography color={color}>
      {title}: {count}{portions}
      {/* {resourse} */}
    </Typography>
  );
};

export default observer(StoreTotalItem);
