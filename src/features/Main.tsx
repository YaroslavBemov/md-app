import React from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useStore } from "../hooks/useStore";

import Store from "../components/Store/Store";
import Total from "../components/Total/Total";

const Main = () => {
  const {
    totalStore,
    hunterStore,
    excavationShedStore,
    woodshedStore,
    smithyStore,
    kitchenStore,
    mineStore,
    herbalistStore,
    wellStore,
    sewingStore,
    workshopStore,
  } = useStore();

  return (
    <Box component="main">
      <Container maxWidth="md">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Hunting</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Store store={hunterStore} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Extraction</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Store store={excavationShedStore} />
            <Store store={herbalistStore} />
            <Store store={mineStore} />
            <Store store={wellStore} />
            <Store store={woodshedStore} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Production</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Store store={kitchenStore} />
            <Store store={sewingStore} />
            <Store store={smithyStore} />
            <Store store={workshopStore} />
          </AccordionDetails>
        </Accordion>

        <Total store={totalStore} />
      </Container>
    </Box>
  );
};

export default observer(Main);
