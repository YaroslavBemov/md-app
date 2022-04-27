import React from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { IStore } from "../../interfaces";
import StoreTotalItem from "./StoreTotalItem";
import StoreListItem from "./StoreListItem";

type PropType = {
  store: IStore;
};

const Store = ({ store }: PropType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    store.changeCount(name, Number(value));
  };

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation()
  //   localStorage.setItem(store.name, JSON.stringify(store.items))
  // }

  return (
    <Accordion>
      <Paper elevation={3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Typography>{store.name}</Typography>
            {/* <Button onClick={handleClick}>Save</Button> */}
          </Box>
        </AccordionSummary>
      </Paper>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          {store.items.map((item) => <StoreListItem key={item.name} item={item} onChange={handleChange} />)}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            p: 1,
          }}
        >
          {store.total
            .sort((a, b) => (a.count > b.count ? -1 : 1))
            .map((item) => <StoreTotalItem key={item.name} item={item} />)}
        </Box>
      </Box>
    </Accordion>
  );
};

export default observer(Store);
