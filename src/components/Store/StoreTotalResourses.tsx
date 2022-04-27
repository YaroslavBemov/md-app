import React from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import { IResourses } from "../../interfaces";

type PropType = {
  total: IResourses;
};

const StoreTotalResourses = ({ total }: PropType) => {
  const { food, water, wood } = total;

  return (
    <>
      <Typography>{food ? `Food: ${food}` : null}</Typography>
      <Typography>{water ? `Water: ${water}` : null}</Typography>
      <Typography>{wood ? `Wood: ${wood}` : null}</Typography>
    </>
  );
};

export default observer(StoreTotalResourses);
