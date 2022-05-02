import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { IItem } from "../../interfaces";

type PropType = {
  item: IItem;
  change: (name: string, value: number) => void;
};

const StoreListItem = ({ item, change }: PropType) => {
  const { title, name, count } = item;
  const mult = item.mult ? " x" + item.mult : "";
  const portions = item.portions ? " (" + item.portions + ")" : "";

  const refValue = useRef("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let valueToChange: number = +(+value).toFixed(2);

    if (refValue.current[refValue.current.length - 1] === ".") {
      valueToChange = parseFloat(refValue.current + value[value.length - 1]);
      refValue.current = "";
    }

    if (value[value.length - 1] === ".") {
      refValue.current = value;
    } else {
      refValue.current = "";
    }

    change(name, valueToChange);
  };

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
          onChange={handleChange}
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
