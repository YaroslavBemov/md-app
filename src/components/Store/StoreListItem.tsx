import React from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { IItem } from "../../interfaces";

type PropType = {
  item: IItem;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StoreListItem = ({ item, onChange }: PropType) => {
  const { title, name, count } = item;
  const mult = item.mult ? " x" + item.mult : "";
  const portions = item.portions ? " (" + item.portions + ")" : "";

  return (
    <AccordionDetails key={item.name}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
        }}
      >
        <Typography>
          {title}
          {mult}
          {portions}
        </Typography>

        <TextField
          // type="number"
          name={name}
          value={count}
          onChange={onChange}
          label="Count"
          size="small"
          sx={{
            maxWidth: 80,
            ml: 2,
          }}
        >
          {count}
        </TextField>
      </Paper>
    </AccordionDetails>
  );
};

export default observer(StoreListItem);
